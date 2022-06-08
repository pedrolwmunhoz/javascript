const lanches = new Array(
    `1-Fumagali`,
    `2-Cachorro Quente`,
    `3-X-Salada`
)

const comandas = new Array()

const opcao= 1
const quantidade=2

if(opcao==1){
    comandas.push(quantidade+ " Fumagali")
}
else if(opcao==2){
    comandas.push(quantidade+ " Cachorro-Quente")
}else{
    comandas.push(quantidade+ " X salada")
}

console.log(comandas)

