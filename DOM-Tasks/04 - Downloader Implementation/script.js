var grow = 0;
var main = document.querySelector("main");
var inner = document.querySelector(".inner");
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  var num = 50 + Math.floor(Math.random() * 50);

  var int = setInterval(function () {
    grow++;
    h2.innerHTML = grow + "%";
    inner.style.width = grow + "%";
  }, num);

  setTimeout(function () {
    clearInterval(int);
    btn.innerHTML = "Downloaded";
    btn.style.opacity = 0.5;
  }, num * 100);
});
