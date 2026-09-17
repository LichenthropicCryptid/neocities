document.addEventListener("DOMContentLoaded", function (event) {
  const startBtn = document.getElementById("play-gif");
  const stopBtn = document.getElementById("stop-gif");

  const freeze = localStorage?.getItem("freezeframe") ?? "on";

  let e;

  if (freeze === "off") {
    startBtn.setAttribute("hidden", "");
    stopBtn.removeAttribute("hidden");
  } else {
    e = new Freezeframe({ trigger: false, responsive: false });
    stopBtn.setAttribute("hidden", "");
    startBtn.removeAttribute("hidden");
  }

  startBtn.addEventListener("click", function () {
    e.start();
    window.localStorage.setItem("freezeframe", "off");
    startBtn.setAttribute("hidden", "");
    stopBtn.removeAttribute("hidden");
  });

  stopBtn.addEventListener("click", function () {
    if (e) {
      e.stop();
    } else {
      e = new Freezeframe({ trigger: false, responsive: false });
    }
    window.localStorage.setItem("freezeframe", "on");
    stopBtn.setAttribute("hidden", "");
    startBtn.removeAttribute("hidden");
  });
});
