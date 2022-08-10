window.onload = function(){

  let form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();

    const turtle = document.getElementById("turtle");
    const monkey = document.getElementById("monkey");
    const snake = document.getElementById("snake");
    const invalid = document.getElementById("invalid");

    turtle.setAttribute("class", "hidden");
    monkey.setAttribute("class", "hidden");
    snake.setAttribute("class", "hidden");
    invalid.setAttribute("class", "hidden");


    const userRequest = document.getElementById("userRequest").value.toLowerCase();
    console.log("User requested " + userRequest)

    checkRequest(userRequest);
  };
};



function checkRequest(userRequest) {
  if (userRequest === "turtle") {
    console.log("Take me to turtle");
    turtle.removeAttribute("class");
  } else if (userRequest === "monkey") {
    console.log("Take me to monkey");
    monkey.removeAttribute("class");
  } else if (userRequest === "snake") {
    console.log("Take me to snake");
    snake.removeAttribute("class");
  } else {
    invalid.removeAttribute("class");
    console.log("Invalid request");

  };
};