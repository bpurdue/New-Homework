// Homework 4

// This homework assignment will give you some practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};
// athlete.foo = "bar"
// athlete.method = function () {
// 
// }

var athlete1 = {};
	athlete1.name = 'Kerry';
	athlete1.height = '5\' 10"';
	athlete1.age = 27;
	athlete1.country = 'the USA';
	athlete1.medals = 'Gold';
	athlete1.olympian = true;
	athlete1.introduce = function(name, country) {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
	}
console.log(athlete1);

console.log(athlete1.introduce('Kerry', 'USA'));



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};
// athlete['foo'] = "bar"
// athlete['method'] = function () {
// 
// }

var athlete2 = {};
	athlete2['name'] = 'Caitie';
	athlete2['height'] = '5\' 6"';
	athlete2['age'] = 28;
	athlete2['country'] = 'France';
	athlete2['medals'] = 'Silver';
	athlete2['olympian'] = true;
	athlete2['introduce'] = function(name, country) {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
	}
console.log(athlete2);

console.log(athlete2['introduce']('Caitie', 'France'));


// Problem 3
// Create the same object using ONE object literal


var athlete3 = {
	// set key/value pairs inside here
};

var athlete3 = {
	name: 'Joe',
	height: '6\'',
	age: 25,
	country: 'Germany',
	medals: 'Swimming',
	olympian: false,
	introduce: function(name, country) {
		return 'Hello! My name is ' + name + ' and I am from ' + country +'.';
	}
}
console.log(athlete3);

console.log(athlete3.introduce('Joe', 'Germany'));

// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

function Athlete(name, height, age, country, medals, olympian, introduce) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.country = country;
	this.medals = medals;
	this.olympian = olympian;
	this.introduce = function() {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
	};
}

var athlete1, athlete2, athlete3;

athlete1 = new Athlete('Kerry', '5\' 10"', 27, 'the USA', 'Gold', true);
athlete2 = new Athlete('Caitie', '5\' 6"', 28, 'France', 'Silver', true);
athlete3 = new Athlete('Joe', '6\'', 25, 'Germany', 'Bronze', true);

athlete1.introduce('Kerry', 'USA');
athlete2.introduce('Caitie', 'France');
athlete3.introduce('Joe', 'Germany');


console.log(athlete1, athlete2, athlete3);

console.log(athlete1.introduce('Kerry', 'USA'), athlete2.introduce('Caitie', 'France'),athlete3.introduce('Joe', 'Germany'));







// PROBLEM BELOW IS OPTIONAL

// Problem 5
// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();