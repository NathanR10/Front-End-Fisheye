function displayModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  const body = document.getElementById("body");
  modal.style.display = "block";
  main.style.filter = "blur(3px)";
  body.style.overflow = "hidden";
  main.style.pointerEvents = "none";
  document.getElementById("firstname").focus();
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  const main = document.getElementById("main");
  const body = document.getElementById("body");
  modal.style.display = "none";
  main.style.filter = "blur(0px)";
  body.style.overflow = "auto";
  main.style.pointerEvents = "auto";
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let elm = document.getElementById('contactForm').elements;
  console.log("Prénom: ", elm['firstname'].value);
  console.log("Nom: ", elm['name'].value);
  console.log("Mail: ", elm['mail'].value);
  console.log("Message: ", elm['message'].value);
});