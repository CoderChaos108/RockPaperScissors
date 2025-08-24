const rock=document.getElementById("rock");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const aiBox=document.getElementById("aiBox");
const aiScore=document.getElementById("aiScore");
const myScore=document.getElementById("myScore");
aiScore.innerText="AI's Score: 0";
myScore.innerText="Your Score: 0";
let AiScore=0;
let playerScore=0;
const play=(choice)=>{
    let aiChoice=0;
    let result=0;
    for(let i=0;i<10;i++){
        aiChoice=Math.floor(Math.random()*3);
        if(aiChoice==0){
            aiBox.style.backgroundImage="url('rock.webp')";
        }
        else if(aiChoice==1){
            aiBox.style.backgroundImage="url('paper.jpg')";
        }
        else{
            aiBox.style.backgroundImage="url('scissors.jpg')";
    }
}
    if(choice==aiChoice){
        result=0;
    }
    else{
    if(choice==0){
        if(aiChoice==1)
            result=-1;
        else
            result=1;
    }
    else if(choice==1){
        if(aiChoice==0)
            result=1;
        else
            result=-1;
    }
    else{
        if(aiChoice==0)
            result=-1;
        else
            result=1;
    }
}
    setTimeout(()=>{
        if(result==0)
            alert("It's a tie!");
        else if(result==1){
            playerScore++;
            alert("You win!");
        }
        else{
            AiScore++;
            alert("You lose!");
        }
        aiScore.innerText="AI's Score: "+AiScore;
        myScore.innerText="Your Score: "+playerScore;
    },500);
    setTimeout(()=>{
        aiBox.style.backgroundImage="questionMark.png";
    },500);
    
};
rock.addEventListener("click",()=>{
    rock.style.boxShadow = "0 0 20px #3498db";
    setTimeout(()=>{
        play(0);
    rock.style.boxShadow = "";
    },300);
});
paper.addEventListener("click",()=>{
    paper.style.boxShadow = "0 0 20px #3498db";
    setTimeout(()=>{
        play(1);
        paper.style.boxShadow = "";
    },300);
    
});
scissor.addEventListener("click",()=>{
    scissor.style.boxShadow = "0 0 20px #3498db";
    setTimeout(()=>{
        play(2);
    scissor.style.boxShadow = "";
    },300);
    
});