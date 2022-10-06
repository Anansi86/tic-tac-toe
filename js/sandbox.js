

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


for (var i = 0; i < 3; i++) {

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


let buttonInput1 = document.createElement("button");
buttonInput1.setAttribute("id", "btn")
buttonInput1.setAttribute("class", "btn btn-primary mb-2");
buttonInput1.innerText = "tic tac toe";
col1.appendChild(buttonInput1);

let buttonInput2 = document.createElement("button");
buttonInput2.setAttribute("id", "btn")
buttonInput2.setAttribute("class", "btn btn-primary mb-2");
buttonInput2.innerText = "tic tac toe";
col2.appendChild(buttonInput2);

let buttonInput3 = document.createElement("button");
buttonInput3.setAttribute("id", "btn")
buttonInput3.setAttribute("class", "btn btn-primary mb-2");
buttonInput3.innerText = "tic tac toe";
col3.appendChild(buttonInput3);
}