let userScore = 0;
let compSocre = 0;

const choices =  document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compSocrePara = document.querySelector("#comp-score");
const getcompchoice = ()=> {
    const option = ["Rock", "paper", "scissors" ];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}


const drawgame = (userchoice) => {
    msg.innerText = "Game was draw play again ";
    msg.style.backgroundColor = "#081b31";
}


const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = `U win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compSocre++;
        compSocrePara.innerText = compSocre;
        msg.innerText= `U lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}; 

const playgame = (userchoice) =>{  
    console.log("user choice =" , userchoice);
    const compchoice = getcompchoice();
    console.log("comp choice = ", compchoice);

    if (userchoice === compchoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "Rock"){
            compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false: true;
        } else {
            compchoice === "Rock" ? false :true ;
        }
        showwinner (userwin,userchoice,compchoice);
    }
};
 
choices.forEach((choice) => {
    
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id");
         //console.log("choice was clicked",userchoice);
         playgame(userchoice)
    });
});