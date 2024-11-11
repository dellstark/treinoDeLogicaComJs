function qtdVitoriaxDerrotas(vitoria, derrota){
    return vitoria - derrota;
}
function calcularRanking(saldoJogador){

    if(saldoJogador <= 10){
        return `Ferro`
    } else if(saldoJogador >10 && saldoJogador <= 20){
        return `Bronze`
    }else if(saldoJogador >21 && saldoJogador <= 50){
        return `Prata`
    }else if(saldoJogador >51 && saldoJogador <= 80){
        return `Ouro`
    }else if(saldoJogador >81 && saldoJogador <= 90){
        return `Diamante`
    }else if(saldoJogador >91 && saldoJogador <= 2100){
        return `Lendário`
    } else if(saldoJogador >=101){
        return `Imortal`
    } else{
        return `Sem Ranking`
    }
}

let vitorias = qtdVitoriaxDerrotas(70,5);

let ranking = calcularRanking(vitorias);

console.log(`O Herói tem saldo de ${vitorias} e está no nível de ${ranking}`)