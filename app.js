var boxes = document.querySelectorAll(".box");

var winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var xatemp = [];
var oatemp = [];

var result = document.getElementById("result");
var message = document.getElementById("message");
var button = document.getElementById("button");

boxes.forEach(box =>{
    box.onclick = handleClick;
})

var click = 1;

function handleClick(e){
    var id_d = e.target.id;

    var textTBI = document.createElement("p");
    boxes[id_d-1].append(textTBI);



    if(click%2==0){
        xatemp.push(id_d-1);
        textTBI.innerHTML = "X";
        textTBI.style.color = "orange";
        checkResult(winningComb, xatemp, "X");
    }else if (click%2!=0){
        oatemp.push(id_d-1);
        textTBI.innerHTML = "O";
        textTBI.style.color = "orange";
        checkResult(winningComb, oatemp, "O") ;
    }
    
    if(click == 9){
        result.style.visibility = "visible";
        message.innerHTML = "It's a tie!";
    }
    click++;
    
}

function checkResult(winningComb, attempts, player){

    var ans = [];
    var count = 0;
    for(var i=0; i<winningComb.length; i++){
        if(Array.isArray(winningComb[i])){
            checkResult(winningComb[i], attempts, player);
        }else{
            if(attempts.includes(winningComb[i])){
                ans.push(true);
                count++;
            }else{
                ans.push(false);
            }
        }
    }

    if(ans.every((answer) => answer == true) && count>2){
        result.style.visibility = "visible";
        message.innerHTML = `${player} won the game!`;
    }    
}

button.onclick = () =>{
    window.location.reload();
}