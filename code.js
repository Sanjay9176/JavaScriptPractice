let user = 0;
let comp = 0;

const image = document.querySelectorAll(".imgs");

const message = document.querySelector("#message");

const userscore = document.querySelector("#score-y");
const compscore= document.querySelector("#score-c");

const compchoice = ()=>{
    const options = ["Stone","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawgame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#000000";
  };


const showWinner = (userWin, userChoice, compchoices) => {
    if (userWin) {
        user++;
        userscore.innerText = user;
        message.innerText = `You win! Your ${userChoice} beats ${compchoices}`;
        message.style.backgroundColor = "green";
    }
    else{
        comp++;
        compscore.innerText = comp;
        message.innerText = `You lost. ${compchoices} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};


const playgame = (userchoice)=>{
    const compchoices = compchoice();

    if(userchoice === compchoices){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="Stone"){
            userwin = compchoices === "Paper" ? false:true; 
        }
        else if(userchoice === "Paper"){
            userwin = compchoices === "Scissor" ? false:true;
        }
        else{
            userwin = compchoices === "Stone" ? false:true;
        }
        showWinner(userwin,userchoice,compchoices);
        }
};

image.forEach((imgs)=>{
    imgs.addEventListener("click",()=>{
        const userchoice = imgs.getAttribute("id");
        playgame(userchoice);
    });
});