# Drone CI

## 有yml文件直接运行 `docker-compose up -d` 即可

``` yml
version: '3'

services:
  drone:
    image: drone/drone:2
    container_name: drone_server
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./drone/data:/data
      - ./drone/drone:/app
    restart: always
    depends_on:
      - dronedatabase
    environment:
      - DRONE_DATABASE_DATASOURCE=postgres://root:root@dronedatabase:5432/drone?sslmode=disable # 连接字符串
      - DRONE_GITEA_CLIENT_ID=[对应自己Git管理里面的应用client_id]
      - DRONE_GITEA_CLIENT_SECRET=[对应自己Git管理里面的应用client_secret]
      - DRONE_GITEA_SERVER=https://git.wosperry.com
      - DRONE_RPC_SECRET=[drone server的rpc secret] # 可以随便给
      - DRONE_SERVER_HOST=drone.wosperry.com # 这个是droneserver自己的域名，因为容器里他是不知道自己什么域名的，要告诉他
      - DRONE_SERVER_PROTO=https
      - DRONE_USER_CREATE=username:wosperry,admin:true # 设置管理员，不然的话无法拿到最高权限
      - DRONE_DATABASE_DRIVER=postgres
    networks:
      - drone_ci

  dronerunner:
    image: drone/drone-runner-docker:1
    restart: always
    depends_on:
      - drone
      - dronedatabase
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - DRONE_RPC_HOST=drone.wosperry.com # 告诉runner，server的地址
      - DRONE_RPC_PROTO=https
      - DRONE_RPC_SECRET=[drone server的rpc secret]
      - DRONE_RUNNER_CAPACITY=2
      - DRONE_RUNNER_NAME=drone_runner
    networks:
      - drone_ci

  dronedatabase:
    image: postgres:12
    restart: always
    environment:
      - POSTGRES_USER=root
      - POSTGRES_PASSWORD=123456
      - POSTGRES_DB=drone
    ports:
      - "5432:5432" # 这里暴露不暴露都无所谓，暴露是为了自己访问数据库看。不暴露的话，同网络里的容器也能通过容器名字访问
    volumes:
      - ./drone/database:/var/lib/postgresql/data
    networks:
      - drone_ci

networks:
  drone_ci:
    driver: bridge
```