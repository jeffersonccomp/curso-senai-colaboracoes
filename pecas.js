var listaPecas = ["Mangueira Corta Fogo", "Bateria", "Filtro de Ar",
    "Filtro de Oleo", "Farol Direito", "Amortecedor", "Pneus",
    "Retrovisor", "Radio"
]

if (listaPecas.length <= 10) {
    console.log("É possivel cadastrar peças");

} else {
    console.log("Não é possivel cadastrar mais peças");
}

let pesoPeca = 200;

if (pesoPeca > 100) {
    console.log("A peça possui o peso adequado");
} else {
    console.log("A peça não possui o peso adequado");
}

let nomePeca = ("Pneus");

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