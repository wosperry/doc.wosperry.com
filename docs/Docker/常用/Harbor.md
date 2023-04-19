# Harbor

## 1. 下载安装文件

找最新版本的话，可以去GitHub代码仓库找。
点右边的Release，找到最新的Release版本，跳过去，我安装的时候最新的release版本是harbor-offline-installer-v2.6.0.tgz

>[Github 仓库](https://github.com/goharbor/harbor)
>[安装文件下载地址](https://github.com/goharbor/harbor/releases/download/v2.6.0/harbor-offline-installer-v2.6.0.tgz)


## 2. 修改配置文件 harbor.yml 
1. 这里我下载的文件里面 harbor.yml还有后缀，我给直接重命名删了后缀，变成了 harbor.yml
2. 修改 harbor.yml 里面的各项配置，主要改
   1. hostname 给域名或者具体IP
   2. http 或者https，注意如果给http的时候，需要把https相关的东西注释掉。给https的话，需要给证书地址，用宿主机的路径。
   3. harbor_admin_password、邮箱之类的配置，都可以不改，登录之后可以在harbor管理里面修改。
   4. data_volume：<font color="red">这个记得改，默认用宿主的/data很容易出问题。</font>
3. 给执行权限，我是无所谓直接 `chmod 777 ./prepare ./install.sh` 给了所有权限，给了权限后，`ls` 可以看到这两个文件变成绿色。


## 3. 执行安装

``` shell
./prepare
./install.sh
```

如无意外的话，就没有意外了。

:::danger 踩坑提醒

不要手动执行 docker-compose up !!!

:::
