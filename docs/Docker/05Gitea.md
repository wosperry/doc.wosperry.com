# Gitea

## 前提
需要Linux系统安装好了docker compose

## Docker 及 Docker compose 安装

安装 docker

``` shell
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 查看版本确定下安装好了没
docker --version
```

安装 docker compose plugin

``` shell
# 安装
apt update && apt install docker-compose-plugin

# 查看版本
docker compose version

```

## Gitea安装步骤

准备文件（官方文档复制相应的compose文件，这里选了个基本的）

``` yml
version: "3"

networks:
  gitea:
    external: false

services:
  server:
    image: gitea/gitea:1.17.3
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - ALLOWED_HOST_LIST=192.168.2.8
    restart: always
    networks:
      - gitea
    volumes:
      - ./gitea:/data
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
```

``` shell
# 我直接创建一个路径，并过去
mkdir -p /perry/gitea-install
cd /perry/gitea-install

# 下面这行也可以换成，用现成的文件管理工具直接在某个路径下创建一个文件，文件名字叫做 docker-compose.yml，然后把内容贴进去，这里我是用vim命令直接在shell工具里创建的。
vim docker-compose.yml
# 按 Insert 进入编辑模式
# 粘贴
# ESC 进入命令模式，输入 :x 保存
``` 

正式安装

``` shell
# -d 表示后台运行，不占用当前这个控制台
docker compose up -d
```

打开 `IP:3000` 可以看到这样的界面，根据你自己用什么数据库，自己配置一下，如果没有数据库，可以用默认的sqlite。

![](https://wosperry.com/lsky/img/2022/11/30/63875dc302640.png)

注意：
- <font color="red">记得设置服务器域名为真正用于访问的IP或者域名</font>
- <font color="red">记得设置基础URL为真实访问的IP或者域名:上面设置的服务端口</font>
- <font color="red">记得设置管理员账号和密码</font>

![](https://wosperry.com/lsky/img/2022/11/30/63876089067df.png)

## 参考

> 菜鸟教程：https://www.runoob.com/docker/ubuntu-docker-install.html

> Gitea官方文档：https://docs.gitea.io/zh-cn/install-with-docker/ 