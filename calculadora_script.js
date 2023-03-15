
function calcAtraso() {
    
    // Váriavel que vai receber quantidade de cabines
    var qtdCabines = Number(idCabine.value)
    // Váriavel que vai receber quantidade de andares
    var qtdAndares = Number(idAndar.value)
    // Váriavel que vai receber quantidade de pessoas por andar
    var qtdPessoa = Number(idPessoa.value)
    // Váriavel que vai receber o tempo disponivel
    var tempo = Number(idTempo.value)

    // Váriavel que calcula a quantidade de pessoas por banheiro
    var pessoasBanheiro = qtdPessoa / qtdCabines
    // Váriavel que calcula o tempo total que a média das pessoas ficam no banheiro com tempo médio de 2 min
    var medio = pessoasBanheiro * 2
    var atraso = medio - tempo    // Váriavel que calcula o tempo em minutos do atraso


    // Se o tempo que as pessoas demoram for menor que o tempo disponivel, não há atraso

    div_calc.innerHTML =       `<br><b>Sem o sistema C.O.A.A, observa-se que:</b><br>`;
    div_calc.innerHTML +=      `<br>Média de pessoas por banheiro em um andar: ${pessoasBanheiro.toFixed(2)}.`; 
    div_calc.innerHTML +=      `<br>Total de minutos médios necessários para todo mundo ir ao banheiro ${medio.toFixed(2)}.`;
   
   
    if (medio < tempo) {
        atraso = 0;    
        buttonResolver.style.display =  "none";
        div_calc.innerHTML +=           `<br>Minutos de atraso: 0.`;

    }
    else {
        div_calc.innerHTML +=           `<br>Total de minutos disponibilizados: ${tempo.toFixed(2)}.`;
        div_calc.innerHTML +=           `<br>Minutos de atraso: ${atraso.toFixed(2)}.`;
        buttonResolver.style.display =  "block";
    }
    
    div_resolve.innerHTML = " ";
    buttonPagamento.style.display = "none";

}

function resolveAtraso() {

    // Váriavel que vai receber quantidade de cabines
    var qtdCabines = Number(idCabine.value)
    // Váriavel que vai receber quantidade de andares
    var qtdAndares = Number(idAndar.value)
    // Váriavel que vai receber quantidade de pessoas por andar
    var qtdPessoa = Number(idPessoa.value)
    // Váriavel que vai receber o tempo disponivel
    var tempo = Number(idTempo.value)

    // Váriavel que calcula a quantidade de pessoas por banheiro
    var pessoasBanheiro = qtdPessoa / qtdCabines
    // Váriavel que calcula o tempo total que a média das pessoas ficam no banheiro com tempo fixo de 2 min
    var medio = pessoasBanheiro * 2
    // Váriavel que calcula o tempo em minutos do atraso
    var atraso = medio - tempo

    var pessoasBanheiroSistema = qtdPessoa / (qtdCabines * qtdAndares)
    var medioSistema = pessoasBanheiroSistema * 2

    var atrasoSistema = medioSistema - tempo

    var porcentagem = atrasoSistema * 100 / atraso
    var porcentagemFinal = 100 - porcentagem

    div_resolve.innerHTML =      `<b>Aplicando o sistema C.O.A.A, observa-se que:</b><br>`;
    div_resolve.innerHTML +=     `<br>Média de pessoas pelo total de banheiros no prédio: ${pessoasBanheiroSistema.toFixed(2)}.`;
    div_resolve.innerHTML +=     `<br>Total de minutos médios necessários para todo mundo ir ao banheiro: ${medioSistema.toFixed(2)}.`;
    
    if (medioSistema <= tempo) {

        div_resolve.innerHTML +=     `<br>Minutos de atrasos: 0.`;
        div_resolve.innerHTML +=     `<br>Houve uma redução de 100% no atraso.`;
    }   
    else {
        div_resolve.innerHTML +=        `<br>Minutos de atrasos: ${atrasoSistema.toFixed(2)}.`;
        div_resolve.innerHTML +=       `<br>Houve uma redução de ${porcentagemFinal.toFixed(2)}% no atraso.`;
    } 

    //buttonPagamento.style.display = "block";
}

function pagamento() {
    
}