document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("start-btn");
  const loader = document.getElementById("loader");
  const main = document.querySelector("main");

  button.addEventListener("click", (e) => {
    e.preventDefault();       // Stop instant navigation
    main.style.display = "none";  // Hide main content
    loader.hidden = false;    // Show loader (removes `hidden` attribute)

    // After delay, navigate
    setTimeout(() => {
      window.location.href = "desktop.html";
    }, 1500);  // 1.5 seconds for loader
  });
});