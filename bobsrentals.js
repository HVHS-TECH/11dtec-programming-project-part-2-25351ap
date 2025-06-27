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
function userInputName(){
    welcome.innerHTML = "Welcome " + user_input_name.value + ", to Bob's car rentals."
}
//function processing input for html form place_user_order
function processInput() {
    console.log("testing");
    let seat = user_input_seat.value;
    if (seat == numSeatArray[1]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[1] + " . The " + carsArray[1] + " is " + carPriceArray[1] + " dollars a day with out insurance. The " + carsArray[1] + " has one seat.";
    }
    else if (seat == numSeatArray[2]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[2] + " . The " + carsArray[2] + " is " + carPriceArray[2] + " dollars a day with out insurance. The " + carsArray[2] + " has two seats.";
    }
    else if (seat == numSeatArray[4] || seat == numSeatArray[3]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[3] + " and the " + carsArray[4] + " . The " + carsArray[3] + " and the " + carsArray[4] + " are both " + carPriceArray[3] + " dollars a day with out insurance. Both cars have four seats.";
    }
    else if (seat == numSeatArray[5]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[5] + ", " + carsArray[6] + " and the " + carsArray[7] + " . The " + carsArray[5] + ", " + carsArray[6] + " and the " + carsArray[7] + " are all " + carPriceArray[4] + " dollars a day with out insurance. All three cars have five seats.";
    }
    else if (seat == numSeatArray[7] || seat == numSeatArray[6]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[8] + " . The " + carsArray[8] + " is " + carPriceArray[5] + " dollars a day with out insurance. The " + carsArray[8] + " has 7 seats.";
    }
    else if (seat == numSeatArray[8]) {
        recomend.innerHTML = "Based on your requirements we recomend the " + carsArray[9] + " . The " + carsArray[9] + " is " + carPriceArray[6] + " dollars a day with out insurance. The " + carsArray[9] + " has 8 seats.";
    }
}
//function processing input for html form user_input_car
function confirmInput() {
    console.log("Hello?");
    let dayNum = input_num_days.value;
    const insuranceUpgrade = 15;
    if (user_chosen_car.value == BAC_Mono && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[1] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[1] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == BAC_Mono && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[1] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[1])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == MX5 && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[2] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[2] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == MX5 && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[2] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[2])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Mini && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[3] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[3] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Mini && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[3] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[3])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == i30 && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[4] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[3] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == i30 && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[4] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[3])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Falcon && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[5] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[4] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Falcon && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[5] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[4])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Kona) {
        final.innerHTML = "You have choosen to rent the " + carsArray[6] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[4] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Prado && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[7] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[4] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Prado && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[7] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[4])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Outlander && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[8] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[5] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Outlander && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[8] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[5])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
     else if (user_chosen_car.value == Estima && place_user_order == no) {
        final.innerHTML = "You have choosen to rent the " + carsArray[9] + " for " + dayNum + " . Your total comes out to " + (carPriceArray[6] * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
    else if (user_chosen_car.value == Estima && place_user_order == yes) {
      final.innerHTML = "You have choosen to rent the " + carsArray[9] + " for " + dayNum + " days with a $15 insurance upgrade. Your total comes out to " + (((Number(carPriceArray[6])) + insuranceUpgrade) * dayNum) + " dollars. Thank you for choosing Bob's car rentals to rent your car.";
    }
}
 /****************************
 Functions
 ****************************/
