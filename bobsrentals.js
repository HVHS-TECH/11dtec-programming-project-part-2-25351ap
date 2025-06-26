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
//function for button to begin the javascript to place an order
function processInput() {
    console.log("testing");
    let seat = document.forms[place_user_order][user_input_seat].value;
    if (seat == numSeatArray[1]) {
        test.innerHTML = "The car with one seat that we recomend for you is the " + carsArray[1];
    }
    else if (seat == numSeatArray[2]) {
        test.innerHTML = "The car with two seats that we recomend for you is the " + carsArray[2];
    }
    else if (seat == numSeatArray[3]) {
        test.innerHTML = "The car with three seats that we recomend for you is the " + carsArray[3];
    }
    else if (seat == numSeatArray[4]) {
        test.innerHTML = "The car with four seats that we recomend for you is the " + carsArray[4];
    }
    else if (seat == numSeatArray[5]) {
        test.innerHTML = "The car with five seats that we recomend for you is the " + carsArray[5];
    }
    else if (seat == numSeatArray[6]) {
        test.innerHTML = "The car with six seats that we recomend for you is the " + carsArray[6];
    }
    else if (seat == numSeatArray[7]) {
        test.innerHTML = "The car with seven seats that we recomend for you is the " + carsArray[7];
    }
    else if (seat == numSeatArray[8]) {
        test.innerHTML = "The car with eight seats that we recomend for you is the " + carsArray[8];
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
            welcome.innerHTML = "Welcome, to Bob's car rentals " + userName + " . To place an order click the green button.";
        }
    }
}
//function asking user how many seats they want
function askUserNumberSeats() {
    numSeat = prompt ("How many seats would you like your rental car to have? \nPlease enter a number between and including 1-8.");
    while (numSeatInvalid) {
        if (numSeat == "" || numSeat == " " || (isNaN(numSeat)) || numSeat >= 1 || numSeat <= 8) {
            numSeat = prompt ("ERROR! \nInvalid number of seats entered. \nPlease enter a valid number of seats between and including 1-8.");
        }
        else {
            numSeatInvalid = false;
        }
    }
}