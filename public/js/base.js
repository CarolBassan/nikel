const nome = "Carolini Bassan";
let nome2 = "";
let pessoaDefault = {
    nome: "Carolini Bassan",
    idade: "22",
    trabalho: "Assistente Administrativa"
}

let nomes = ["Carolini Bassan", "Carolina Bempck", "Natalia Bempck"]

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Carolini Bassan",
        idade: "22",
        trabalho: "Assistente Administrativa" 
    },
    {
        nome: "Carolina Bempck",
        idade: "17",
        trabalho: "Estudante"
    }
];

function AlterarNome() {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(NovoNome) {
    nome2 = NovoNome
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa (pessoa) {
    pessoas.push (pessoa);
}

function imprimirPessoas () {
    console.log ("--------IMPRIMIR PESSOAS--------");
    pessoas.forEach ((item) => {
        console.log ("nome:");
        console.log (item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas ();

adicionarPessoa ({
    nome: "Natalia Bempck",
    idade: "24",
    trabalho: "secretária"
});

imprimirPessoas ();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//  nome: "Carolina Bempck",
//idade: "17",
// trabalho: "Estudante"
//});

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//AlterarNome();     