# MyWebsite

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
