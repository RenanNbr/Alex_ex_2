let   jasonstring = '{"nome": "joão", "idade": "30","casado": "true"}';
let  objeto  = JSON.parse(jasonstring);

console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.casado)