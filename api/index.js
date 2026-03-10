const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("TESTANDO PARA ENTREGAR ATIVIDADE ");
});

app.get("/random", (req, res) => {
  const numero = Math.floor(Math.random() * 100) + 1;
  res.send(`Número aleatório: ${numero}`);
});


app.get("/dado", (req, res) => {
  const dado = Math.floor(Math.random() * 6) + 1;
  res.send(`Resultado do dado: ${dado}`);
});

const citacoes = [
  { autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento." },
  { autor: "Isaac Newton", citacao: "Se vi mais longe foi por estar sobre ombros de gigantes." },
  { autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido." },
  { autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta." },
  { autor: "Nikola Tesla", citacao: "O presente é deles; o futuro é meu." },
  { autor: "Stephen Hawking", citacao: "A inteligência é a capacidade de se adaptar às mudanças." },
  { autor: "Carl Sagan", citacao: "Em algum lugar, algo incrível está esperando para ser descoberto." },
  { autor: "Richard Feynman", citacao: "A ciência é a crença na ignorância dos especialistas." },
  { autor: "Niels Bohr", citacao: "Prever é muito difícil, especialmente o futuro." },
  { autor: "Max Planck", citacao: "A ciência avança um funeral de cada vez." },
  { autor: "Johannes Kepler", citacao: "A natureza usa a linguagem da matemática." },
  { autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada." },
  { autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem ser separadas." },
  { autor: "Michael Faraday", citacao: "Nada é maravilhoso demais para ser verdade." },
  { autor: "Gregor Mendel", citacao: "Minha ciência é baseada em experimentos." },
  { autor: "James Clerk Maxwell", citacao: "A verdadeira lógica deste mundo é o cálculo das probabilidades." },
  { autor: "Enrico Fermi", citacao: "Nunca confie em um experimento até ser confirmado pela teoria." },
  { autor: "Erwin Schrödinger", citacao: "A tarefa não é ver o que ninguém viu, mas pensar o que ninguém pensou." },
  { autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si." },
  { autor: "Ada Lovelace", citacao: "A máquina analítica tece padrões algébricos." },
  { autor: "Alan Turing", citacao: "Uma máquina pode pensar?" },
  { autor: "Jane Goodall", citacao: "O que você faz faz diferença." },
  { autor: "Tim Berners-Lee", citacao: "A web é para todos." },
  { autor: "Katherine Johnson", citacao: "Nós sempre fizemos matemática." },
  { autor: "Grace Hopper", citacao: "A frase mais perigosa é: sempre fizemos assim." },
  { autor: "Alexander Fleming", citacao: "Às vezes se encontra o que não se procura." },
  { autor: "Linus Pauling", citacao: "A melhor forma de ter boas ideias é ter muitas ideias." },
  { autor: "Rachel Carson", citacao: "Na natureza nada existe sozinho." },
  { autor: "Neil deGrasse Tyson", citacao: "O universo está sob nenhuma obrigação de fazer sentido para você." }
];

app.get("/citacoes", (req, res) => {
  const citacao = citacoes[Math.floor(Math.random() * citacoes.length)];
  res.send(citacao);
});

module.exports = app;