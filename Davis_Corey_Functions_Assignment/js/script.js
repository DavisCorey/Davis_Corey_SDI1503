/**
 * Created by CoreyDavis on 3/26/15.
 * MDV 2330 | SDI 1503
 * Functions Assignment
 */

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
var lotteryType=prompt("For random lottery numbers please select \nP for Powerball Lottery or F for the Florida Lottery.");//Prompt for lottery type choice

//functions
function choiceValidation(lotteryChoice){  //Function Declaration
    var timeChosen = 1;  //Set number of times choice has been made
    while(lotteryChoice===""){  //Set condition to run lottery choice prompt
        lotteryChoice=prompt("Do not leave this blank. \n\nPlease choose P for Powerball or F for the Florida Lottery.");
        timeChosen++;  //Increment loop through prompt
        if (timeChosen===6){  //Set maximum increment through prompt
            console.log("You have run out of attempts today.");  //Display warning to retry
            break;
        }
    }
    return lotteryChoice;
}


//main code
lotteryType=choiceValidation(lotteryType);  //Set prompt variable to run choiceValidation
if (lotteryType=="P"||"p"){  //Set condition to run Powerball numbers
    powerChoice=alert("You're Powerball numbers are ");
}else if (lotteryType=="F"||"f"){  //Set condition to run Florida lottery numbers
    floridaChoice=alert("You're Florida Lottery numbers are ")
}

//outputs
