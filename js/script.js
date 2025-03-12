const jobTitles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];
let index = 0;

// Fungsi untuk mengetik teks pekerjaan secara animasi
function typeJobTitle(title, element) {
  let i = 0;
  element.classList.add("typing");
  const interval = setInterval(() => {
    if (i < title.length) {
      element.textContent += title.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        eraseJobTitle(element);
      }, 1000);
    }
  }, 150);
}

// Fungsi untuk menghapus teks pekerjaan secara animasi
function eraseJobTitle(element) {
  let text = element.textContent;
  const interval = setInterval(() => {
    if (text.length > 0) {
      text = text.slice(0, -1);
      element.textContent = text;
    } else {
      clearInterval(interval);
      index = (index + 1) % jobTitles.length;
      setTimeout(() => {
        typeJobTitle(jobTitles[index], element);
      }, 500);
    }
  }, 100);
}

// Menjalankan animasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const jobTitleElement = document.getElementById("job-title");
  typeJobTitle(jobTitles[index], jobTitleElement);
});

// Fungsi untuk menampilkan panel keterampilan berdasarkan kategori
function showPanel(panel) {
  const categories = document.querySelectorAll(".myskills-categories span");
  categories.forEach((category) => category.classList.remove("active"));

  if (panel === "programming") {
    document.getElementById("programming-panel").style.display = "flex";
    document.getElementById("tools-panel").style.display = "none";
    categories[0].classList.add("active");
  } else if (panel === "tools") {
    document.getElementById("programming-panel").style.display = "none";
    document.getElementById("tools-panel").style.display = "flex";
    categories[1].classList.add("active");
  }
}

// Efek animasi muncul saat elemen masuk ke tampilan layar
const fadeInElements = document.querySelectorAll(
  ".fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom, .fade-in-center"
);
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

fadeInElements.forEach((element) => observer.observe(element));

// Mengubah teks pekerjaan di footer setiap beberapa detik
const footerJobTitles = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

let currentIndex = 0;
const jobTitleElement = document.getElementById("job-title-footer");

function updateJobTitle() {
  jobTitleElement.textContent = footerJobTitles[currentIndex];

  currentIndex = (currentIndex + 1) % footerJobTitles.length;
}

setInterval(updateJobTitle, 2000);

updateJobTitle();

// Smooth scrolling dengan offset navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 80;
    const targetPosition = target.offsetTop - offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});

// Menampilkan sertificate yang disembunyikan
document.getElementById("viewAllBtn").addEventListener("click", function () {
  document.querySelectorAll(".sertificate-item").forEach((item) => {
    item.style.display = "block";
  });
  document.getElementById("viewAllBtn").classList.add("hidden");
  document.getElementById("closeBtn").classList.remove("hidden");
});

document.getElementById("closeBtn").addEventListener("click", function () {
  if (window.innerWidth > 768) {
    document.querySelectorAll(".sertificate-item").forEach((item, index) => {
      if (index >= 3) item.style.display = "none";
    });
  } else {
    document.querySelectorAll(".sertificate-item").forEach((item, index) => {
      if (index >= 4) item.style.display = "none";
    });
  }
  document.getElementById("viewAllBtn").classList.remove("hidden");
  document.getElementById("closeBtn").classList.add("hidden");
});

// Humberger
function toggleMenu() {
  const menu = document.querySelector(".navbar-menu");
  menu.classList.toggle("active");
}
