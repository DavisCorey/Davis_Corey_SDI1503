/**
 * Created by CoreyDavis on 3/11/15.
 */
//Casting

var stringVar = "6";
var result = 7 + Number(stringVar);   //Variable declaration, string conversion to number value
//console.log(result);

var areaCode = 407;  //Variable Declaration and assignment
var firstPart = 203;  //Variable Declaration and assignment
var secPart = 4529;  //Variable Declaration and assignment
//(407) 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);  //Number stored in variable converted to string
console.log(phoneNo);  //Display of variable in console
