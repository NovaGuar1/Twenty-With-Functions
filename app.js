var start = start(askname())

var playertotal = 0;

var computertotal = 0;

var round = 1

function askname() {
    var name = prompt("Hello User, what is your name?")
    return name
}

function start(x){
    alert(`Hello ${x}, welcome to the game Twenty! The point of the game is to see who gets closer to 20.`)
    alert(`Round 1`)
    return round
}

do{

function computervalue(){
    
    alert("Computer goes first.")


    do{
        var ran = (Math.floor(Math.random() * 11))
        console.log(ran);
        computertotal = computertotal + ran;
        alert(`Computer drew ${ran}, Computer Score: ${computertotal}`)
        
    }while (computertotal < 16)
}

function playervalue(){

    alert("Player goes second.")

    do{
        var ran2 = (Math.floor(Math.random() * 11))
        console.log(ran2);
        playertotal = playertotal + ran2;
        alert(`Player drew ${ran2}, Player Score: ${playertotal}`)
        var playeranswer = prompt("Do you want to draw again?")


    }while ((playertotal < 16) && (playeranswer == "y"))
}

computervalue()
playervalue()

function winning() {
    if ((computertotal > playertotal) && (computertotal <= 20) && (playertotal <= 20) ) {
    alert("Computer has won!")
}

else if(playertotal > computertotal){
    alert("Player has won!")
}

}
winning()
function roundcounter(){
round++

    alert(`Round ${round}`)
}

roundcounter()
function repeat(){
    var again = prompt("Do you want to play again?")
    return again
}

var r = repeat()
}while (r == "y")
