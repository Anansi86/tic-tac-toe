
Questions
    - How do we track movement
    - How do we know what has been played
    - Change Player?
    - How do we keep multiple clicks happening after  tile has been previously clicked

objects:
    board
         |
         rows
            |
            col
              |
              tiles or buttons

var playerOne = "X"
var PlayerTwo = "O"                   
reset button 
pop-up declaring winner
<div id="app"><div> or append getBoard() to body



boardState [
    '','',''
    '','',''
    '','',''
]


    players turn: X or O

var = winConditions() {

1) [0,1,2],       [A1,A2,A3]     
2) [3,4,5],       [B1,B2,B3]
3) [6,7,8],       [C1,C2,C3] 
4) [0,3,6],  ||   [A1,B1,C1] 
5) [1,4,7],       [A2,B2,C2]
6) [2,5,8],       [A3,B3,C3]
7) [0,4,8],       [A1,B2,C3]
8) [6,7,8],       [A3,B2,C1]

const line = winCOndition[i]
console.log ('Line", line);
for (var j = 0; j < winCondition) {
    const line = winCondition[i];

}

}
var = drawCondition()

    if nothing matches winConditions

      then return "Draw"

Grid gameBoard =

| A1 | A2 | A3|
| B1 | B2 | B3|
| C1 | C2 | C3|

int() {

var = boardState()

    load grid/button grid/tiles //<----not sure which way to go yet calling them tiles for now

gameActive() {

    let playerTurn = "X" //<-----make var playerTurn = to 'X' since it's first turn 

        when first person selects tile on board they are desinated 
        
            player automatically other player is player2 
            
                if (1st click = player1) { 
            
                        place X icon in tile and lock the tile
            
                            run winCondition() after playerTurn 
            
                                if (winCondition is not met) 
            
                                    then 2nd player's turn - click = player2 
                
                                        then rotate back to player1 
                
                                            repeat until winCondition() is met 
                
                                                else drawCondition() 

resetButton() {

    if (button is selected resets boardState()) {


        
    }
   }
  }          
 }
}

button elements

const buttonId = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

let container = document.createElement ("container")
container.setAttribute("class", "container")
container.setAttribute("id", "container")


for (var i = 0; i < 10; i++) {
let buttons = document.createElement("button");
buttons.setAttribute("class", "btn btn-info");
document.getElementById('container').appendChild(button);

}