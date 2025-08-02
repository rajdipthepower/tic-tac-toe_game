alert("This is a cursed game, play at your own risk!")

let boxes = document.getElementsByClassName("boxes");

let box0 = document.getElementById("box0");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");

let auto_generated = [];
let user_input = [];

let currentPlayer;

let allBoxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

// Randomly choose who starts
let randomStart = Math.floor(Math.random() * 2);
if(randomStart === 0){
    currentPlayer = "user";
}
else{
    currentPlayer = "computer";
}

for(let i = 0; i <= 8; i++){
    boxes[i].addEventListener("click", func);    //event object is automatically passed as the first parameter , no need to explicitly pass it
}

if(currentPlayer === "computer"){
    setTimeout(computerMove, 300); //setTimeOut gives 300ms delay before executing computerMove
}


function func(e){
    let a = e.target.getAttribute("Id");
    span = document.getElementById(a);
    if(span.innerText !== ""){
        return;
    }
    span.innerHTML = `<p style = color:red;font-size:70px>X</p>`;
    span.removeEventListener("click", func);
    user_input.push(parseInt(a.charAt(a.length-1)));
    let array = leftnumber(user_input,auto_generated);  //storing the number of span boxes without any input
    console.log(array);
    let isOver = checkWinner();
    if(isOver){
        return;
    }
    if(array.length === 0){
        document.getElementById("para").innerHTML = "Tie!!";
        restart();
        return;
    }
    setTimeout(computerMove, 300);
}
    /*let computer_value = computer(array);   //storing random span box value
    console.log(computer_value);
    auto_generated.push(computer_value);
    span1 = document.getElementById(`box${computer_value}`);
    try{
    span1.innerHTML = `<p style = color:orange;font-size:50px>O</p>`;
    }catch(error){console.log("Error Ignored");}
    truth = (((box0.innerText == box1.innerText) && (box2.innerText == box1.innerText) && (box1.innerText!="")) || ((box0.innerText == box3.innerText) && (box6.innerText == box3.innerText) && (box3.innerText!="")) || ((box0.innerText == box4.innerText) && (box4.innerText == box8.innerText) && (box8.innerText!="")) || ((box1.innerText == box4.innerText) && (box7.innerText == box4.innerText) && (box4.innerText!="")) || ((box3.innerText == box4.innerText) && (box4.innerText == box5.innerText) && (box5.innerText!="")) || ((box6.innerText == box7.innerText) && (box7.innerText == box8.innerText) && (box8.innerText!="")) 
    || ((box2.innerText == box5.innerText) && (box5.innerText == box8.innerText) && (box8.innerText!="")) || ((box2.innerText == box4.innerText) && (box6.innerText == box4.innerText) && (box2.innerText!="")) )
    console.log(truth);
    if(truth){
        if((box0.innerText == box1.innerText) && (box2.innerText == box1.innerText) && (box1.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart(); 
        }
        else if((box0.innerText == box3.innerText) && (box6.innerText == box3.innerText) && (box3.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if((box0.innerText == box4.innerText) && (box4.innerText == box8.innerText) && (box8.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if((box1.innerText == box4.innerText) && (box7.innerText == box4.innerText) && (box4.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if( (box3.innerText == box4.innerText) && (box4.innerText == box5.innerText) &&(box5.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if((box6.innerText == box7.innerText) && (box7.innerText == box8.innerText) &&(box8.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if((box2.innerText == box5.innerText) && (box5.innerText == box8.innerText) &&(box8.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        else if((box2.innerText == box4.innerText) && (box6.innerText == box4.innerText) &&(box4.innerText==="X")){
            document.getElementById("para").innerHTML = "You Win!!";
            restart();
        }
        if((box0.innerText == box1.innerText) && (box2.innerText == box1.innerText) && (box1.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if((box0.innerText == box3.innerText) && (box6.innerText == box3.innerText) && (box3.innerText==="O")){
            document.getElementsByTagName("p").innerHTML = "You Lose!!";
            restart();
        }
        else if((box0.innerText == box4.innerText) && (box4.innerText == box8.innerText) && (box8.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if((box1.innerText == box4.innerText) && (box7.innerText == box4.innerText) && (box4.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if( (box3.innerText == box4.innerText) && (box4.innerText == box5.innerText) &&(box5.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if((box6.innerText == box7.innerText) && (box7.innerText == box8.innerText) &&(box8.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if((box2.innerText == box5.innerText) && (box5.innerText == box8.innerText) &&(box8.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        else if((box2.innerText == box4.innerText) && (box6.innerText == box4.innerText) &&(box4.innerText==="O")){
            document.getElementById("para").innerHTML = "You Lose!!";
            restart();
        }
        
}
else{
    if(array.length==0){
        document.getElementById("para").innerHTML = "Game Over!!";
        restart();
    }
}
}*/
function computerMove(){
    let array = leftnumber(user_input,auto_generated);
    let move = smartComputerMove(array);
    auto_generated.push(move);
    let span = document.getElementById(`box${move}`);
    if(span.innerText === ""){
        span.innerHTML = `<p style = color:orange;font-size:70px>O</p>`;
        span.removeEventListener("click", func);
    }
    let isOver = checkWinner();
    if(isOver){
        return;
    }
    if(user_input.length + auto_generated.length === 9){
        document.getElementById("para").innerHTML = "Tie!!"; //Draw Situation
        for(let k=0;k<9;k++){
            document.getElementById(`box${k}`).removeEventListener("click",func);
        }
        restart();
    }
}

function checkWinner(){
    let combinations = [
        [box0, box1, box2],
        [box3, box4, box5],
        [box6, box7, box8],
        [box0, box3, box6],
        [box1, box4, box7],
        [box2, box5, box8],
        [box0, box4, box8],
        [box2, box4, box6]
    ];

    for(let i = 0; i < combinations.length; i++){
        let [b1, b2, b3] = combinations[i];
        if(b1.innerText === b2.innerText && b2.innerText === b3.innerText && b1.innerText !== ""){
            if(b1.innerText === "X"){
                document.getElementById("para").innerHTML = "You Win!!";
                for(let k=0;k<9;k++){
                    document.getElementById(`box${k}`).removeEventListener("click",func);
                }
            } else {
                document.getElementById("para").innerHTML = "You Lose!!";
                for(let k=0;k<9;k++){
                    document.getElementById(`box${k}`).removeEventListener("click",func);
                }
            }
            restart();
            return true;
        }
    }
    return false;
}

function restart(){
    let btn = document.createElement("p");
    btn.setAttribute("id","restart")
    btn.innerHTML = "Restart";
    btn.style.color = "red";
    document.getElementById("output").appendChild(btn);
    btn.addEventListener("click",()=>{location.reload()})
}

function leftnumber(user_value,comp_value){
    let l1 = user_value.length;
    let l2 = comp_value.length;
    arr = [];
    for(i=0;i<9;i++){
        let [c1,c2] = [0,0];
        if(l2!=0){
            for(j=0;j<l2;j++){
                if(i!=comp_value[j]){
                    c2++;
                }
            }
        }
        for(j=0;j<l1;j++){
                if(i!=user_value[j]){
                    c1++;
                }
        }
        if((c1==l1) && (c2==l2)){
            arr.push(i);
        }
    }
    return arr;
}
let isFirstComputerMove = true;
function smartComputerMove(avail){
    let c = Math.floor(Math.random()*2);
    console.log(c);
    if(c==0){
        // If user gave first move at center (box 4), respond with box 0 once
        if (isFirstComputerMove && user_input.length === 1 && user_input[0] === 4) {
            isFirstComputerMove = false;
            return 0;
        }
        else if(user_input.length === 0){
            isFirstComputerMove = false; // Mark after first move
            return 4;
        }
        else if((user_input.length != 0) && avail.includes(4)){
            isFirstComputerMove = false; // Mark after first move
            return 4;
        }
    }
    else{
        if(avail.includes(4)){
            return 4;
        }
    }
    // 2. Try to win if possible
    let win = findCriticalMove(auto_generated, user_input);
    if(win !== -1){
        return win;
    }

    // Priority 3 to block user moves
    let block = findCriticalMove(user_input, auto_generated);
    if(block !== -1){
        return block;
    }

    let randomIndex = Math.floor(Math.random() * avail.length);   //usual input
    return avail[randomIndex];
}

function findCriticalMove(target, other){
    let winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],  //priority 2
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let i = 0; i < winPatterns.length; i++){
        let line = winPatterns[i];
        let count = 0;
        let empty = -1;
        for(let j = 0; j < 3; j++){
            if(target.includes(line[j])){
                count++;
            }
            else if(!other.includes(line[j])){
                empty = line[j];
            }
        }
        if(count === 2 && empty !== -1){
            return empty;
        }
    }
    return -1;
}
