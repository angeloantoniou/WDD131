const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hide");
});

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);


const gallery = document.querySelector(".gallery");
const modal = document.getElementById("modal");

gallery.addEventListener("click", (event) => {
  const img = event.target.closest("img");
  if (!img) return;

  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");
  const fullSrc = src.split("-")[0] + "-full.jpeg";

  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
  modal.showModal();

  modal.querySelector(".close-viewer").addEventListener("click", () => {
    modal.close();
  });
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
