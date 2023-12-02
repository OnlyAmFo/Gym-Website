const section1 = document.querySelector("#section-1");
const journeyBtn = document.getElementsByClassName(".journeyBtn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const testimonials = [
  {
    name: "John Doe",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nec justo in lacinia.",
    img: "1.png",
  },

  {
    name: "Duck Hean",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    img: "2.png",
  },

  {
    name: "Rapture Jefrey",
    quote:
      "Integer porta mollis enim eget egestas. Aliquam pharetra tincidunt suscipit. In quis consequat massa.",
    img: "3.png",
  },

  // {
  //   name: "John Hoe",
  //   quote:
  //     "Quisque feugiat dolor vitae erat interdum, eu viverra risus semper. Curabitur vel consectetur arcu. Cras non diam dignissim, tristique sem non, aliquam lectus.",
  // },
];

let currentIndex = 0;

function showTestimonial(index) {
  const testimonial = testimonials[index];
  const testimonialElement = document.querySelector(".testimonial");
  // <img src="1.png" alt="Avatar" class="avatar">
  //get testimonial
  testimonialElement.innerHTML = `
  <img src="${testimonial.img}" alt="Avatar" class="avatar">
      <h2>${testimonial.name}</h2>
      <p class="quote">"${testimonial.quote}"</p>
      <button type="submit" class="BtnbookMe">Book Me</button>
    `;
}

function showNext() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

//display testimonial on page load
showTestimonial(currentIndex);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//display color change
const colorMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Set initial mode based on user preference
document.body.classList.toggle("dark-mode", colorMode);

//switch color
function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

