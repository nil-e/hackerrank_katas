// Question: 
// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Answer:

function staircase(n) {
    let blank=" ";
    let square="#";
    let outcome="";
    for(let j=n-1;j>=0;j--) {
        outcome+=blank.repeat(j);
        outcome+=square.repeat(n-j);
    outcome+="\n";
        }
    console.log(outcome);
}
