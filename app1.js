function resultado() {
var p1, p2, p3, puntaje;
if (document.getElementById("Uruguay1930").checked==true){p1=1} else {p1=0}
if (document.getElementById("Francia").checked==true){p2=1} else {p2=0}
if (document.getElementById("Luka").checked==true){p3=1} else {p3=0}
puntaje = p1 + p2 + p3;
alert("aciertos"+ puntaje);
location.reload();
}

function resultado() {
    var p1, p2, p3, puntaje;
    if (document.getElementById("Hérvas").checked==true){p1=1} else {p1=0}
    if (document.getElementById("12").checked==true){p2=1} else {p2=0}
    if (document.getElementById("1982").checked==true){p3=1} else {p3=0}
    puntaje = p1 + p2 + p3;
    alert("aciertos"+ puntaje);
    location.reload();
    }
