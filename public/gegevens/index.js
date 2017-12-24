
var gh = new GitHub({
   username: 'marker123',
   password: 'iphone5s',
   token: 'f32d39543537f723d39cbe3b8ea45f5ba0e0579b'

});

var naam = localStorage.getItem("gebruikersnaam");


var gebruiker = gh.getUser("ayachi-code");


gebruiker.getProfile(function (err,cb) {
      console.log(cb);
});
