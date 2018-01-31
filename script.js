$(document).ready(function() {
    for (var i = 1; i < 152; i++) {
        $("#container").append("<img src='http://pokeapi.co/media/img/"+i+".png'>");
        console.log(i);
    }
});