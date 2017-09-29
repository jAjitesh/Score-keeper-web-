var p1 = document.querySelector("#player1");
var p2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");
var gameLength = document.querySelector("#input");
var scoresheet = document.querySelector("h1");
var finalscore = document.querySelector("#score");
var player1 = document.querySelector("#p1");
var player2 = document.querySelector("#p2");
var p1score = 0;
var p2score = 0;

gameLength.addEventListener("change", function(){
finalscore.textContent = gameLength.value;
});

p1.addEventListener("click", function(){
if(p1score < gameLength.value && p2score < gameLength.value){
p1score++;
player1.textContent = p1score;
}
if(p1score == gameLength.value){
	player1.style.color = "green";
}
});

p2.addEventListener("click", function(){
if(p2score < gameLength.value && p1score < gameLength.value){
p2score++;
player2.textContent = p2score;
}
if(p2score == gameLength.value){
	player2.style.color = "green";
}

});

reset.addEventListener("click", function(){
p1score = 0;
p2score = 0;
player1.textContent = p2score;
player2.textContent = p2score;
player1.style.color = "black";
player2.style.color = "black";
gameLength.value = 0;
finalscore.textContent = gameLength.value;
});
