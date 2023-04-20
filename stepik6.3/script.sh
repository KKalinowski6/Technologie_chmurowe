docker build -t backend ./backend
docker build -t frontend ./frontend

docker network create frontend_network
docker network create backend_network

docker run -d --name db --network backend_network -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=my_db mysql

docker run -d --name backend --network backend_network backend
docker network connect frontend_network backend

docker run -d --name frontend --network frontend_network frontend