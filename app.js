let gameseq=[];
let i=0;
let userseq=[];
let red=document.querySelector(".red")
let yellow=document.querySelector(".yellow")
let green=document.querySelector(".green")
let orange=document.querySelector(".orange")

let game=false;
let level=0;
let h2 =document.querySelector("h2");

let colours=["red","orange","yellow","green"]
let score=0;
let highscore=document.querySelector("h3");
highscore.innerText =0;


document.addEventListener("click",function(){
    if(game==false){
        game=true;
        levelup();

    }
})

function flash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");

    },250)
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");

    }, 250)
}



function levelup(){
    userseq=[];
    level++;
    
    h2.innerText=`level ${level}`;

    let rand=Math.floor(Math.random()*3);
    let randindex=colours[rand];
    let randcolour=document.querySelector(`.${randindex}`)
    gameseq.push(randindex)
    console.log(gameseq);
    flash(randcolour);
}

function buttonpress(){
    let btn=this;
    let colour=btn.getAttribute("id")
    userseq.push(colour);
    userflash(btn);
    checkass(userseq.length -1);

}

let allbtns=document.querySelectorAll(".btns");
for (btn of allbtns){
    btn.addEventListener("click", buttonpress);
    console.log(btn);
}

function checkass(index){
    if(gameseq[index]==userseq[index]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000);
        }
        
        
    }else{
        highscore.innerText =Math.max(highscore.innerText,level-1);
        h2.innerText=`game over your score was ${level-1} press any key to start over`;
        setTimeout(gameover,1000);
    }
}

function gameover(){
    game=false;
    userseq=[];
    gameseq=[];
    level=0;
    
}
