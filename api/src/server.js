const express = require('express');
const fs = require ('fs')
const path = require("path");
const server = express ();

const caminhoArquivo = path.join(__dirname, "mock/dados.txt")
const fsPromises = fs.promises;

server.get("/dados", async (_req, res) => {
    try {
        let dados= await fsPromises.readFile(caminhoArquivo, "utf-8");

        dados = dados
        .split("\r")
        .join("")
        .split("\n")
        .filter(linha => linha.trim !== "");
        
        res.json(dados);
    } catch (erro){
        res.status(500).json({ erro: "Erro ao ler o arquivo de texto"})
    }
});

server.put("/dados", () =>)

server.listen(3000, () => console.log("Api rodando!"));

