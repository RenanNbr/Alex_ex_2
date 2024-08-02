let   jasonstring = '{"nome": "joão", "idade": "30","casado": "true"}';
let  objeto  = JSON.parse(jasonstring, function(chave, valor){
    if(chave === "idade"){
        return Number(valor)
}
return valor
});

console.log(objeto.idade)

