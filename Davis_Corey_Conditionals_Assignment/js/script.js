/**
 * Created by CoreyDavis on 3/19/15.
 * MDV 2330
 * Conditional Assignment
 */

//Add alert to test my file
//alert("JavaScript is functional!");


//variables
var budget=Number(prompt("Let's calculate how much it cost to feed everyone. \n Can you input your estimated budget in dollars."));
var meeting=Number(prompt("How many meetings should we schedule this year?"));
var attendees=Number(prompt("Please input the number of people the venue can hold"));
var personCost;  //Variable Declaration, hold calculated cost to feed each person
var blankString;  //Variable Declaration, Hold blank string prompt value if true
var blankString2;  //Variable Declaration, Hold blank string prompt value if true
var blankString3;  //Variable Declaration, Hold blank string prompt value if true
var approval;  //Variable Declaration, Hold approval based on range stored.

//Validate Prompt with Ternary
blankString=(budget=="")? Number(prompt("We left out some information \n Can you input your estimated budget in dollars.")):false;
blankString2=(meeting=="")? Number(prompt("We left out some information \n Can you input the number of meeting to schedule this year.")):false;
blankString3=(attendees=="")? Number(prompt("We left out some information \n Can you input the number of people the venue can hold")):false;


//process calculation person cost
personCost = budget / (meeting * attendees);


//conditionals


//outputs
console.log("At $"+personCost+" your budget of $"+budget+" will be "+approval+" by the finance department.");
