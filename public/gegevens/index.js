
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: 'c9acdd68e3aa27f8500f317e7b89021b33796b28'

});

var naam = localStorage.getItem("gebruikersnaam");


var gebruiker = gh.getUser(naam);


gebruiker.getProfile(function (err,cb) {
      var naam_gebruiker = cb.name;
      var titel = document.getElementById('titel').innerHTML = "gebruiker " + naam_gebruiker;

});
