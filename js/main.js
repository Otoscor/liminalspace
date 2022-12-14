// 요소의 가시성 관찰

const io = new IntersectionObserver(function (entires) {
  entires.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
});

const infoEls = document.querySelectorAll(".info");
infoEls.forEach(function (el) {
  io.observe(el);
});

// 사이드바

const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll("nav .nav-item");
const toggleEl = document.querySelector(".sidebar .toggle");

toggleEl.addEventListener("click", () => {
  if (sidebar.className == "sidebar") {
    sidebar.classList.add("open");
  } else {
    sidebar.classList.remove("open");
  }
});

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    navItem.classList.add("active");
  });
});
