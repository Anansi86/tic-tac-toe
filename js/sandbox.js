

let boardState = [
    'X','O','X',
    'X','X','O',
    '','','',
];
let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
]

let container = document.createElement ("container")
container.setAttribute("class", "container")
document.getElementById("app").appendChild(container)



let row = document.createElement ("div")
row.setAttribute("class", "row")
container.appendChild(row)

let col1 = document.createElement("div");
col1.setAttribute("class", "col");
row.appendChild(col1);

let col2 = document.createElement("div");
col2.setAttribute("class", "col");
row.appendChild(col2);

let col3 = document.createElement("div");
col3.setAttribute("class", "col");
row.appendChild(col3);


let buttonInput = document.createElement("button");
buttonInput.setAttribute("type", "submit");
buttonInput.setAttribute("id", "btn")
buttonInput.setAttribute("class", "btn btn-primary mb-2");
buttonInput.innerText = "tic tac toe";
col1.appendChild(buttonInput);