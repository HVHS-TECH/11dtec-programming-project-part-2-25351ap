/****************************
 Bob's rentals
 ****************************/
console.log("Running Bobrentals.js");

//Variables
let userName;
let userNameInvalid = true;
let numSeat;
let numSeatInvalid = true;
let carsArray = ["null", "BAC Mono", "MX5", "Mini", "Falcon", "Outlander", "Estima"];
let numSeatArray = ["null", "1", "2", "3", "4", "5", "6", "7", "8"];

/****************************
 Main code
 ****************************/
alert(askUserName())
alert("Welcome " + userName + " to Bob's car rentals. \nTo place an order click the green button that says 'Begin order'.")
//function for button to begin the javascript to place an order
function begin() {
    askUserNumberSeats()
    if (numSeat == numSeatArray[1]) {
        alert("The car with one seat that we recomend for you is the " + carsArray[1]);
    }
    else if (numSeat == numSeatArray[2]) {
        alert("The car with two seats that we recomend for you is the " + carsArray[2]);
    }
    else if (numSeat == numSeatArray[3]) {
        alert("The car with three seats that we recomend for you is the " + carsArray[3]);
    }
    else if (numSeat == numSeatArray[4]) {
        alert("The car with four seats that we recomend for you is the " + carsArray[4]);
    }
    else if (numSeat == numSeatArray[5]) {
        alert("The car with five seats that we recomend for you is the " + carsArray[5]);
    }
    else if (numSeat == numSeatArray[6]) {
        alert("The car with six seats that we recomend for you is the " + carsArray[6]);
    }
    else if (numSeat == numSeatArray[7]) {
        alert("The car with seven seats that we recomend for you is the " + carsArray[7]);
    }
    else if (numSeat == numSeatArray[8]) {
        alert("The car with eight seats that we recomend for you is the " + carsArray[8]);
    }
}

 /****************************
 Functions
 ****************************/
//function asking the user their name
function askUserName() {
    userName = prompt ("Hello user. \nWhat is your name?", "Enter Name Here");
    while (userNameInvalid) {
        if (userName == "" || userName == " " || (!isNaN(userName))) {
            userName = prompt ("ERROR! \nInvalid user name entered. \nPlease enter a valid user name.");
        }
        else {
            userNameInvalid = false;
            alert("Hi " +userName+ ", \nWelcome to Bob's car rentals.");
        }
    }
}
//function asking user how many seats they want
function askUserNumberSeats() {
    numSeat = prompt ("How many seats would you like your rental car to have? \nPlease enter a number between and including 1-8.");
    while (numSeatInvalid) {
        if (numSeat == "" || numSeat == " " || (isNaN(numSeat))) {
            numSeat = prompt ("ERROR! \nInvalid number of seats entered. \nPlease enter a valid number of seats between and including 1-8.");
        }
        else {
            numSeatInvalid = false;
        }
    }
}