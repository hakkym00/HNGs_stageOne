document.getElementById("day").innerHTML = new Date().toLocaleString(
  "default",
  { weekday: "long" }
);
document.getElementById("time").innerHTML = new Date().getUTCMilliseconds();
