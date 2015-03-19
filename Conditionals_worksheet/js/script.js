/**
 * Created by CoreyDavis on 3/19/15.
 * MDV 2330
 * Conditionals_worksheet
 */

//Add alert to test my file
//alert("JavaScript is functional!");

//variables
//var temp=80;  //Hot enough example, is it hot enough to go to the beach
//var weight=145;  //Stuff your face example, an entrant qualifies based on weight
var degrees=Number(prompt("Please enter the temperature."));  //Prompt for temp in degrees
var unit=prompt("Enter the unit to convert to.","F or C");  //Prompt for unit of temp to convert
var fahrenheit;
var celsius;

//Conditionals
/*if(temp <75){  //If less than 75 degrees
    console.log("We will go to the beach! ");
}else{  //If greater than 75 or equal
    console.log("We will go to the movies.");
}*/
/*if(weight <250){  //If less than 250 pounds
    console.log("The competitor needs to gain some weight!");
}else{  //If greater than or equal to 250 pounds
    console.log("The competitor qualifies for the heavyweight division.")
}*/
if(unit=="F"){  //Conversion to Fahrenheit when 'F' entered
    fahrenheit=degrees*1.8+32;
    console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");  //Output of Fahrenheit temp
}else if(unit=="C"){  //Conversion to Celsius when 'C' entered
    celsius=(degrees-32)*.5556;
    console.log("The temperature is "+celsius+" degrees Celsius.");  //Output of Celsius temp
}

//prompts


//outputs
