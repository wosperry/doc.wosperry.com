# Portainer

## 运行Portainer

``` shell

# 拉取镜像
docker pull portainer/portainer

# 运行
docker run -d \
  -p 9000:9000 \
  --name portainer \
  --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  portainer/portainer

```

这里需要把宿主机的docker.sock路径挂载进去，容器可以使用宿主机的docker镜像，拉取或者构建的镜像在宿主机也可以使用。

## 配置

- 注册账号密码
- 选择local，即可管理本机docker
