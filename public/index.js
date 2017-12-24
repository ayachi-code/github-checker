var verzenden_knop = document.getElementById('verzenden').addEventListener('click',() => {
    var gebruiker = document.getElementById('zoeka').value;
    localStorage.setItem("gebruikersnaam", gebruiker);
});
