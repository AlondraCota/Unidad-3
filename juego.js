let tablero = 3;

let result = " ";

for(let fila = 1; fila <= tablero; fila++) {
    for(let colun = 1; colun <= tablero; colun++) {
        if((colun + fila) % 2 === 0) {
            result += "[]";
        }else {
            result += "[#]";
        }
    }
    result +="\n"; 
}
console.log(result);

alert("Bienvenidos al Juego de Batalla Naval");
menu1();

function menu1 (){
   let menu = prompt("Ingresa la jugador que deseaas realizar: \n 1. Jugador1 \n 2. Jugador2 \n 3. Salir \n");
    switch (menu) {
        case  "1":
            alert("Has seleccionado ser el jugador1");
            posicionbarco ();
            break;
        case "2":
            alert("Has seleccionado ser el jugador2");
            datosbar ();
            break;
        case "3":
            alert("Gracias por jugar");
            break;
        default:
            alert("Jugador no valido");
            menu1();
            break; 
    }
}
function posicionbarco () {
    let posicion = prompt("Ingresa la fila que desas de para tus barcos: \n 1. A n\ 2. B 3. Ambas");
    switch (posicion) {
        case "1":
            alert("Has seleccionado la fila A");
            p1();
            break;
        case "2":
            alert("Has seleccionado la fila B");
            p2();
            break;
        case "3":
            alert("Has seleccionado ambas filas");
            p3();
        case "4":
            alert("Regresando al Menu Principal");
            menu1
            break;
        default:
            alert("Posicones no validas");
            posicionbarco ();
            break;
    }
}
function p1 (){
    let a = prompt("1.- posicion a1? \n = si \n = no");
    let b = prompt("2.- posicion a2? \n = si \n = no");
    let c = prompt("3.- posicon a3? \n = si \n = no");
    if (a == "no" && b == "no" && c == "si") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste el primer barco de tu enenmigo 1/3");
        return posicionbarco();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        consolelog("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let d = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (d) {
            case "si":
                alert("Vuelve  intentarlo");
                p1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p1();
                break;
        }
    }
}
function p2 (){
    let a = prompt("1.- posicion b1? \n = si \n = no");
    let b = prompt("2.- posicion b2? \n = si \n = no");
    let c = prompt("3.- posicon b3? \n = si \n = no");
    if (a == "si" && b == "no" && c == "si") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste el segundo barco de tu enenmigo 2/3");
        return posicionbarco();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        console.log("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let d = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (d) {
            case "si":
                alert("Vuelve  intentarlo");
                p2();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p2();
                break;
        }
    }
}
function p3 (){
    let a = prompt("1.- posiciones a3 b2 b1? \n = si \n = no");
    let b = prompt("2.- posiciones b2 b3 b1? \n = si \n = no");
    let c = prompt("3.- posicones a3 b2 a1? \n = si \n = no");
    let d = prompt("1.- posiciones a1 b3 b1? \n = si \n = no");
    let e = prompt("1.- posiciones a3 b2 b1? \n = si \n = no");
    let f = prompt("1.- posiciones b2 a3 b1? \n = si \n = no");
    if (a == "no" && b == "no" && c == "si" && d == "no" && e == "no" && f == "no") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste los barcos de tu enenmigo: a3 b2 a1 3/3");
        return posicionbarco();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        console.log("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let g = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (g) {
            case "si":
                alert("Vuelve  intentarlo");
                p1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p1();
                break;
        }
    }
}
function datosbar () {
    let datos = prompt("Ingresa la fila que desas de para tus barcos: \n 1. A n\ 2. B 3. Ambas");
    switch (datos) {
        case "1":
            alert("Has seleccionado la fila A");
            p1();
            break;
        case "2":
            alert("Has seleccionado la fila B");
            p2();
            break;
        case "3":
            alert("Has seleccionado ambas filas");
            p3();
            default:
            alert("Posicones no validas");
            datobarco ();
            break;
    }
}
function p1 (){
    let a = prompt("1.- posicion a1? \n = si \n = no");
    let b = prompt("2.- posicion a2? \n = si \n = no");
    let c = prompt("3.- posicon a3? \n = si \n = no");
    if (a == "si" && b == "no" && c == "no") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste el primer barco de tu enenmigo 1/3");
        return datosbar();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        console.log("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let d = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (d) {
            case "si":
                alert("Vuelve  intentarlo");
                p1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p1();
                break;
        }
    }
}
function p2 (){
    let a = prompt("1.- posicion b1? \n = si \n = no");
    let b = prompt("2.- posicion b2? \n = si \n = no");
    let c = prompt("3.- posicon b3? \n = si \n = no");
    if (a == "no" && b == "si" && c == "no") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste el segundo barco de tu enenmigo 2/3");
        return datosbar();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        console.log("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let p4 = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (p4) {
            case "si":
                alert("Vuelve  intentarlo");
                p2();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p2();
                break;
        }
    }
}
function p3 (){
    let a = prompt("1.- posiciones a3 b2 b1? \n = si \n = no");
    let b = prompt("2.- posiciones b3 a2 a1? \n = si \n = no");
    let c = prompt("3.- posicones a1 b2 a2? \n = si \n = no");
    let d = prompt("1.- posiciones a1 b2 a2? \n = si \n = no");
    let e = prompt("1.- posiciones a3 b2 b1? \n = si \n = no");
    let f = prompt("1.- posiciones b2 b3 b1? \n = si \n = no");
    if (a == "no" && b == "no" && c == "no" && d == "si" && e == "no" && f == "no") {
        alert("Felicidades encontraste el barco de tu enenmigo");
        console.log("Felicidades encontraste los barcos de tu enenmigo: a1 b2 a2 3/3");
        return datosbar();
    }else {
        alert("Lo sientimos no encontraste al barco de tu enemigo");
        console.log("Lo sientimos, no encontraste el barco de tu enemigo 0/3");
        let g = prompt("Quieres volver a intentarlo? \n si \n no");
        switch (g) {
            case "si":
                alert("Vuelve  intentarlo");
                p1();
                break;
            case "no":
                alert("Regresando a menu principal");
                menu1();
                break;
            default:
                alert("Opcion no valida");
                p1();
                break;
        }
    }
}