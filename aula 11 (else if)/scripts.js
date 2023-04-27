let a = 5;
let b = 3

if(a + b == 3) {
    console.log('o resultado e 3');
} else if(a == 4) {
    console.log('o valor de a e 4');
} else if (b == 3) {
    console.log('o valor de b e 3');
} else {
    console.log('nenhuma das condicoes acima')
}

let nome = "Andre";
let idade = "27";

if(nome != undefined && nome == "nao existe") {
    console.log("Nome esta definido")
} else if(nome == "Andre" && nome.length > 4 && idade == 50) {
    console.log("O nome e Andre");
} else {
    console.log("O nome nao e Andre!");
}

if(1 > 2) {
    console.log("teste")
} else if(1 == 1) {
    console.log("testando"); 
}

let y = 1;
let x = 2;

if(y + x == 3) {
    console.log('o resultado esta correto');
} else if(y == 2) {
    console.log('Errada')
} else {
    console.log('reprovada');
}