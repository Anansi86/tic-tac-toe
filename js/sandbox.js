getBoardState = [

    '', '', '',
    '', '', '',
    '', '', ''
];

winConditions [
    [A1,A2,A3]     
    [B1,B2,B3]
    [C1,C2,C3] 
    [A1,B1,C1] 
    [A2,B2,C2]
    [A3,B3,C3]
    [A1,B2,C3]
    [A3,B2,C1]
]





let whosTurn = "X";

function playerTurn() {
    
for (var i = 0; i == whosTurn; i++) {  
    if (whosTurn == "X") {
    whosTurn = "O";
} else {
    whosTurn = "X";
  
}
}
//console.log(whosTurn)
}

playerTurn();