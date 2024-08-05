for (let i = 0; i <= 10; i++) {
    console.log(i)
    
}
//Questão 11
for (let index = 10; index <= 0; index--) {
    console.log(index)  
}
//Questão 12
let soma: number = 0
for (let index = 0; index<=100; index++) {
    soma+=index
}
console.log("a soma dos números de 1 a 100 é de: "+soma)
//Questão 13
for (let pares= 0; pares<=50; pares++) {
    if (pares %2==0){
        console.log(pares)
    }
}
//Questão 14

let multi: number= 1
for (let x= 1; x<=5; x++){
    multi*=x
    console.log(multi)
}

//Questão 15
for (let tabu= 0; tabu<=10; tabu++){
    console.log(`7 x ${tabu} = ${7*tabu}`)
}
//Questão 16

let media= 0
for (let nota= 0; nota<=5; nota++){
    let perg = Number(prompt("Diga sua nota"))
    media +=perg
   
}
let total = media/5
alert(`Sua média é ${total}`)
//Questão 17
for (let multiplo = 0 ; multiplo<=50; multiplo++){
    if (multiplo%3==0)
        console.log(multiplo)
}
//Questão 18
let min= 9999999
let max=-1
for (let digito = 0; digito<=10; digito++){
    let dados= Number(prompt("Digite um número"))
    if (dados>max){
        max = dados
    }
    if (dados<min){
        min = dados
    }

    alert(`O menor número digitado foi ${min}, e o mair ${max}`)
}
//Questão 19
for (let num = 0; num<=100; num++){
    if (num%2==0){
        console.log(num)
    }
}
//Questão 20
for (let y = 0 ; y<=5 ; y++) {
    let nota = Number(prompt("Qual a sua nota?"))
    if (nota>7){
        alert("Você passou de ano!")
    }else{
        alert("Você não passou de ano!")
    }
}
//Questão 21
let numeral: string | null = prompt("Digite um número inteiro");

if (numeral !== null) {
    let lista: string[] = numeral.split("");
    if (lista.length >= 2) {
        let primeiroDigito: number = Number(lista[0]);
        let segundoDigito: number = Number(lista[1]);

        let somando: number = primeiroDigito + segundoDigito;
        console.log("A soma dos dois primeiros dígitos é:", somando);
    } else {
        console.log("O número deve ter pelo menos dois dígitos.");
    }
} else {
    console.log("Nenhum número foi digitado.");
}
//Questão 22
let pergunta = Number(prompt("Diga um número"))
for (let u = 0; u>=pergunta ; u++) {
    if (pergunta%u==0) {
        console.log(u)
    }

}
//Questão 23
let totalAltura: number = 0;
let numeroDePessoas: number = 5;

for (let i = 1; i <= numeroDePessoas; i++) {
    let altura = parseFloat(prompt(`Digite a altura da pessoa ${i} em metros (ex: 1.75):`)!);
    totalAltura += altura;
}
let mediaAltura: number = totalAltura / numeroDePessoas;
console.log(`A média de altura das 5 pessoas é: ${mediaAltura.toFixed(2)} metros.`);
//Questão 24
for (let q = 1; q <= 100; q++) {
    if (q % 3 === 0 && q % 5 === 0) {
        console.log("FizzBuzz");
    } else if (q % 3 === 0) {
        console.log("Fizz");
    } else if (q % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(q);
    }
}
//Questão 25
// Lê o número do usuário
let numeroStr: string | null = prompt("Digite um número inteiro:");
if (numeroStr !== null) {
    let numero: string = numeroStr;
    let soma: number = 0;
    for (let z = 0; z < numero.length; z++) {
        let digito: number = parseInt(numero[z], 10); 

        
        if (digito % 2 === 0) {
            soma += digito; 
        }
    }

    console.log("A soma dos dígitos pares é:", soma);
} else {
    console.log("Nenhum número foi digitado.");
}
//Questão 26
let numerop: string | null = prompt("Digite um número inteiro:");
if (numerop !== null) {
    let numeroInvertido: string = numerop.split("").reverse().join("");
    console.log("O número invertido é:", numeroInvertido);
} else {
    console.log("Nenhum número foi digitado.");
}





