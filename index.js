// Making two Variables for generating Random Numbers
var dice1 = (Math.floor(Math.random()*6))+1;
var dice2 = (Math.floor(Math.random()*6))+1;


// Using the Variables to generate string names for the images
var img1 = ("images/dice" + dice1 + ".png");
var img2 = ("images/dice" + dice2 + ".png");


//Changing Images According to the Variables
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);


//Changing Header Text(Win Text)
if(dice1 > dice2){
    document.querySelector(".container h1").textContent=("🚩Player 1 Wins!");
}
else if(dice2 > dice1){
    document.querySelector(".container h1").textContent=("Player 2 Wins!🚩");
}
else{
    document.querySelector(".container h1").textContent=("-- It's a Tie --");
}




//Approach 2 for Solving using all If Else Statements

// if(dice1 === 1){
//     document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if(dice1 === 2){
//     document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(dice1 === 3){
//     document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(dice1 === 4){
//     document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(dice1 === 5){
//     document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
// if(dice2 === 1){
//     document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(dice2 === 2){
//     document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(dice2 === 3){
//     document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(dice2 === 4){
//     document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(dice2 === 5){
//     document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else{
//     document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }