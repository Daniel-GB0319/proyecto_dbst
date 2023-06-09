# proyecto_dbst
Proyecto de la materia Data Base Selected Topics

## Frontend

Asegúrate de tener los siguientes requisitos instalados en tu sistema:

NPM: No especifica, pero yo tengo la versión 9.6.7

Node JS: A partir de la versión 18.16.0 LTS

Sigue estos pasos para poner en marcha el proyecto:

1. Ejecuta el siguiente comando dentro de la carpeta "frontend" para instalar las dependencias del proyecto:

   ```shell
   npm install
2. Iniciar la aplicación en modo de desarrollo con el siguiente comando:

   ```shell
   npm run dev
3. Abre tu navegador web y visita la siguiente URL para ver la aplicación en ejecución:

   ```shell
   http://localhost:3000

## Backend

Sigue estos pasos para poner en marcha el proyecto:

1. Ejecuta el siguiente comando dentro de la carpeta "backend" para instalar las dependencias del proyecto:

   ```shell
   npm install
2. Iniciar la aplicación en modo de desarrollo con el siguiente comando:

   ```shell
   npm run back
3. Abre tu navegador web y visita la siguiente URL para ver la aplicación en ejecución:

   ```shell
   http://localhost:8000

## Database

Sigue estos pasos para poner en marcha la base de datos:

1. #

   ```shell
   sudo apt-get update
2. #

   ```shell
   sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
3. #

   ```shell
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
4. #

   ```shell
   sudo apt-get update
5. #

   ```shell
   sudo apt-get install docker-ce docker-ce-cli containerd.io
6. #

   ```shell
   docker --version
7. #

   ```shell
   docker pull mysql
8. #

   ```shell
   sudo service docker start
9. #

   ```shell
   docker run --name mymysql -e MYSQL_ROOT_PASSWORD=password123 -e MYSQL_DATABASE=proyecto_dbst -p 3306:3306 -d mysql

10. 
   ```shell
   docker exec -it mymysql bash
   
11. 

   ```shell
   mysql -u root -ppassword123

Posteriormente se carga la base de datos en el contenedor

