const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((countersEl) => {
  countersEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +countersEl.innerText;
    const dataCeil = countersEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);
    countersEl.innerText = currentNum;
    if (currentNum < dataCeil) {
      setTimeout(incrementCounter, 50);
    } else {
      countersEl.innerText = dataCeil;
    }
  }
});
