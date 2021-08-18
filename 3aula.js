let gerenciadorderedes = () => {
let vetorrd= [] 
//Criar vetor com objetos
for(let i=0; i<5; i++){

    let redessociais = {
        codigo: Number(prompt(`Informe o seu código:`)),
        nome: prompt(`informe seu nome:`),
        link: prompt(`Informe o link da rede social:`)

    }
    // Inserir objeto no vetor
    vetorrd.push(redessociais)
}
let vetorus= []
// cadastro dos usúarios
for(let i=0; i<5; i++){

    let usuarios = {
        login: prompt(`Informe o seu login:`),
        nomeus: prompt(`Informe seu nome por gentileza:`),
        codigous: Number(prompt(`Informe seu código por gentileza:`)),
        qtde: Number(prompt(`Informe a quantidade de posts por gentileza:`))
    }
    let achou = false // assumo que não achei
    let j = 0 // novo indice 
    while(!achou && j<5 ){ // sai ou pq acabou o vetor ou porque achou
        if(vetorrd[j].codigo == usuarios.codigous){
            vetorus.push(usuarios)
            achou = true
            alert(`Usuário inserido com sucesso`)
        }
        j++
    }

    if (!achou){
    alert(`Usuario não inserido, pois a rede social não foi encontrada`)
    } 
}
}