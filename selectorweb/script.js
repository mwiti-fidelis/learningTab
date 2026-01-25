const btns = document.querySelectorAll(".favorite-icon");

btns.forEach((button) => {
  // Initialize: ensure no .filled class and starts with empty heart
  button.classList.remove("filled");
  button.innerHTML = "&#9825;";

  button.addEventListener("click", () => {
    toggleFavoriteIcon(button);
  });
});

function toggleFavoriteIcon(button) {
  if (button.classList.contains("filled")) {
    button.classList.remove("filled");
    button.innerHTML = "&#9825;";
  } else {
    button.classList.add("filled");
    button.innerHTML = "&#10084;";
  }
}