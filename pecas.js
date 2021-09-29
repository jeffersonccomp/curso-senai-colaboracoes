var listaDePecas = ["Mangueira Corta Fogo", "Bateria", "Filtro de Ar", "Filtro de Oleo", "Disco de Freio", "Farol Direito", "Sensor de Ré", "Amortecedor", "Retrovisor Direito"]

if (listaDePecas.length <= 10) {
    console.log("É possivel cadastrar peças");

} else {
    console.log("Não é possivel cadastrar mais peças");
}

let pesoPeca = 120;

if (pesoPeca < 100) {
    console.log("A peça não possui o peso adequado");
} else {
    console.log("A peça possui o peso adequado");
}

let nomePeca = ("Bateria");

switch (nomePeca.length) {

    case 0:
        console.log("O nome da peça não pode estar em branco");
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de 3 caracteres");
        break;

    default:
        console.log("O nome da peça é aceitavel para o cadastro");
        break;
}