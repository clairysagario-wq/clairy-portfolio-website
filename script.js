const contactButton = document.getElementById("contactButton");
const contactDetails = document.getElementById("contactDetails");

contactButton.addEventListener("click", function () {
  contactDetails.classList.toggle("show");

  if (contactDetails.classList.contains("show")) {
    contactButton.textContent = "Hide Contact Details";
  } else {
    contactButton.textContent = "Contact Me";
  }
});