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

//JG: I'm moving the code flush left to keep indentation consistent.

var athlete1 = {};
athlete1.name = 'Kerry';
athlete1.height = '5\' 10"';
athlete1.age = 27;
athlete1.country = 'the USA';
athlete1.medals = 'Gold';
athlete1.isOlympian = true;
//JG: There's no need to pass arguments to introduce since the name and country are stored as properties
athlete1.introduce = function() {
	return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
}
//JG: addMedal was missing
//JG: Wrote a version that appends the medal as a string
athlete1.addMedal = function(medal) {
	this.medals += ',' + medal;
}

console.log(athlete1);

//JG: Fixed introduce()
console.log(athlete1.introduce());



// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).


var athlete2 = {};
athlete2['name'] = 'Caitie';
athlete2['height'] = '5\' 6"';
athlete2['age'] = 28;
athlete2['country'] = 'France';
athlete2['medals'] = 'Silver';
athlete2['isOlympian'] = true;
athlete2['introduce'] = function() {
	return 'Hello! My name is ' + this['name'] + ' and I am from ' + this['country'] + '.';
}
//JG: Added this
athlete2['addMedal'] = function(medal) {
	this['medals'] += ',' + medal;
}

console.log(athlete2);

//JG: Fixed introduce()
console.log(athlete2['introduce']());


// Problem 3
// Create the same object using ONE object literal

var athlete3 = {
	name: 'Joe',
	height: '6\'',
	age: 25,
	country: 'Germany',
	medals: 'Swimming',
	isOlympian: false,
	introduce: function() {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
	},
	//JG: Added this
	addMedal: function(medal) {
		this.medals += ',' + medal;
	}
}

console.log(athlete3);

console.log(athlete3.introduce());

// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

function Athlete(name, height, age, country, medals, olympian, introduce) {
	this.name = name;
	this.height = height;
	this.age = age;
	this.country = country;
	this.medals = medals;
	this.isOlympian = olympian;
	this.introduce = function() {
		return 'Hello! My name is ' + this.name + ' and I am from ' + this.country + '.';
	};
	this.addMedal = function(medal) {
		this.medals += ',' + medal;
	}
}

//JG: These three variables were already declared above so no "var" is needed
//JG: We're simply overwriting each variable.
athlete1 = new Athlete('Kerry', '5\' 10"', 27, 'the USA', 'Gold', true);
athlete2 = new Athlete('Caitie', '5\' 6"', 28, 'France', 'Silver', true);
athlete3 = new Athlete('Joe', '6\'', 25, 'Germany', 'Bronze', true);

console.log(athlete1, athlete2, athlete3);

//JG: I got rid of all the arguments that were being passed in to introduce().
//JG: You don't really need them since you can get the properties using this.name and this.country.
console.log(athlete1.introduce(), athlete2.introduce(), athlete3.introduce());







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