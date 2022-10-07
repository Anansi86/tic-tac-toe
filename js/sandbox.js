

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
    

const buttonId = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let btnsomething = buttonId[3*i+j];

let buttonInput1 = document.createElement("button");
buttonInput1.setAttribute("id", "btn");
buttonInput1.setAttribute("class", "btn btn-primary mb-2");
buttonInput1.innerText = btnsomething;
buttonInput1.setAttribute("id", btnsomething);
col1.appendChild(buttonInput1);


 } 
}