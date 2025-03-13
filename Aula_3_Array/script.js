/*variaveis =  espaço em memoria para armazenar valores 
let = valores variaveis que recebo em em meio da execução do código 
const = valores fixos no codigo 
var = variavel obsoleta, primeira forma de declarar variavel 
escopo diz respeito como eu vou usar as variaveis criadas
uma variavel criada dentro de uma função é usada dentro dela mesma 
Array (conjunto de dados numa varaivel)


    BLOCO DE CODIGO 

Usando os "[]" eu posso criar esse array, lembrando que ele é indexado, começando em "0"
*/
let numeros = [5,10,15,20,25,30,35,40,45,50]

//para saber o indice somente do 0 ao 9
for(let indice in numeros){
    document.write(indice)
}

//of utilizado para ver os valores armazenados no indice
for(let valores of numeros){
    document.write(`  ${valores},`)
}

//forEach criado para a manipulação de array
numeros.forEach(function(valores){
    document.writeln(`<p>${valores} <p>`)
})

//inserir número no final com o metódo push 
numeros.push(60)
document.writeln(`Inserir numero com push <p>${numeros},<p> `)

//inserir número no começo com o metódo unshift
numeros.unshift(1000)
document.writeln(`Inserir numero com unshift <p>${numeros},<p> `)

//excluir número no final com o metódo pop 
numeros.pop()
document.writeln(`excluir numero com o pop <p>${numeros},<p> `)

//excluir número no inicio com o método shift 
numeros.shift()
document.writeln(`excluir numero com shift <p>${numeros}, `)

// funções callback: eu interajo com o meu array trato a informações e guardo o resultado em outra array 
// MAP percorre o array inteiro e faz a function desejada e retorna o valor na variavel 
let numerosDobrados = numeros.map(function(numero){
    return numero*2
})
document.writeln(`<p>Função callback<p>${numerosDobrados}<p>`)

// Filter: Ele percorre o array, e guarda no array de retorno o valor correspondente na condição 
let numerosdiv3 = numeros.filter(function(valor){
    return valor % 3 === 0
})
document.writeln(`<p>Aqui usamos o filter <p>${numerosdiv3}<p>`)

// find: percorre o array, guarda o primeiro valor e retorna correspondente na condição
let numerosdiv4 = numeros.find(function(valor){
    return valor % 4 === 0
})
document.writeln(`<p>Aqui usamos o find <p>${numerosdiv4}<p>`)