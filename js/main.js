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
    let accuracy = onTarget / shots;
    console.log(accuracy.toFixed(2));
  },
};
hazard.shotAccuracy();

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
    let accuracy = onTarget / shots;
    console.log(accuracy.toFixed(2));
  },
}
griezmann.shotAccuracy();
