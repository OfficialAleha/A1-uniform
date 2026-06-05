document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      this.reset();
    });
document.getElementById("feedbackForm").addEventListener("submit", function(event){
      event.preventDefault(); // Prevent actual form submission
      document.querySelector(".thankyou").style.display = "block";
      this.reset(); // Clear form fields
    });   
   
    document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    let currentIndex = 0;

    function showNextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }

    setInterval(showNextSlide, 500);

  });