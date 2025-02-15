let date = new Date();
let horas = date.getHours();

let txt = document.getElementById('txt');
let img = document.getElementById('img');

if(horas > 5 && horas <= 12) {
    txt.innerText = 'Agora são ' + horas + ' horas. Bom dia!';
    img.src = "Images/manhã.png";
    document.body.backgroundColor = "#FFFAE3"
}
else if(horas > 12 && horas <= 17) {
    txt.innerText= 'Agora são ' + horas + ' horas. Boa tarde!';
    img.src = "Images/tarde.png";
    document.body.style.backgroundColor = "#6BA6F9";
}
else {
    txt.innerText = 'Agora são ' + horas + ' horas. Boa noite!';
    img.src = "Images/noite.png";
    document.body.style.backgroundColor = "#0A0A23";
}