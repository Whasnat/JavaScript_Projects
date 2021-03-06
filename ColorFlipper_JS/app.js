const colors = ["green", "red", "Aqua", "AntiqueWhite", "Aquamarine", "Blue","Crimson", "DarkMagenta", "Indigo", "Maroon", "Navy"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    randomNumber = Math.floor(Math.random() *colors.length) +1; 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});


