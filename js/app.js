
// ------------NAV MENU

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// ----------ACCESSIBILITY BUTTON
const accessible = document.querySelector (".accessible");
// const accessibility = document.querySelector(".accessibility");
const body = document.querySelector("complex");

accessible.addEventListener('click', () => body.classList.add('add-accessibility'));


// accessibility.addEventlistener("click", function () {
//   if (body.classList.contains("addAccessible")) {
//     body.classList.remove("addAccessible");
//   } else {
//     body.classList.add("addAccessible");

//   }
// })

