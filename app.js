let computerPlay = () => Math.floor(Math.random()*3);

console.log(computerPlay());

let playerPlay = () => {
    let respuesta = (prompt("Make your choice (Rock/Paper/Scissors)",)).toUpperCase();
    if (respuesta==="PAPER" || respuesta==="SCISSORS" || respuesta==="ROCK"){
        return respuesta;
    } else {
        alert("Respuesta invalida, ingrese nuevamente");
        respuesta=playerPlay();
        return respuesta;
    }
};

console.log(playerPlay());

let ronda = () => {
    if (playerPlay=="PAPER" && computerPlay==1){
        
    }
};