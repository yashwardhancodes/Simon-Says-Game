let gameSeq=[];
let playerSeq=[];

let started=false;
let level=0;

let btns=["red","green","yellow","purple"];


let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        
        started=true;
        console.log("started");
        levelup();
    }


});

function levelup(){
    playerSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    
    let btn=Math.floor(Math.random()*3);
   
    let randomcolor=btns[btn];
    gameSeq.push(randomcolor);

    let randombtn=document.querySelector(`.${randomcolor}`);

    gameflash(randombtn);
  
    console.log(`${level}  game sequence :${gameSeq}`);

}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function btnpress(){
    let btn=this;
    userFlash(btn);

    let usercolor=btn.getAttribute("id");
  
    playerSeq.push(usercolor);


    checkAns(playerSeq.length-1);
}

function checkAns(idx){
    // console.log("current level : "+level);

    

    if(playerSeq[idx]===gameSeq[idx]){
        if(playerSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over!<b>${level}</b> <br>press any key to start.`;
        reset();
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150); 
     }
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress  );
}

function userFlash(btn){
 btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

function reset(){
    gameSeq= [];
    playerSeq=[];
    started=false;
    level=0;
}



