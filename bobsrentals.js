/****************************
 Bob's rentals
 ****************************/
console.log("Running Bobrentals.js");

//Variables
let userName;
let userNameInvalid = true;
let carsArray = ["null", "BAC Mono", "MX5", "Mini", "i30", "Falcon", "Kona", "Prado", "Outlander", "Estima"];
let numSeatArray = ["null", "1", "2", "3", "4", "5", "6", "7", "8"];
let carPriceArray = ["null", "25", "30", "40", "50", "60", "70"]

/****************************
 Main code
 ****************************/
//function for button to begin the javascript to place an order
function processInput() {
    console.log("testing");
    let seat = user_input_seat.value;
    if (seat == numSeatArray[1]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[1] + " . The " + carsArray[1] + " is " + carPriceArray[1] + " dollars a day with out insurance. The " + carsArray[1] + " has one seat.";
    }
    else if (seat == numSeatArray[2]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[2] + " . The " + carsArray[2] + " is " + carPriceArray[2] + " dollars a day with out insurance. The " + carsArray[2] + " has two seats.";
    }
    else if (seat == numSeatArray[4] || seat == numSeatArray[3]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[3] + " and the " + carsArray[4] + " . The " + carsArray[3] + " and the " + carsArray[4] + " are both " + carPriceArray[3] + " dollars a day with out insurance. Both cars have four seats.";
    }
    else if (seat == numSeatArray[5]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[5] + ", " + carsArray[6] + " and the " + carsArray[7] + " . The " + carsArray[5] + ", " + carsArray[6] + " and the " + carsArray[7] + " are all " + carPriceArray[4] + " dollars a day with out insurance. All three cars have five seats.";
    }
    else if (seat == numSeatArray[7] || seat == numSeatArray[6]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[8] + " . The " + carsArray[8] + " is " + carPriceArray[5] + " dollars a day with out insurance. The " + carsArray[8] + " has 7 seats.";
    }
    else if (seat == numSeatArray[8]) {
        test.innerHTML = "Based on your requirements we recomend the " + carsArray[9] + " . The " + carsArray[9] + " is " + carPriceArray[6] + " dollars a day with out insurance. The " + carsArray[9] + " has 8 seats.";
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
