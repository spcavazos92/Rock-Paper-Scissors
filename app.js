let computerPlay = () => {
    let aleatorio=Math.floor(Math.random()*3);
    if (aleatorio==1){
        aleatorio="Piedra";
    } else if(aleatorio==2){
        aleatorio="Papel";
    } else {
        aleatorio="Tijera";
    }
    return aleatorio;
};

// console.log(computerPlay());

let playerPlay = () => {
    let respuesta = (prompt("Make your choice (Piedra/Papel/Tijera)",)).toUpperCase();
    if (respuesta==="PIEDRA" || respuesta==="PAPEL" || respuesta==="TIJERA"){
        respuesta=respuesta.toLowerCase();
        respuesta=respuesta.charAt(0).toUpperCase()+respuesta.slice(1);
        return respuesta;
    } else {
        alert("Respuesta invalida, ingrese nuevamente");
        respuesta=playerPlay();
        return respuesta;
    }
};

// console.log(playerPlay());

let ronda = () => {
    let resultado;
    let explicacion;
    let jugador=playerPlay();
    let computadora=computerPlay();
    let par=jugador+computadora;
    if (par=="PiedraPiedra"||par=="PapelPapel"||par=="TijeraTijera"){
        resultado="Empataste";
        explicacion="empata";
    } else if (par=="PiedraPapel"||par=="PapelTijera"||par=="TijeraPiedra"){
        resultado="Perdiste";
        explicacion="pierde";
    } else {
        resultado="Ganaste";
        explicacion="gana";
    }
    alert(`${resultado}! ${jugador} ${explicacion} contra ${computadora}`);
    return resultado;
}

// console.log(ronda());


let juego = () => {
    let scoreJugador=0;
    let scoreComputadora=0;
    for (let i=0; i<5; i++){
        let partida=ronda();
        if (partida=="Ganaste"){
            scoreJugador++;
        } else if (partida=="Perdiste"){
            scoreComputadora++;
        }
    }
    alert(`El resultado final es ${scoreJugador} JUGADOR | COM ${scoreComputadora} con ${5-scoreComputadora-scoreJugador} empate(s)`);
};

juego();