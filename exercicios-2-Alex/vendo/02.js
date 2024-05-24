const pessoa ={
    nome:"Isac",
    idade: 35,
    profissao:"Advogado",
};

console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa["idade"]);
console.log("profissão:", pessoa.profissao);


pessoa.descrever = function(){
    return `Meu Nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`
    
};

pessoa.idade = 6;
pessoa.profissao = "desempregado";

console.log(pessoa.descrever());

