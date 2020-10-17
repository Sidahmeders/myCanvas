const canvas = document.getElementById('canvas');
const divCanvas  = document.getElementById('div-canvas');
canvas.width = innerWidth;
canvas.height = innerHeight / 1.2;
divCanvas.style.width = innerWidth + "px";
divCanvas.style.height = innerHeight / 1.2 + "px";

const c = canvas.getContext('2d');

//* appending rect
c.fillStyle = "#d89";
c.fillRect(900, 200, 100, 100);
c.fillStyle = "#99d";
c.fillRect(500, 100, 90, 90);

//* appending a line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(300, 250);
c.strokeStyle = "#0fd";
c.stroke();

//* appending Arc
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#007";
// c.stroke();

const cir = () => {
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * innerWidth;
        const y = Math.random() * innerHeight - 100;
        c.beginPath();
        c.arc(x, y, 2, 0, Math.PI * 2, false);
        c.strokeStyle = `#${i}8${i * 2}`;
        c.stroke();
    }
}

for(let i = 0; i < 100; i++) {
    setTimeout(() => {
        cir()
    }, 100 * i)
}
