const mosca = document.getElementById("mosca")
const root = document.documentElement

var horizontal = 50, vertical = 50;
const max = 95, min = 5;


setInterval(() => {
    horizontal = Math.floor(Math.random() * (max - min + 1)) + min
    vertical = Math.floor(Math.random() * (max - min + 1)) + min
    
    root.style.setProperty('--horizontal', horizontal + "%");
    root.style.setProperty('--vertical', vertical + "%");

    console.log(
        "x = " + horizontal + "\ny = " + vertical
    )
}, 2000);