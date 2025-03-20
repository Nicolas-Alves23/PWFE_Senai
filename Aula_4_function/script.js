// Funções: Bloco de código que tem a ideia de reutilização.
// a ideia principal, é fazr valer a madularidade e a simplicidade e a simplicidade das caracteristicas de um algoritmo 
// function NomeFunção (atributos) {} script que será usado 
// cleanCode


function saudar(){
    alert("Olá, lindo dia para nós")
}

function soma(a,b){
    // console.log é o print que ocorre no terminal 
    console.log(a)
    return a+b
}

// chamando a função 
saudar()
r = soma(10,20)
document.writeln(r)

// valores fixos caso o usuário não dê um input 
function somavarios(a= 0,b=0,c=0,d=0){
    return a+b+c+d
}

let resultado = somavarios(10,20,30,40)
document.writeln(`<p>${resultado}`)


// Manipulando strings 
function converterMaiusculo(texto){
    return texto.toUpperCase()
}

function contar(texto){
    return texto.length;
}

let texto =  prompt("Informe uma frase")
let fraseemCaixaAlta = converterMaiusculo(texto)
let quantas = contar(texto)
document.writeln(`<p> ${fraseemCaixaAlta}<p> ${quantas}`)

// manipulando elementos html 
let h1 = window.document.getElementsByTagName('h1')[0]
h1.style.color = 'blue'

let corpo = window.document.body
corpo.style.background = 'white'

//mudar cor de uma div
function mudarCor(){
    let div = document.getElementById("minhaDiv")

    if(div.style.backgroundColor == "red"){
        div.style.backgroundColor ="black"
    }else{
        div.style.backgroundColor= "red"
    }
}