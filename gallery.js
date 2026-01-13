// Flip card functionality
const flowerCards = document.querySelectorAll(".flower-card");

flowerCards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

// Smooth animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    }
  });
}, observerOptions);

// Flower card containers
document.querySelectorAll(".flower-card-container").forEach((container) => {
  observer.observe(container);
});
