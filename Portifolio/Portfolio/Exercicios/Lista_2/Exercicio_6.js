// Vetor de nomes inicializados
let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];

// Nome a ser buscado (pode ser lido via prompt em um navegador)
let nomeBuscado = prompt("Digite um nome para buscar:");

let indice = nomes.indexOf(nomeBuscado);

if (indice !== -1) {
    console.log(`Nome encontrado na posição ${indice+1}.`);
} else {
    console.log("Nome não encontrado!");
}
