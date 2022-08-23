const span = document.querySelector("span");
const dice = document.querySelector(".dice");
const advice = document.querySelector("q");
const h1 = document.querySelector("h1")

function randomAdvice() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            span.textContent = Math.floor(Math.random() * 10001);
            advice.textContent = data.content;
        })
}

dice.addEventListener("click", randomAdvice);