

let container = document.createElement("container");
container.setAttribute("class", "container text-center");
document.getElementById("app").appendChild(container);


for (var i = 0; i < 3; i++) {

    let row = document.createElement("div")
    row.setAttribute("class", "row")
    container.appendChild(row)


    for (var j = 0; j < 3; j++) {

        let col1 = document.createElement("div");
        col1.setAttribute("class", "col");
        row.appendChild(col1);


        const buttonId = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

        let btnSomething = buttonId[3 * i + j];

        let buttonInput1 = document.createElement("button");
        buttonInput1.setAttribute("class", "btn btn-primary mb-2");
        buttonInput1.addEventListener("click", clickHandler)
        buttonInput1.innerText = "";
        buttonInput1.setAttribute("id", btnSomething);
        col1.appendChild(buttonInput1);

    }
    // 
    var whosTurn = "X";

    function clickHandler() {
        this.id;
        document.getElementById(this.id).innerText = whosTurn;
        getGame(this.id);
    }

    function getGame(pushButton) {

        let btnPush = document.getElementById(pushButton)

        if ((document.getElementById("a1").innerHTML == whosTurn) &&
            (document.getElementById("a2").innerHTML == whosTurn) &&
            (document.getElementById("a3").innerHTML == whosTurn)) {
            window.confirm("Winner: " + " " + whosTurn);

        } else if ((document.getElementById("b1").innerHTML == whosTurn) &&
            (document.getElementById("b2").innerHTML == whosTurn) &&
            (document.getElementById("b3").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);


        } else if ((document.getElementById("c1").innerHTML == whosTurn) &&
            (document.getElementById("c2").innerHTML == whosTurn) &&
            (document.getElementById("c3").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);


        } else if ((document.getElementById("a1").innerHTML == whosTurn) &&
            (document.getElementById("b1").innerHTML == whosTurn) &&
            (document.getElementById("c1").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);


        } else if ((document.getElementById("a2").innerHTML == whosTurn) &&
            (document.getElementById("b2").innerHTML == whosTurn) &&
            (document.getElementById("c2").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);


        } else if ((document.getElementById("a3").innerHTML == whosTurn) &&
            (document.getElementById("b3").innerHTML == whosTurn) &&
            (document.getElementById("c3").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);

        } else if ((document.getElementById("a1").innerHTML == whosTurn) &&
            (document.getElementById("b2").innerHTML == whosTurn) &&
            (document.getElementById("c3").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);


        } else if ((document.getElementById("a3").innerHTML == whosTurn) &&
            (document.getElementById("b2").innerHTML == whosTurn) && (document.getElementById("c1").innerHTML == whosTurn)) {
            window.confirm("Winner" + " " + whosTurn);

        } else {
                console.log("Draw")
        }

        // when whos turn is x next action is O
        if (whosTurn == "X") {
            whosTurn = "O"
        } else {
            whosTurn = "X"
        }

        //onclick should populate x


        // onclick.document.getElementById("btnSomething").innerHTML = whosTurn;
    }
}