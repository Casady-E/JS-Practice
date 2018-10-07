//codepen console write
/*
var c = function() {
    return({
        log: function(msg) {
          consoleDiv = document.getElementById('console');
          para = document.createElement('p');
          text = document.createTextNode(msg);
          para.appendChild(text);
          consoleDiv.appendChild(para);
        }
    });
}();

c.log("poop");
*/
/*
create a program that will ask the users name, age, and reddit username. have it tell them the information back, in the format:

your name is (blank), you are (blank) years old, and your username is (blank)
for extra credit, have the program log this information in a file to be accessed later.
*/

/*
alert1 = prompt("What is your name?");
alert2 = prompt("How old are you?");
alert3 = prompt("What is your username?");
function userInfo(name, age, username) {
    var alert1 = name;
    var alert2 = age;
    var alert3 = username;
  c.log('Your name is ' + name + ', you are ' + age + ' years old, and your username is ' + username);
}

userInfo();
*/
//userInfo('John', 27, 'bobface');

//var userJohn = userInfo('John', 25, 'bobface');
//c.log(userJohn);

//FINAL ANSWER
/*
function userInfo(name, age, username) {
  c.log('Your name is ' + name + ', you are ' + age + ' years old, and your username is ' + username + '.');
}

userInfo(prompt("What is your name?"), prompt("How old are you?"), prompt("What is your username?"));
*/

console.log("All statistics were collected during October 2018");
/*
const hazard = {
  name: "Eden Hazard",
  position: "Forward",
  teams: ["Chelsea", "Belgium National"],
  totalAppearances: 215,
  totalShots: 416,
  shotsOnTarget: 184,
  totalGoals: 75,
  totalPasses: 10207,
  totalAssists: 41,
  shotAccuracy: function calculateAccuracy(shots, onTarget){
    shots = this.totalShots;
    onTarget = this.shotsOnTarget;
    let accuracy = (onTarget / shots) * 100;
    console.log(this.name + "'s shot accuracy is " + accuracy.toFixed(2) + "%");
  },
  goalsAverage: function calculateAverage(goals, appearances){
    goals = this.totalGoals;
    appearances = this.totalAppearances;
    let average = (goals / appearances);
    console.log(this.name + " has an average of " + average.toFixed(2) + " goals per game.");
  }
};

const griezmann = {
  name: "Antoine Griezmann",
  position: "Forward",
  teams: ["Atletíco Madrid", "Real Sociedad", "France National"],
  totalAppearances: 367,
  totalShots: 925,
  shotsOnTarget: 414,
  totalGoals: 154,
  totalPasses: 11257,
  totalAssists: 49,
  shotAccuracy: function calculateAccuracy(shots, onTarget){
    shots = this.totalShots;
    onTarget = this.shotsOnTarget;
    let accuracy = (onTarget / shots) * 100;
    console.log(this.name + "'s shot accuracy is " + accuracy.toFixed(2) + "%");
  },
  goalsAverage: function calculateAverage(goals, appearances){
    goals = this.totalGoals;
    appearances = this.totalAppearances;
    let average = (goals / appearances);
    console.log(this.name + " has an average of " + average.toFixed(2) + " goals per game.");
  }
}

const messi = {
  name: "Lionel Messi",
  position: "Forward",
  teams: ["Barcelona", "Argentina National"],
  totalAppearances: 425,
  totalShots: 2102,
  shotsOnTarget: 1006,
  totalGoals: 425,
  totalPasses: 24022,
  totalAssists: 151,
  shotAccuracy: function calculateAccuracy(shots, onTarget){
    shots = this.totalShots;
    onTarget = this.shotsOnTarget;
    let accuracy = (onTarget / shots) * 100;
    console.log(this.name + "'s shot accuracy is " + accuracy.toFixed(2) + "%");
  },
  goalsAverage: function calculateAverage(goals, appearances){
    goals = this.totalGoals;
    appearances = this.totalAppearances;
    let average = (goals / appearances);
    console.log(this.name + " has an average of " + average.toFixed(2) + " goals per game.");
  }
}

hazard.shotAccuracy();
hazard.goalsAverage();
griezmann.shotAccuracy();
griezmann.goalsAverage();
messi.shotAccuracy();
messi.goalsAverage();
const ronaldo = {
  name: "Cristiano Ronaldo",
  position: "Forward",
  teams: ["Real Madrid", "Juventus", "Portugal National"],
  totalAppearances: 420,
  totalShots: 2793,
  shotsOnTarget: 1154,
  totalGoals: 428,
  totalPasses: 13969,
  totalAssists: 120,
  shotAccuracy: function calculateAccuracy(shots, onTarget){
    shots = this.totalShots;
    onTarget = this.shotsOnTarget;
    let accuracy = (onTarget / shots) * 100;
    console.log(this.name + "'s shot accuracy is " + accuracy.toFixed(2) + "%");
  },
  goalsAverage: function calculateAverage(goals, appearances){
    goals = this.totalGoals;
    appearances = this.totalAppearances;
    let average = (goals / appearances);
    console.log(this.name + " has an average of " + average.toFixed(2) + " goals per game.");
  }
}
ronaldo.shotAccuracy();
ronaldo.goalsAverage();
console.log(ronaldo);
*/



function Player(name, position, teams, totalAppearances, totalShots, shotsOnTarget, totalGoals,
totalPasses, totalAssists, shotAccuracy, goalsAverage) {
  this.name = name;
  this.position = position;
  this.teams = teams;
  this.totalAppearances = totalAppearances;
  this.totalShots = totalShots;
  this.shotsOnTarget = shotsOnTarget;
  this.totalGoals = totalGoals;
  this.totalPasses = totalPasses;
  this.totalAssists = totalAssists;
  this.shotAccuracy = function (shots, onTarget){
    shots = totalShots;
    onTarget = shotsOnTarget;
    let accuracy = (onTarget / shots) * 100;
    console.log(name + "'s shot accuracy is " + accuracy.toFixed(2) + "%");
    return accuracy;
  }();
  this.goalsAverage = function (goals, appearances){
    goals = totalGoals;
    appearances = totalAppearances;
    let average = (goals / appearances);
    console.log(name + " has an average of " + average.toFixed(2) + " goals per game.");
    return average;
  }();
}

let hazard = new Player("Eden Hazard", "Forward", ["Chelsea", "Belgium National"],
215, 416, 184, 75, 10207, 41);

let griezmann = new Player("Antoine Griezmann", "Forward", ["Atletíco Madrid", "Real Sociedad", "France National"],
367, 925, 414, 154, 11257, 49);

let messi = new Player("Lionel Messi", "Forward", ["Barcelona", "Argentina National"],
425, 2102, 1006, 425, 24022, 151);

let ronaldo = new Player("Cristiano Ronaldo", "Forward", ["Real Madrid", "Juventus", "Portugal National"],
420, 2793, 1154, 428, 13969, 120);

let drogba = new Player('Didier Drogba', 'Forward', ["Chelsea", "Ivory Coast National", "Galatasaray", "Montreal Impact"],
 198, 699, 269, 87, 3772, 37);


console.log(hazard, griezmann, messi, ronaldo, drogba);
console.log(drogba.shotAccuracy);

//console.log(car1.make);
// expected output: "Eagle"
