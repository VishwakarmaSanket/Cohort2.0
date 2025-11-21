var h2 = document.querySelector("h2");
var inc = document.getElementById("add");
var dec = document.getElementById("sub");

let a = 0;

inc.addEventListener("click", function () {
  a++;
  h2.innerText = a;
});

dec.addEventListener("click", function () {
  if (a > 0) {
    a--;
    h2.innerText = a;
  } else {
    alert("Value cannot be negative");
  }
});
