
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: '02342bfa98ebe7fa028ff0e2aaf98214113aceaf'

});

var naam = localStorage.getItem("gebruikersnaam");

console.log(naam);

var gebruiker = gh.getUser("ayachi-code");
