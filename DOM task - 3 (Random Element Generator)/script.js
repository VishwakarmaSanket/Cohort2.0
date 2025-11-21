let button = document.querySelector("button");
let main = document.querySelector("main");
const quotes = [
  "Keep moving forward",
  "Believe in yourself",
  "Rise and shine",
  "Dreams need action",
  "Stay strong always",
  "Push your limits",
  "Focus and win",
  "Create your path",
  "Grow through challenges",
  "Never stop learning",
  "Be your best",
  "Stay hungry always",
  "Chase the vision",
  "Progress over perfection",
  "Trust the process",
  "Work beats talent",
  "Consistency creates success",
  "Make it happen",
  "Think bigger today",
  "Stay positive always",
];

button.addEventListener("click", function () {
  let index = Math.floor(Math.random() * quotes.length);
  let x = Math.random() * (window.innerWidth - 200); // random across screen
  let y = Math.random() * (window.innerHeight - 100);
  let rot = Math.floor(Math.random() * 361);
  let scal = Math.floor(Math.random() * 3);

  let h1 = document.createElement("h1");
  main.appendChild(h1);
  h1.innerHTML = quotes[index];
  h1.style.position = "absolute";
  h1.style.left = x + "px";
  h1.style.top = y + "px";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scal;
  h1.style.color = "white";
});
