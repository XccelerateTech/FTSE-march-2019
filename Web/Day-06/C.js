var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//1)
let notBarcelona = players.filter(function(player) {
    return player.club !== 'FC Barcelona'
  })
  
//2)
let playerNames = players.map(function(player){
    return player.name
  })

  //2.1)

let playerNames = players.map((player) => {
  return player.name
})