# Use uma imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho no container
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json da pasta src para o diretório de trabalho
COPY ../src/package.json ./  
COPY ../src/package-lock.json ./  

# Instale as dependências
RUN npm install

# Copie todo o código da aplicação da pasta src para dentro do container
COPY ../src/ ./src/

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "src/index.js"]