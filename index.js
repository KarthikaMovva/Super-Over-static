const team1=document.getElementById("team1-superover");
const team2=document.getElementById("team2-superover");
const replay=document.getElementById("reset");
const team1wickets=document.getElementById("wickets-team1");
const team2wickets=document.getElementById("wickets-team2");
const scoreboard1=document.getElementById("score-team1");
const scoreboard2=document.getElementById("score-team2");
const kick=document.getElementById("strike");

var chance=1;
var score1=0;
var score2=0;
var wicket1=0;
var wicket2=0;
var chance1=0;
var chance2=0;

const possibleoutcomes=[0,1,2,3,4,5,6,"W"];

function finishgame(){
    if(score1>score2){alert("INDIA WON")}
    if(score2>score1){alert("PAKISTAN WON")}
    if(score1==score2){alert("It is a superover!!")}

}

function calculatescore(){
    scoreboard1.textContent=score1;
    scoreboard2.textContent=score2;
    team1wickets.textContent=wicket1;
    team2wickets.textContent=wicket2;
}

replay.onclick=()=>{
    window.location.reload()
}

kick.onclick=()=>{
    const randomnumbers=possibleoutcomes[Math.floor(Math.random()*possibleoutcomes.length)];

    if(chance===2){
        chance2++;
        team2.children[chance2-1].textContent=randomnumbers;
        if(randomnumbers==="W"){
            wicket2++
        }else{
            score2+=randomnumbers
        }if(chance2===6 || wicket2===2){
            chance=3
            finishgame()
        }
    }
    if(chance===1){
        chance1++;
        team1.children[chance1-1].textContent=randomnumbers;
        if(randomnumbers==="W"){
            wicket1++
        }else{
            score1+=randomnumbers
        }if(chance1===6 || wicket1===2){
            chance=2
            // finishgame()
        }
    }
    calculatescore()
}



