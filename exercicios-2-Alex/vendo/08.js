function reviver(key, value){
    if (typeof value === 'number'){
        return value*2;
    }
    if(key === 'status' && value === 'ativo'){
        return 'inativo'
    }
    return value;
}

const  jasonstring = '{"nome": "jason", "idade": "35","status": "ativo"}';

const objeto = JSON.parse(jasonstring, reviver);

console.log(objeto);