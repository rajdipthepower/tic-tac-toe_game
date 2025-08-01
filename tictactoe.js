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

for(i=0;i<=8;i++){
    boxes[i].addEventListener("click",func); //event object is automatically passed as the first parameter , no need to explicitly pass it
}

function func(e){
    let a = e.target.getAttribute("Id");
    span = document.getElementById(a);
    span.innerHTML = `<p style = color:red;font-size:50px>X</p>`;
    user_input.push(parseInt(a.charAt(a.length-1)));
    let array = leftnumber(user_input,auto_generated);  //storing the number of span boxes without any input
    console.log(array);
    let computer_value = computer(array);   //storing random span box value
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

function computer(ar){
    let currentIndex  = ar.length;
    let t;
    
    while(currentIndex!=0){
        let randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;
        t = ar[randomIndex];
        ar[randomIndex] = ar[currentIndex];
        ar[currentIndex] = t;
    }
    console.log(ar);
   let final_index = Math.floor( Math.random()*ar.length);
   console.log(ar[final_index]);
    return ar[final_index];
}