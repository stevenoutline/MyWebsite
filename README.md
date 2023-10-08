# MyWebsite

## 安装

```bash
# 获取项目
git clone https://github.com/stevenoutline/MyWebsite.git

# 配置域名
cd MyWebsite/user_conf.d &&
mv website.conf.example website.conf &&
vim website.conf
# 将 website.outline8.com 更换为对应域名

# 启动 docker
cd ..
sudo docker compose up -d
```

## 常用命令

```bash
# 启动 docker
sudo docker compose up -d
# 停止 docker
sudo docker compose down
# 查看 nginx 日志
sudo docker logs -f MyWebsite-nginx
# 重新加载配置
sudo docker exec MyWebsite-nginx nginx -s reload

```
