Isso no package faz com q o servidor saiba se é client ou backend etc >>> rever

"proxy": {
  "/auth/google": {
    "target": "http://localhost:5000"
  }

Nodemon é q nem hotmodule do webpack e no dev faz rodar os dois servidores ao mesmo tempo.

  "scripts": {
    "start": "node index.js",
    "server": "nodemon index.js",
    "client": "npm run start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },

cookies salva senha no navegador, e token no js e teria q usar o frontend
