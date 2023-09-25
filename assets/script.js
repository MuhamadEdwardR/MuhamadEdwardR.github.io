// JavaScript untuk mengaktifkan slider hanya pada lebar perangkat maksimum 786px (handphone)
function enableOrDisableCardSlider(cardSliderElement) {
  const cardSlider = cardSliderElement.querySelector(".card-slider");
  const cards = cardSliderElement.querySelectorAll(".card");

  if (window.innerWidth <= 786) {
    cardSlider.style.overflowX = "auto";
    cardSlider.style.scrollSnapType = "x mandatory";
    cardSlider.style.WebkitOverflowScrolling = "touch";

    cards.forEach((card) => {
      card.style.flex = "0 0 100%";
      card.style.scrollSnapAlign = "start";
    });
  } else {
    cardSlider.style.overflowX = "hidden";
    cardSlider.style.scrollSnapType = "none";
    cardSlider.style.WebkitOverflowScrolling = "auto";

    cards.forEach((card) => {
      card.style.flex = "unset";
      card.style.scrollSnapAlign = "unset";
    });

    // Menghapus event listener untuk desktop
    cardSliderElement.removeEventListener("scroll", handleScroll);
  }
}

function handleScroll() {
  // Menghentikan scrolling saat digunakan pada desktop
  this.scrollLeft = 0;
}

const cardSlider1 = document.querySelector("#card-slider-1");
const cardSlider2 = document.querySelector("#card-slider-2");
const cardSlider3 = document.querySelector("#card-slider-3");

// Memanggil fungsi saat jendela dimuat ulang
window.addEventListener("DOMContentLoaded", () => {
  enableOrDisableCardSlider(cardSlider1);
  enableOrDisableCardSlider(cardSlider2);
  enableOrDisableCardSlider(cardSlider3);
});

// Memanggil fungsi saat jendela diubah ukuran
window.addEventListener("resize", () => {
  enableOrDisableCardSlider(cardSlider1);
  enableOrDisableCardSlider(cardSlider2);
  enableOrDisableCardSlider(cardSlider3);
});
