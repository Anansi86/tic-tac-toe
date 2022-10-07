

let boardState = [
    'X','O','X',
    'X','X','O',
    '','','',
];
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

let container = document.createElement ("container");
container.setAttribute("class", "container text-center");
document.getElementById("app").appendChild(container);


for (var i = 0; i < 3; i++) {
    
    
    
    let row = document.createElement ("div")
    row.setAttribute("class", "row")
    container.appendChild(row)
    
    
    for (var j = 0; j < 3; j++) {
    
    let col1 = document.createElement("div");
    col1.setAttribute("class", "col");
    row.appendChild(col1);
    

const buttonId = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

let btnSomething = buttonId[3*i+j];

let buttonInput1 = document.createElement("button");
buttonInput1.setAttribute("id", "btn");
buttonInput1.setAttribute("class", "btn btn-primary mb-2");
buttonInput1.innerText = btnSomething;
buttonInput1.setAttribute("id", btnSomething);
col1.appendChild(buttonInput1);


//var whosTurn = "X";

/*function myFunction() {

    if (btnSomething.innerHTML != "") {
        return;
    }

    btnSomething.innerHTML = whosTurn;

    if ((document.getElementById ("a1").innerHTML == whosTurn)
     && (document.getElementById ("a2").innerHTML == whosTurn)
      && (document.getElementById("a3").innerHTML == whosTurn)) {
        console.log ("Winner: " + " " + whosTurn);
 
     } else  {
         console.log ("Draw")
     }


    if (whosTurn == "X") {
        whosTurn = "O"
    } else {
        whosTurn = "X"
    }


    document.getElementById("btnSomething").innerHTML = whosTurn;
    
  }
 }
}
*/
 }
}