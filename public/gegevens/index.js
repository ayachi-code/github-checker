
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: '8b205b9610f534e285d29a2f737d2927076b131c'

});

var naam = localStorage.getItem("gebruikersnaam");


var gebruiker = gh.getUser("ayachi");

gebruiker.follow();
