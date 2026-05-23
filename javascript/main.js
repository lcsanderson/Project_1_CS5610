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

document.addEventListener("mousemove", (e) => {
  document.body.style.backgroundImage = `radial-gradient(
    circle 150px at ${e.clientX}px ${e.clientY}px,
    #F6AE2D 0%,
    transparent 100%
  )`;
});
