let numeros = [10,20,30,40,50,60,70,80]

let numerosSoma = numeros.reduce(function(num, atual){
    return num+atual
}) 
let media = numerosSoma / 8
document.writeln(media)