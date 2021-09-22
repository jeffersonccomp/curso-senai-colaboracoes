let qtdParticipantes;
let dataEvento = '19/09/2021';
let Npessoas;
let nome;
let idade;
let participante = ['Ana', 'jose', 'paulo'];
let dataAtual = '17/08/2021';

while dataEvento < dataAtual {

    console.log('qual a data do evento');
    if (dataEvento > dataAtual) {
        console.log("Evento confirmado");
        break;
    } else
        console.log('Data já passou, por favor coloque uma data valida')
}
console.log('Qual a idade do participante?');
if (idade < 18) {
    nome = prompt('Digite um nome');
    participante.push(nome)
    console.log(' Quantos participantes o evento vai ter? ');
    if (participante.length < 100) {

        console.log('Parabens cadastro realizado com sucesso');

    } else
        console.log('cadastro não realizado por excesso de pessoas');
} else
    console.log('cadastro não realizado por idade ser menor');