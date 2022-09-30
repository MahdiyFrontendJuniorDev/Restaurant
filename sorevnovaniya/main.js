function openCloseMenu() {
  const menu = document.querySelector("#mobileMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

document.querySelector("#openBtn").addEventListener("click", function () {
  openCloseMenu();
});
document.querySelector("#closeBtn").addEventListener("click", function () {
  openCloseMenu();
});
