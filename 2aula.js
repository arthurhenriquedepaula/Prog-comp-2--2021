let carro =  new Object();
carro.marca = "Fiat"
carro.modelo = "Strada"
carro.ano = 2021
carro.cor = "Preto"

consele.log(carro2)

let time =  {
    nome: "PSG",
    mundiais: 2,
    apelido: "Paris",
    localização: "França"
}

conseole.log(time)

conseole.log(serie1)

let nuvem1 = new Object()

nuvem1["Local"] = "Amazon"
nuvem1["Disco"] = "256 de SSD"
nuvem1["Ram"] = 6

console.log(nuvem1)

let vetor= [] 
//Criar vetor com objetos
for(let i=0; i<4; I++){

    let objeto = {
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`informe qtde do produto`)),
        preco: Number(Prompt(`Informe preço do produto`))

    }
    vetor.push(objeto)
}
//calcular media de preços dos produtos:

let soma = 0 
for(let i=0;i<4;i++){
   soma = soma + vetor[i].preco
}
console.log(`A média é de ${soma/4}`)