let num = []
for(i = 0 ; i<=7 ; i++){
    let valores = Number(prompt("Me passe um número de 100 a 200"))
    num.push(valores)
}
document.writeln(num)

let numeros1 = num.filter(function(num){
    return num >= 100 && num <= 200
})
document.writeln(`<p>Aqui usamos o filter <p>${numeros1}<p>`)