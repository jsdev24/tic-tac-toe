
let boxes = document.querySelectorAll("td");
let output = document.getElementById("output");
let sign = "x";
let gameover = false;


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerHTML == "") {
            box.innerHTML = sign;
            checkForMatch();

            if (!gameover) {
                changeSign();
                turn();
            }
        }
    })
})


let checkForMatch = () => {
    let matchPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < matchPattern.length; i++) {
        checkBox(matchPattern[i]);
    }
}


let checkBox = arr => {
    let matchArr = [];

    arr.forEach(item => {
        if (boxes[item].innerHTML != "") {
            matchArr.push(boxes[item].innerHTML);
        }
    })

    if (matchArr.length == 3) {
        if (matchArr.every(item => item == "x")) {
            output.innerHTML = "X Wins!";
            gameover = true;
            playAgain();
        } else if (matchArr.every(item => item == "o")) {
            output.innerHTML = "O Wins!";
            gameover = true;
            playAgain();
        } else {
            let count = 0;
            boxes.forEach(box => {
                if (box.innerHTML != "") {
                    count++;
                }
            })
            if (count == 9) {
                output.innerHTML = "It's Draw";
                gameover = true;
                playAgain();
            }
        }
    }

}


let changeSign = () => sign = (sign == "x") ? "o" : "x";

let turn = () => {
    output.innerHTML = "It's <b>" + sign.toUpperCase() + "</b> turn";
}


let playAgain = () => {
    output.innerHTML += "<button class='playagain'>Play Again</button>";

    document.querySelector(".playagain").addEventListener("click", () => {
        boxes.forEach(box => {
            box.innerHTML = "";
    	})
	    
        output.innerHTML = "";
	sign = "x";
        gameover = false;
    })
}
