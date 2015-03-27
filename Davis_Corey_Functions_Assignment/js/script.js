/**
 * Created by CoreyDavis on 3/26/15.
 * MDV 2330 | SDI 1503
 * Functions Assignment
 */

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
var lotteryType=prompt("For random lottery numbers please select \nP for Powerball Lottery or F for the Florida Lottery.");//Prompt for lottery type choice
var powerChoice;  //Declare variable for choice of Powerball Lottery
var floridaChoice;  //Declare variable for choice of Florida Lottery
var powerballString;  //Declare variable for storage of full concatenated string
var floridaString;  //Declare variable for storage of full concatenated string

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
function randomPowerballGen(min, max,num){  //Function Declaration
    var randomArray=[];
    for (var i=0; i<num; i++){
        var randomLotteryNumber = Math.round(Math.random() * (max - min));
        randomArray[i]=randomLotteryNumber;
        return randomArray;

    }
}
function randomFloridaGen(min, max,num){  //Function Declaration
    var randomLotteryArray=[];
    for (var i=0; i<num; i++){
        var randomFloridaNumber = Math.round(Math.random() * (max - min));
        randomLotteryArray[i]=randomFloridaNumber;
        return randomLotteryArray;

    }
}
//main code
lotteryType=choiceValidation(lotteryType);  //Set prompt variable to run choiceValidation
if (lotteryType=="P"||"p"){  //Set condition to run Powerball numbers
    powerChoice="You're Powerball numbers are ";
    randomPowerball[]=randomPowerballGen(1,59);  //Storage of Pb lottery numbers min and max arguments to pass to function
    theRandomPowerball[]=randomPowerballGen(1,35); //Storage of PB Min and max arguments generated from function
    powerballString=console.log(powerChoice+randomPowerball[0]+randomPowerball[1]+randomPowerball[2]+randomPowerball[3]
    +randomPowerball[4]+"the PowerBall number "+theRandomPowerball[0]);

}else if (lotteryType=="F"||"f"){  //Set condition to run Florida lottery numbers
    floridaChoice="You're Florida Lottery numbers are ";  //String storage for output
    randomLottery[]=randomFloridaGen(1,53);  //Storage of Min and max arguments generated from function
    floridaString=console.log(floridaChoice+randomLottery[0]+randomLottery[1],+randomLottery[2]+randomLottery[3]
    +randomLottery[4]+randomLottery[5]);
}




