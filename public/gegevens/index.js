
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: 'c9acdd68e3aa27f8500f317e7b89021b33796b28'

});

var naam = localStorage.getItem("gebruikersnaam");


var gebruiker = gh.getUser(naam);


gebruiker.getProfile(function (err,cb) {
      var naam_gebruiker = cb.name;
      var gebruikersnaam = cb.login;
      var volgers = cb.followers;
      var titel = document.getElementById('titel').innerHTML = "gebruiker " + naam_gebruiker;
      var welkom = document.getElementById('welkom').innerHTML = "Informatie over gebruiker " + gebruikersnaam;
      var vn = document.getElementById('vn').innerHTML = naam_gebruiker;
      var gb = document.getElementById('gb').innerHTML = gebruikersnaam;
      var fw = document.getElementById('fw').innerHTML = volgers;


      console.log(cb);

});
