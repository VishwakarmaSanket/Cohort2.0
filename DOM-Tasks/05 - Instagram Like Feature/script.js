var img = document.querySelector("img");
var like = document.querySelector("i");

img.addEventListener("dblclick", function () {
  like.style.opacity = 1;
  like.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

  setTimeout(function () {
    like.style.transform = "translate(-50%,-300%) scale(1) rotate(60deg)";
  }, 800);

  setTimeout(function () {
    like.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    like.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1200);
});
