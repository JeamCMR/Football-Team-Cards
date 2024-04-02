/**Variables principales */

const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");

const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
// console.log( playersDropdownList.children[0].value);


const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner:true,
  headCoach:{
    coachName:'Carlos Bilardo',
    matches:7,
  },
  players:[{
    name: "Sergio Almirón",
    position: "forward",
    number: 1,
    isCaptain: false,
    nickname: null
  },
  {
    name: "Sergio Batista",
    position: "midfielder",
    number: 2,
    isCaptain: false,
    nickname: null 
  },
  {
   name: "Ricardo Bochini",
   position: "midfielder",
   number: 3,
   isCaptain: false,
   nickname: "El Bocha",
 },
 {
   name: "Claudio Borghi",
   position: "midfielder",
   number: 4,
   isCaptain: false,
   nickname: "Bichi",
 },
 {
   name: "José Luis Brown",
   position: "defender",
   number: 5,
   isCaptain: false,
   nickname: "Tata",
 },
 {
   name: "Daniel Passarella",
   position: "defender",
   number: 6,
   isCaptain: false,
   nickname: "El Gran Capitán",
 },
 {
   name: "Jorge Burruchaga",
   position: "forward",
   number: 7,
   isCaptain: false,
   nickname: "Burru",
 },
 {
   name: "Néstor Clausen",
   position: "defender",
   number: 8,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "José Luis Cuciuffo",
   position: "defender",
   number: 9,
   isCaptain: false,
   nickname: "El Cuchu",
 },
 {
   name: "Diego Maradona",
   position: "midfielder",
   number: 10,
   isCaptain: true,
   nickname: "El Pibe de Oro",
 },
 {
   name: "Jorge Valdano",
   position: "forward",
   number: 11,
   isCaptain: false,
   nickname: "The Philosopher of Football",
 },
 {
   name: "Héctor Enrique",
   position: "midfielder",
   number: 12,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Oscar Garré",
   position: "defender",
   number: 13,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Ricardo Giusti",
   position: "midfielder",
   number: 14,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Luis Islas",
   position: "goalkeeper",
   number: 15,
   isCaptain: false,
   nickname: "El loco",
 },
 {
   name: "Julio Olarticoechea",
   position: "defender",
   number: 16,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Pedro Pasculli",
   position: "forward",
   number: 17,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Nery Pumpido",
   position: "goalkeeper",
   number: 18,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Oscar Ruggeri",
   position: "defender",
   number: 19,
   isCaptain: false,
   nickname: "El Cabezón",
 },
 {
   name: "Carlos Tapia",
   position: "midfielder",
   number: 20,
   isCaptain: false,
   nickname: null,
 },
 {
   name: "Marcelo Trobbiani",
   position: "midfielder",
   number: 21,
   isCaptain: false,
   nickname: "Calesita",
 },
 {
   name: "Héctor Zelada",
   position: "goalkeeper",
   number: 22,
   isCaptain: false,
   nickname: null,
 },
]
};

//Se le indica al objecto por medio del metodo Object.freeze(obj) que su propiedades no se pueden agregan o modificar

Object.freeze(myFavoriteFootballTeam);

//Accediendo a unos valores de la matriz con notacion de puntos <-- mas codigo
// const sport = myFavoriteFootballTeam.sport;
// const team = myFavoriteFootballTeam.team;

//Accediendo a unos valores de la matriz con destructuring syntax <-- Es mejor, menos codigo
const {sport, team, year, players} = myFavoriteFootballTeam;

const {coachName} = myFavoriteFootballTeam.headCoach;


/**Mostrando informacion en el html */

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;


/**Funcion para filtrar las tarjetas segun la opcion selecionada del menu desplegable */

const setPlayerCards = (arr=players) =>{ //Se agrega un argumento por defecto que tendra como valor el arrazy de player
    /* el metodo .map recorre cada elemento de un array y genera uno nuevo apartir del este.
    despues le paso el resultado obtenido del callback optenido de .map, el cual tendra
    filtrada la infroamcion dependiendo de lo que solicita el usuario*/
        playerCards.innerHTML += arr
        .map(({name,position,number,isCaptain,nickname})=>
            `<div class="player-card">
            <h2>${name}${isCaptain ? "(Captain)" : ""}</h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>Nickname: ${nickname ? nickname : "N/A" }</p>
            </div> 
            ` 
        ).join("");
};



/**Eventos */

playersDropdownList.addEventListener("change",(e)=>{
    //console.log(e.target.value); //representa la propieda de valor del elemento playersDropdownList
    playerCards.innerHTML = ""; //Vacia todo lo que se encuentra dentro del elemento
 
    switch (e.target.value){
        
        case "nickname":
            /*Usamos el metodo filter para crear un nuevo array que cumpla el criterio de filtado, en este caso
             le estoy pasando la funcion setPlayerCards un arrray de players el cual va a filtar por los apodos
             de los jugadores que no sean null. filter crea un nuevo array con el resultado y se lo pasa
            a la funcion setPlayerCards el cual mostara en pantala ese array con los jugadores con apodo*/
             setPlayerCards(players.filter((player) => player.nickname !== null)); // un funcion con retorno explicito como argumento (criterio de filtrado) argumento => argumento.propiedad (validacion) comparar
        break;

        case "forward":
            setPlayerCards(players.filter(player => player.position === "forward"));
            
        break;

        case "midfielder":
            setPlayerCards(players.filter(player => player.position === "midfielder"));
        break;

        case "defender":
            setPlayerCards(players.filter(player => player.position === "defender"));
        break;

        case "goalkeeper":
            setPlayerCards(players.filter(player=> player.position === "goalkeeper"));
        break;

        default:
            setPlayerCards();
            break;
    }   

})