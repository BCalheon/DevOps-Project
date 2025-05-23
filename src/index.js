const express = require('express');
const app = express();

// Defina a porta
const PORT = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, DevOps!');
});

// Inicia o servidor na porta 3000 e escuta em todas as interfaces (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});