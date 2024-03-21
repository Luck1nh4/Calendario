// criando as variaveis

const horaEl = document.getElementById('hora');
const minutosEl = document.getElementById('Minutos');
const segundosEl = document.getElementById('segundos');
const numDia = document.getElementById('numDia');
const numMes = document.getElementById('numMes');
const numAno = document.getElementById('numAno');
const descri = document.querySelector('.descri span');
const container = document.querySelector('.img')


let tempo; // variavel universal para tempo

// criando estrutura para o relogio
const relogio = setInterval(function time() {

    //chamando as variaveis e colocando valores de tempo a ela
    tempo = new Date();
    var hora = tempo.getHours();
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();

    // adicionando 0 caso numero seja menor que zero
    if (hora < 10) hora = '0' + hora
    if (minutos < 10) minutos = `0${minutos}`
    if (segundos < 10) segundos = `0${segundos}`

    //adicionando as variaveis com os valores no html
    horaEl.textContent = hora;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;


    // colocando a imagem de fundo de acordo com a hora e a estação do ano
    if (dia > 0 && mesNum <= 3 || dia < 21 && mesNum < 4) {
        if (hora < 5 || hora > 17) {
            container.style.background = 'url(Imagens/verao-noite.jpg)'
        } else {
            container.style.background = 'url(Imagens/verao-dia.jpg)'
        }

    } else if (dia > 20 && mes >= 3 || dia < 21 && mes <= 6) {
        if (hora < 5 || hora > 17) {
            container.style.background = 'url(Imagens/outono-noite.jpg)'
        } else {
            container.style.background = 'url(Imagens/outono-dia.jpg)'
        }

    } else if (dia > 20 && mesNum >= 6 || dia < 23 && mesNum <= 9) {
        if (hora < 5 || hora > 17) {
            container.style.background = 'url(Imagens/inverno-noite.jpg)'
        } else {
            container.style.background = 'url(Imagens/inverno-dia.jpg)'
        }

    } else if (dia > 22 && mesNum >= 9 || dia < 21 && mesNum <= 12) {
        if (hora < 5 || hora > 17) {
            container.style.background = 'url(Imagens/primavera-noite.png)'
        } else {
            container.style.background = 'url(Imagens/primavera-dia.jpg)'
        }

    } else if (dia > 20 && mesNum == 12) {
        if (hora < 5 || hora > 17) {
            container.style.background = 'url(Imagens/verao-noite.jpg)'
        } else {
            container.style.background = 'url(Imagens/verao-dia.jpg)'
        }
    }

})




// criando estrutura para as datas
tempo = new Date()
let dia = tempo.getDate()
let diaSem = tempo.getDay()
let mesNum = tempo.getMonth() + 1 // como começa do zero, acrescenta 1 para ficar exato
let mes = mesNum
let ano = tempo.getFullYear()

// o valor sempre retorna em numeros, entao cria um switch para dar nomes aos valores

// criando um para os dias da semana
switch (diaSem) {
    case 0:
        diaSem = 'Domingo'
        break;

    case 1:
        diaSem = 'Segunda-Feira'
        break;

    case 2:
        diaSem = 'Terça-Feira'
        break;

    case 3:
        diaSem = 'Quarta-Feira'
        break;
    case 4:
        diaSem = 'Quinta-Feira'
        break;
    case 5:
        diaSem = 'Sexta-Feira'
        break;

    case 6:
        diaSem = 'Sábado'
        break;

    default:
        break;
}

// criando outro para os meses do ano
switch (mes) {
    case 1:
        mes = 'Janeiro'
        break;

    case 2:
        mes = 'Fevereiro'
        break;

    case 3:
        mes = 'Março'
        break;

    case 4:
        mes = 'Abril'
        break;

    case 5:
        mes = 'Maio'
        break;

    case 6:
        mes = 'Junho'
        break;

    case 7:
        mes = 'Julho'
        break;

    case 8:
        mes = 'Agosto'
        break;

    case 9:
        mes = 'Setembro'
        break;

    case 10:
        mes = 'Outubro'
        break;

    case 11:
        mes = 'Novembro'
        break;

    case 12:
        mes = 'Dezembro'
}

if (dia < 10) dia = '0' + dia
if (mesNum < 10) mesNum = `0${mesNum}`


numDia.textContent = dia
numMes.textContent = mesNum
numAno.textContent = ano

descri.textContent = `- ${dia} de ${mes} de ${ano} -`