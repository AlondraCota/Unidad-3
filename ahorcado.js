menu1();

function menu1(){
    let menu = prompt("Ingresa la jugador que deseaas ser: \n 1. Jugar \n  2. Salir \n");
    switch (menu){
        case  "1":
            alert("Has seleccionado jugar ");
            frasejugador1();
            break;
        case "2":
            alert("Gracias por jugar");
            break;
        default:
            alert("Jugador no valido");
            menu1();
            break;
    }
}

function frasejugador1() {
    alert("Solo tienes 3 oportunidades para ganar");
    let frase = prompt("Que frase deseas adivinar? \n 1. Frase A \n 2. Frase B");
    switch (frase){
        case "1":
            alert("Tu frase es: s_a__  _a__");
            adivinajugador1();
            break;
        case "2":
            alert("Tu frase es c__r__a __ __ _u__t_");
            ahorcadojugador1();
            break;
        default:
            alert("Frase no valida");
            menu1();
            break;
    }
}

function adivinajugador1(){
    let a = prompt("La frace tiene una h? \n = si \n = no");
    let b = prompt("La frace tiene una t? \n = si \n = no");
    let c = prompt("La frace tiene una s? \n = si \n = no");
    let d = prompt("La frace tiene una w? \n = si \n = no");
    if (a == "no" && b == "no" && c == "no" && d == "no") {
        alert("Felicidades encontraste la frase del jugador! ");
        console.log("Felicidades encontraste la frase del jugador  la frase es: start wars");
        return frasejugador1();
    }else{
        alert("Lo sientimos no encontraste la fraese del jugador ");
        console.log("Lo sientimos no encontraste la fraese del jugador ");
        let e = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (e) {
            case "si":
                alert("Vuelve  intentarlo");
                adivinajugador1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                adivinajugador1();
                break;
        }
    }
}

function ahorcadojugador1(){
    let a = prompt("La frace tiene una h? \n = si \n = no");
    let b = prompt("La frace tiene una r? \n = si \n = no");
    let c = prompt("La frace tiene una a? \n = si \n = no");
    let d = prompt("La frace tiene una f? \n = si \n = no");
    let e = prompt("La frace tiene una m? \n = si \n = no");
    let f = prompt("La frace tiene una n? \n = si \n = no");
    let g = prompt("La frace tiene una e? \n = si \n = no");
    let h = prompt("La frace tiene una d? \n = si \n = no");
    let i = prompt("La frace tiene una k? \n = si \n = no");
    let j = prompt("La frace tiene una l? \n = si \n = no");
    if (a == "no" && b == "si" && c == "si" && d == "no" && e == "si" && f == "no" && g == "si" && h == "si" && i == "no" && j == "si") {
        alert("Felicidades encontraste la frase del jugador! ");
        console.log("Felicidades encontraste la frase del jugador es: carrera de la muerte");
        return frasejugador1();
    }else{
        alert("Lo sientimos no encontraste la fraese del jugador ");
        console.log("Lo sientimos no encontraste la fraese del jugador ");
        let k = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (k) {
            case "si":
                alert("Vuelve  intentarlo");
                ahorcadojugador1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                ahorcadojugador1();
                break;
        }
    }
}