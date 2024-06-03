let started=false;
let level=0;
let gameSeq=[];
let userSeq=[];

let h3=document.querySelector('h3');
let btns=['yellow','green','red','purple']

// Add event listener..
document.addEventListener('keypress',function(){
    if(started==false){
        
        
        levelUp();1
    }
    started=true;
  
})

function btnPress(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
};

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    gameSeq.push(randColor);
    let randBtn=document.querySelector(`.${randColor}`);
    btnPress(randBtn);
}

function userBtn(){
    let btn=this;
    btnPress(btn);
    let btnColor=btn.getAttribute('id');
    userSeq.push(btnColor);
   
    checkAns(userSeq.length-1);
}

let Btns=document.querySelectorAll('.btn');
for(Btn of Btns){
    Btn.addEventListener('click',userBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML=`Game over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },500);
        
        reset();
    }
}

function reset(){
     started=false;
     level=0;
     gameSeq=[];
     userSeq=[];
}

