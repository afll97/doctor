#utilice como imagen base en su version 12
#imagen base se cambia la version para utilizar el optimal changing
FROM node:15-slim 
#directorio de trabajo -ruta dentro del contendor
#carpeta en el contenedor- donde reside el app
WORKDIR /usr/app  
#copie el archivo de dependencias y paquetes
COPY package.json /usr/app/package.json
COPY package-lock.json /usr/app/package-lock.json
#se instalan las dependencias --ci:clean-install
#RUN npm i npm
RUN npm ci
#copie el codigo fuente
#COPY ./app /usr/app/
COPY . /usr/app/
#abra el puerto 9030 del contenedor
EXPOSE 9030
#se levanta 
#CMD [ "npm","start"]
CMD [ "node","app/api.js"]