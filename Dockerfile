# Establece la imagen base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Compila el proyecto de React
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD [ "npm", "start" ]
