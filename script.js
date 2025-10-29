let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); 
}
document.getElementById("learnMoreBtn").addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formMessage").innerText = " Message sent successfully!";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("formMessage").innerText = " Please fill all fields.";
  }
});