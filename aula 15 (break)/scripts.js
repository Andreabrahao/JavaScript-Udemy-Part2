let nome = "Andre";

for(let i = 0; i < 10; i = i + 1) {

    if(i == 3) {
        nome = "Joaquim";
    }

    if(i == 5 && nome == "Joaquim") {
        console.log("O nome e Joaquim, pode parar");
        break;
    }

    console.log(i);

}