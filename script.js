let cols = 9, rows = 9; // Numărul de celule
let cellSize = 40; // Dimensiunea fiecărei celule
let p1, p2; // Obiectele pentru jucători
let currentPlayer; // Jucătorul curent
let walls = []; // Pozițiile zidurilor
let board; // Obiectul pentru tablă

function setup() {
  createCanvas(800,800);
  
  // Initializează tabla
  board = new Board(cols, rows);
  
  // Initializează jucătorii
  p1 = new Player(floor(cols / 2), 0, color(255, 0, 0)); // Jucătorul roșu
  p2 = new Player(floor(cols / 2), rows - 1, color(0, 0, 255)); // Jucătorul albastru
  currentPlayer = p1; // Jucătorul roșu începe
  
  // Initializează zidurile
  // Inițial nu sunt ziduri plasate
}

function draw() {
  background(255);

  // Desenează cercul maro în spatele tablei
  fill(139, 69, 19); // Maro
  noStroke();
  ellipse(width /2, height / 2, cellSize * (cols + 5));

  // Center the board within the circle
  translate(width/3.65, height/3.65);
  
  // Desenează tabla de joc (celule, ziduri, jucători)
  board.display();
  for (let wall of walls) {
    wall.display();
  }
  p1.display();
  p2.display();
  
  // Verifică condiția de câștig
  if (p1.y === rows - 1) {
    alert("Jucătorul roșu a câștigat!");
    noLoop();
  } else if (p2.y === 0) {
    alert("Jucătorul albastru a câștigat!");
    noLoop();
  }
}






