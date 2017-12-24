
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: '424788152ca446862c4e8f5a187e605b566eca23'

});

var naam = localStorage.getItem("gebruikersnaam");

var gebruiker = gh.getUser(naam);


gebruiker.follow();
