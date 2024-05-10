const pessoa ={
    nome:"joao",
    idade: 30,
    profissao:"engenheiro",
};


function exebirInformacoes(pessoa){
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log(`Profissão: ${pessoa.profissao}`)
}

// function AtualizarIdade(pessoa, novaIdade){
//     pessoa.idade = novaIdade;

// }

// console.log("Informações da Pessoa");
// exebirInformacoes(pessoa);

// AtualizarIdade(pessoa, 31)

// console.log("\nInformações da Pessoa após autalização");
// exebirInformacoes(pessoa);


// function AtualizarProfissao(pessoa, novaProfissao,){
//     pessoa.profissao = novaProfissao;

// }

// console.log("Informações da Pessoa");
// exebirInformacoes(pessoa);

// AtualizarProfissao(pessoa, "enfermeiro")


// console.log("\nInformações da Pessoa após autalização");
// exebirInformacoes(pessoa);


function AtualizarProfissao(pessoa, novaProfissao, novaIdade){
    pessoa.profissao = novaProfissao;
    pessoa.idade = novaIdade;

}

console.log("Informações da Pessoa");
exebirInformacoes(pessoa);

AtualizarProfissao(pessoa, "enfermeiro", 31)


console.log("\nInformações da Pessoa após autalização");
exebirInformacoes(pessoa);

