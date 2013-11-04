// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

//Using the W3C functions document.createElement(), document.createTextNode(), 
//and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi

var myList = document.createElement('dl');
var myTerm = document.createElement('dt');
var myDef = document.createElement('dd');

textTerm = '"chip and charge"';
textNode1 = document.createTextNode(textTerm);
myTerm.appendChild(textNode1);

textDef = 'A "chip and charge" is a type of approach shot in tennis where the baseline player hits a slice shot, moves rapidly to the net, and takes the offensive by being in a good volley position for the next shot.';
textNode2 = document.createTextNode(textDef);
myDef.appendChild(textNode2);

myList.appendChild(myTerm);
myList.appendChild(myDef);
document.body.appendChild(myList);





// Problem 2

//Do the same thing as problem 1 only insert your HTML using the innerHTML
//property of the DIV with id="definitions".

container = document.getElementById('definitions');
container.innerHTML += '<dl><dt>"chip and charge"</dt><dd>A "chip and charge" is a type of approach shot in tennis where the baseline player hits a slice shot, moves rapidly to the net, and takes the offensive by being in a good volley position for the next shot.</dd></dl>';




// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.

 $('#definitions')
.append('<dl><dt>"chip and charge"</dt><dd>A "chip and charge" is a type of approach shot in tennis where the baseline player hits a slice shot, moves rapidly to the net, and takes the offensive by being in a good volley position for the next shot.</dd></dl>');














