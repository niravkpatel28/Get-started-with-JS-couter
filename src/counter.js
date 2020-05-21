var count = 0;

function incrementCounter() {
  count = count + 1;
  document.getElementById("counter").innerHTML = count;
}

function decrementCounter() {
  count = count - 1;
  document.getElementById("counter").innerHTML = count;
}
