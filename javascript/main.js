// Add a fade-out effect when the "step inside" button is clicked
document.querySelector("a.text-button").addEventListener("click", (e) => {
  e.preventDefault();
  const destination = e.currentTarget.href;
  document.body.style.transition = "opacity 0.5s ease-in-out";
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = destination;
  }, 500);
});