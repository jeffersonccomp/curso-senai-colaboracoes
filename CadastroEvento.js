let nome = 'joao';
let idade = 21;
let participante = ['Luana', 'Herica', 'Pedro'];
let dataEvento = new Date(2022, 3, 3);
let dataAtual = new Date();

while (dataEvento.valueOf() < dataAtual.valueOf()) {

    console.log('qual a data do evento?');
    if (dataEvento > dataAtual) {
        console.log("Evento confirmado");
        break;
    } else
        console.log('Data já passou, por favor coloque uma data valida');
}
console.log('Qual a idade do participante?');
if (idade > 18) {
    console.log('Digite um nome');
    participante.push(nome)
    console.log(' Quantos participantes o evento vai ter? ');
    if (participante.length < 100) {

        console.log('Parabens cadastro realizado com sucesso');

    }
    if (participante.length > 100) {
        console.log('cadastro não realizado por excesso de pessoas');
        console.log('Lista de participantes:');
        for (let i = 0; i < participante.length; i++) {

            console.log(participante[i]);

        }
    }

} else
    console.log('cadastro não realizado por idade ser menor');