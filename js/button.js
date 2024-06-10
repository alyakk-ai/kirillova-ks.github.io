const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", trackScroll);
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }
}