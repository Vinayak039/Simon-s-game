let gameSeq=[]
let userSeq=[]
let btns=["red","green","blue","yellow"]

let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelup()
    } 
    
});
function gameflash(btn){
    btn.classList.add("gameflash")
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },150)
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },150)
}
function levelup(){
    userSeq=[]
    level++;
    let h2=document.querySelector("h2")
    h2.innerText=`Level ${level}`
    let randIDX=Math.floor(Math.random()*4);
    let randColor=btns[randIDX]//gives btns[0]->red
    let randbtn=document.querySelector(`.${randColor}`)//gives .red class
    //random button chooses
    
    gameSeq.push(randColor);//all the random cols produced will stored in a gameseq arr
    console.log(gameSeq)
    gameflash(randbtn); 

}
// var box=document.querySelectorAll(".btn").length
// for(i=0;i<box;i++){
// document.querySelectorAll(".btn").addEventListener("click",function(){
//     console.log(this)
//     var audio=new audio("sounds\blue.mp3")
//        audio.play()
// })}
function checkAns(idx)
{
    // let idx=level-1;//level is globally declared and level 1 will be at index 0
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        // levelup();//to get into the next level 
        setTimeout(levelup,1000)
       }
    }else{
        let h2=document.querySelector("h2")
        h2.innerHTML=`Game over!Your score was <b>${level}</b><br> Press any key to start`
        document.querySelector("body").style.backgroundColor="red"//in style of js 2nd letter capital
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#011F3F "
        },150)
        reset()
    }
}

function btnpress(){ //it is when we press ans
    console.log("btn was pressed")
    let btn=this;
    userflash(btn) //to make the pressed btn flash with green col

    usercolor=btn.getAttribute("id") //to get the id of pressed btn and make it to add in arr
    console.log(usercolor)
    userSeq.push(usercolor)
    checkAns(userSeq.length-1)//to check up to curr level which is equal to userseq len
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)//to add the event of clicking
}
function reset(){//to reset when wrong
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0;
}
