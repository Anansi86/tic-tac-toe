objects:
    board
        rows
            col
                tiles or buttons
var playerOne = "X"
var PlayerTwo = "O"                   
reset button 
pop-up declaring winner
<div id="app"><div> or append getBoard() to body


State
    players turn: X or O
v= winConditions()
1) [0,1,2],
2) [3,4,5],
3) [6,7,8],
4) [0,3,6],
5) [1,4,7],
6) [2,5,8],
7) [0,4,8],
8) [6,7,8],


var = drawCondition()
if nothing matches winConditions
    then return "Draw"

int() {
var = boardState()
    load grid/button grid/tiles //<----not sure which way to go yet calling them tiles for now
changePlayer() {
 ///   when first person selects tile on board they are desinated first player automatically other player is player2 
    if (1st click = player1) { 
            then 2nd click = player2 
                then rotate back to player1 
                    repeat untill winCondition
  }          
 }
}