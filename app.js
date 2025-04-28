let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");
let restart = document.querySelector("#restart");

let turnx = true;
let count = 0;

const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const gameDraw = ()=>{
    msg.innerText = "The Game Is Drawn";
    message.classList.remove("hide");
    disablebox();
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnx){
            box.innerText = "x"
            turnx = false;
        }
        else{
            box.innerText = "o"
            turnx = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    });
});

const resets = ()=>{
    turnx = true;
    count = 0;
    enablebox();
    message.classList.add("hide");
};


const disablebox =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disablebox();
};


const checkwinner = ()=>{
    for(let pattern of winpattern){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1!="" && posval2 != "" && posval3 !=""){
            if(posval1 === posval2 && posval2 === posval3){
                showwinner(posval1);
                return true;
            }
        }
    }
};

restart.addEventListener("click",resets);
reset.addEventListener("click",resets);