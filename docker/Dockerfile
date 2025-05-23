# Use uma imagem base do Node.js
FROM node:16

# Crie o diretório da aplicação no container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json para o diretório da aplicação
COPY package.json ./
COPY package-lock.json ./

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação para o container
COPY ./src

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/index.js"]