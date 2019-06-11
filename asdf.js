
var email = "if.iknisleh!!!uohz.nauygnep";
var telephone = "20765 2004 853+";
var skype = "nyymypz";

function init() {

    var e = null;

    // E-mail
    e = document.getElementById("email");
    e.innerHTML = reverse(email).replace(/!!!/g, "@");
    e.setAttribute("href", "mailto:"+reverse(email).replace(/!!!/g, "@"));

    // Phone
    e = document.getElementById("telephone");
    e.innerHTML = reverse(telephone);
    e.setAttribute("href", "tel:"+reverse(telephone).replace(/\s/g, ""));
    
    // Skype
    e = document.getElementById("skype");
    e.innerHTML = reverse(skype);
    e.setAttribute("href", "skype:"+reverse(skype));

}

function reverse(s){
    return s.split("").reverse().join("");
}
