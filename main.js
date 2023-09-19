const canvas = document.getElementById("cobraCanvas");
const contexto = canvas.getContext("2d");

const area = 20;
const widtharea = canvas.width / area;
const heightarea = canvas.height / area;

const cobra = [{ x: 5, y: 5 }];
const maca = { x: 10, y: 10 };

let direcaox = 1;
let direcaoy = 0;

function criarcobra() {
    ctx.fillStyle = "green";
    for (let i = 0; i < cobra.length; i++) {
        ctx.fillRect(
            cobra[i].x * area,
            cobra[i].y * area,
            area,
            area
        );
    }
}

function criarmaca() {
    ctx.fillStyle = "red";
    ctx.fillRect(maca.x * area, maca.y * area, area, area);
}

function movercobra() {
    const cabeca = { x: cobra[0].x + dx, y: cobra[0].y + dy };
    cobra.unshift(cabeca);

    if (cabeca.x === maca.x && cabeca.y === maca.y) {
        maca.x = Math.floor(Math.random() * widtharea);
        maca.y = Math.floor(Math.random() * heightarea);
    } else {
        cobra.pop();
    }
}

function limparCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function recomecar() {
    limparCanvasCanvas();
    movercobra();
    criarcobra();
    criarmaca();
    // Adicione lógica de colisão aqui
    requestAnimationFrame(recomecar);
}

recomecar();