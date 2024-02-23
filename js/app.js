var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
// var heading = document.querySelector("h1");
var body = document.querySelector("body");


themeSwitchInput.addEventListener("click", function () {
    if (body.classList.contains("accessible")) {
        body.classList.remove("accessible");
        ball.classList.remove("move-right");
        // heading.innerText = "Stealth Quincy";
    } else {
        body.classList.add("accessible");
        ball.classList.add("move-right");
        // heading.innerText = "Party Quincy";
    }
});