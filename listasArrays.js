console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(salvador, saoPaulo, rioDeJaneiro);


//declarando um array
const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
);

//adicionando um item ao final do Array
listaDeDestinos.push(`Sorocaba`,`Salto Grande`);
console.log(listaDeDestinos);

//removendo itens da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

//removendo item do final do Array
listaDeDestinos.pop();

//removendo item do inicio do Array
listaDeDestinos.shift();


//imprimindo apenas 01 item da lista
console.log(listaDeDestinos[2]);