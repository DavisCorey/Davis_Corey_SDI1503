/**
 * Created by CoreyDavis on 3/11/15.
 */
//Prompt and Alert

//var userInput = prompt("Enter your year of birth:");  //Prompt for user input, store user input in variable userInput
//console.log(userInput); //Variable displayed in console that user input from prompt


var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width");  //Prompt for width
var height = prompt("Please enter the height.");  //Prompt for height
var area = width * height;  //Calculate user input
//console.log(area);  //Print out to console

//alert("The area of your rectangle is " + area + "sq feet");  //Display to user the calculation with concatenating strings and variable calculation

var result = "The area of your rectangle is " + area + "sq feet";  // Store user calculation and concatenated string
alert(result);  //Display variable stored to user