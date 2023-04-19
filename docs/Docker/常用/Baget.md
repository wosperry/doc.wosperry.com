# Baget

BaGet 可以运行于 Docker、Kubernetes 或者直接在 Linux、macOS 和 Windows 上通过命令行来运行构建。

BaGet 的主要特性如下：

- 支持多种服务器和数据库类型
- 简单易用的 WebUI，方便管理包和查找包的信息
- 使用模板方法可以很容易地进行自定义化扩展

BaGet 可以作为企业内部的 NuGet 标准包仓库，在代码迁移、多项目协作等环节中提供大量方便。同时也可以用作公共 NuGet 包范本(例如对外开放API)

## 1. 创建一个文件用于配置 (比如叫做baget.env，下面run的时候注意文件名)

更多配置项参考：[https://loic-sharma.github.io/BaGet/configuration]

``` config
# 这个aaaaaaa是个例子，应该改成自己的一个字符串啥的，安全
ApiKey=aaaaaaaa
Storage__Type=FileSystem
Storage__Path=/var/baget/packages
Database__Type=Sqlite
Database__ConnectionString=Data Source=/var/baget/baget.db
Search__Type=Database
```

## 2. 运行 BaGet

``` shell
# 拉取镜像
docker pull loicsharma/baget

# 运行
docker run \
    -d \
    --network=baget_baget \
    --restart=always \
    --name nuget-server \
    --publish 5555:80 \
    --env-file baget.env \
    -v /perry/baget-data:/var/baget \
    loicsharma/baget:latest

```

## 3. 发布 包

``` shell
dotnet nuget push -s http://localhost:5555/v3/index.json -k NUGET-SERVER-API-KEY package.1.0.0.nupkg

dotnet nuget push -s http://localhost:5555/v3/index.json -k NUGET-SERVER-API-KEY symbol.package.1.0.0.snupkg
```

## 4. 访问包管理界面

`http://localhost:5555/`

## 5. 项目里的私服地址配置

`http://localhost:5555/v3/index.json`

> [官方网站 https://loic-sharma.github.io/BaGet/installation/docker/](https://loic-sharma.github.io/BaGet/installation/docker/)