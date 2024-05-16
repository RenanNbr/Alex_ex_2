const produto ={
    nome:"Arroz",
    preço: 17.99,
    estoque:50,
};

console.log("Nome:", produto.nome);
console.log("Preço:", produto["preço"],"reais");
console.log("Estoque:", produto["estoque"]);


produto.descrever = function(){
    return `O pruduto ${this.nome} esta custando a bagatela de $${this.preço} e temos apenas ${this.estoque} em nosso estoque`
    
};

produto.preço = 16.99;
produto.estoque =  100;

console.log(produto.descrever())