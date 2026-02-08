const footballTeam = {
  team: "Chelsea FC",
  year: 1905,
  headCoach: "Liam Rosenior",
  players: [{name: "Robert Sanchez",position: "goalkeeper",isCaptain: false},{name: "Filip Jorgensen",position: "goalkeeper",isCaptain: false},{name: "Teddy Sharman-Lowe",position: "goalkeeper",isCaptain: false},{name: "Gaga Slonina",position: "goalkeeper",isCaptain: false},{name: "Marc Cucurella",position: "defender",isCaptain: false},{name: "Tosin Adarabioyo",position: "defender",isCaptain: false},{name: "Benoit Badiashile",position: "defender",isCaptain: false},{name: "Levi Colwill",position: "defender",isCaptain: false},{name: "Pedro Neto",position: "forward",isCaptain: false},{name: "Enzo Fernandez",position: "midfielder",isCaptain: false},{name: "Liam Delap",position: "forward",isCaptain: false},{name: "Cole Palmer",position: "midfielder",isCaptain: false},{name: "Jamie Gittens",position: "forward",isCaptain: false},{name: "Dario Essugo",position: "midfielder",isCaptain: false},{name: "Andrey Santos", position: "midfielder",isCaptain: false},{name: "Mamadou Sarr",position: "defender",isCaptain: false},{name: "Joao Pedro",position: "forward",isCaptain: false},{name: "Jorrel Hato",position: "defender",isCaptain: false},{name: "Trevoh Chalobah",position: "defender",isCaptain: false},{name: "Reeece James",position: "defender",isCaptain: true},{name: "Moises Caisedo",position: "midfielder",isCaptain: false},{name: "Malo Gusto",position: "defender",isCaptain: false},{name: "Wesley Fofana",position: "defender",isCaptain: false},{name: "Josh Acheampong",position: "defender",isCaptain: false},{name: "Marc Guiu",position: "forward",isCaptain: false},{name: "Estevao Willian",position: "forward",isCaptain: false},{name: "Romeo Lavia",position: "midfielder",isCaptain: false},{name: "Alejandro Garnacho",position: "forward",isCaptain: false},{name: "Mykhailo Mudryk",position: "forward",isCaptain: false}]
};



document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!");
  
  const team = document.getElementById("team");
  const year = document.getElementById("year");
  const teamheadCoach = document.getElementById("head-coach");

  team.textContent = footballTeam["team"];
  year.textContent = footballTeam["year"];
  teamheadCoach.textContent = footballTeam["headCoach"]; 

  const playerCards = document.getElementById("player-cards");
  const selectCategory = document.querySelector("#players");


  function playerSort(playerPosition){
    const filteredPlayers = playerPosition === "all" ? footballTeam["players"]
    : footballTeam.players.filter(player => player.position === playerPosition);

    return filteredPlayers.map((player) => {
        const { name, position, isCaptain } = player;
        const nameWithCaptain = isCaptain ? `(Captain) ${name}` : name;
        
        return `
            <div class="player-card">
                <h2>${nameWithCaptain}</h2>
                <p><strong>Position:</strong> ${position}</p>
            </div>
        `;
    }).join("");
  }

  selectCategory.addEventListener("change", (e)=>{
    playerCards.innerHTML = playerSort(e.target.value);
  });
});
