function questao2(){
// declaração de vetor
    let jogadores = []
    let pontuacao = []
    for(let i=0;i<12;i++){
        jogadores.push(prompt(`Informe o jogador`))
        pontuacao.push(Number(prompt(`Informe a pontuação do jogador ${jogadores[i]}`)))
    }

    let soma = 0
    for(let i=0; i<12; i++){
        soma = soma + pontuacao[i] 
    }
    alert(`A média é ${soma / 12}`)
    // calcular o cestinha
    let maior = 0
    let nome = ""
    for(let i=0; i<12; i++){
        if (pontuacao [i] > maior){
            maior= pontuacao[i]
            nome = jogadores[i]
        }

    }
    console.log(`O cestinha do time é: ${nome} com ${maior} pontos`)

    let par = []
    let j = 0

    for(let i=0; i<12; i++){
        if(pontuacao [i] % 2 == 0){
            par.push(jogadores[i])
        }
    }
    alert(`Os pontuadores pares são: ${par}`)
}

let questao1 = () => {
    let whats = 0 
    let email = 0 
    let papel = 0 
    let tf = 0 
    let ava = 0
    let opcao
    do {
        opcao =Number(prompt(`Informe uma opção:`))
        switch (opcao) {
            case 1: ava++
                break
            case 2: papel++
                break
            case 3: whats ++
                break
            case 4:email++
                break
            case 5: tf++
                break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao !=0)
    console.log(`Ava - ${ava} Papel: - ${papel} WhatsApp - ${whats} Email- ${email} Tf: ${tf}`)

    console.log(`${tf/(ava+papel+whats+email+tf)*100}`)
    //ordenar
    let troca
    for(let i=0;i<4;i++){
        if (ava > papel){
            troca = ava; ava = papel; papel = troca 
        }
        if (papel > whatsapp){
            troca = papel; papel = whats; whats = troca 
        }
        if (whats > email){
            troca = whats; whats = email; email = troca 
        }
        if (email > tf){
            troca = email; email = tf; tf = troca 
        }
    }
    console.log(`${tf} ${email} ${whats} ${papel} ${ava}`)
}