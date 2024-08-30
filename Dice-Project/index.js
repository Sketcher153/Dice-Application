// var name1;
// function getName1()
// {
//     name1 = prompt("Enter Player Name : "); 
//     if (name1 != null)
//     {
//         document.getElementById("playerName1").innerHTML = name1; 
//     }
// }

var randomNumber1;
var randomDiceImage; 
var randomImageSource; 
var image1; 
function pressMe1()
{
    randomNumber1 = Math.floor(Math.random() * 5) + 1; //1-6

    randomDiceImage = "Dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    
    randomImageSource = "Assets/" + randomDiceImage; //images/dice1.png - images/dice6.png
    
    image1 = document.querySelectorAll("img")[0]; 
    
    image1.setAttribute("src", randomImageSource); 
    
}

// var name2;
// function getName2()
// {
//     name2 = prompt("Enter Player Name : "); 
//     if (name2 != null)
//     {
//         document.getElementById("playerName1").innerHTML = name2; 
//     }
// }

var randomNumber2; 
var randomImageSource2; 
function pressMe2()
{
    randomNumber2 = Math.floor(Math.random() * 5) + 1; 

    randomImageSource2 = "Assets/Dice" + randomNumber2 + ".png"; 
    
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 
    
    //If player 1 wins
    if (randomNumber1 > randomNumber2) 
    {
      document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; 
    }
    else if (randomNumber1 < randomNumber2) 
    {
      document.querySelector("h1").innerHTML = "🚩Player 2 Wins!"; 
    }
    else 
    {
      document.querySelector("h1").innerHTML = "Draw!"; 
    }
}
