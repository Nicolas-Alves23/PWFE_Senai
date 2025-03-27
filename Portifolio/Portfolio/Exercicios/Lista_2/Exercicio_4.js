let num_pares = 0
let num_impares = 0
for (i = 0 ; i <=9 ; i++){
    let num =  Number(prompt("Passe um número positivo para vermos se ele é par ou impar"))
    if (num % 2 === 0){
        num_pares += 1
    }
    else{
        num_impares += 1
    }
}
if (num_pares >= 1){
    document.writeln("Essa é a quantidade de números pares = "+num_pares)
}
else{
    document.writeln("Todos os números são ímpares")
}