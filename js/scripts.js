window.onload = function(){

  let form = document.querySelector("form");
  form.onsubmit = function(event){
    event.preventDefault();

    const userRequest = document.getElementById("userRequest").value.toLowerCase();
    console.log("User requested " + userRequest)

    checkRequest(userRequest);
  };
};


function checkRequest(userRequest) {
  if (userRequest === "turtle") {
    console.log("Take me to turtle");
  } else if (userRequest === "monkey") {
    console.log("Take me to monkey");
  } else if (userRequest === "snake") {
    console.log("Take me to snake");
  } else {
    console.log("Invalid request");
  };
};