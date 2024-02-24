// Accessibility Toggle Button 

// var themeSwitchInput = document.querySelector("#toggle");
// var ball = document.querySelector(".ball");
// var heading = document.querySelector("h1");
// var body = document.querySelector("body");


// themeSwitchInput.addEventListener("click", function () {
//     if (body.classList.contains("accessible")) {
//         body.classList.remove("accessible");
//         ball.classList.remove("move-right");
//         // heading.innerText = "Stealth Quincy";
//     } else {
//         body.classList.add("accessible");
//         ball.classList.add("move-right");
//         // heading.innerText = "Party Quincy";
//     }
// });


// ------- Nav Menu ---------

// const toggle = document.querySelector('.toggle');
// const nav = document.querySelector('.full-screen-nav');
// const backdrop = document.querySelector('.backdrop');

// toggle.addEventListener('click', () => nav.classList.add('open-nav'));
// backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

// function closeNav() {
//     nav.classList.remove('open-nav');
// }

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 