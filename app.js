var showDropdown = function(e) {
    e.currentTarget.classList.add("showcase-nav__item--show-dropdown")
  },
  hideDropdown = function(e) {
    e.currentTarget.classList.remove("showcase-nav__item--show-dropdown")
  },
  toggleDropdown = function(e) {
    e.currentTarget.classList.toggle("showcase-nav__item--show-dropdown")
  };

function setupDropdowns(n) {
  document.querySelectorAll(".showcase-nav__item--with-dropdown").forEach(function(e) {
    var o, t;
    n.matches ? ((o = e.classList).contains("showcase-nav__item--dropdown-left") && o.contains("showcase-nav__item--dropdown-right") || (t = e.getBoundingClientRect().width, e.querySelector(".dropdown").style.transform = "translateX(calc(-50% + " + t / 2 + "px))"), e.addEventListener("mouseenter", showDropdown), e.addEventListener("mouseleave", hideDropdown), e.querySelector(".showcase-nav__link").removeEventListener("click", toggleDropdown)) : (e.removeEventListener("mouseenter", showDropdown), e.removeEventListener("mouseleave", hideDropdown), e.querySelector(".dropdown").style.transform = "", e.addEventListener("click", toggleDropdown))
  })
}
var mediaQuery = window.matchMedia("(min-width: 992px)");
setupDropdowns(mediaQuery), mediaQuery.addListener(function(e) {
  var o;
  setupDropdowns(e), e.matches && ((o = document.querySelector("#showcase-menu")).style.height = "", bodyScrollLock.unlock(o))
});
var showcaseMenu = document.querySelector("#showcase-menu");

function closeMenuAndGoTo(o) {
  document.querySelector("#showcase-menu").classList.toggle("ft-menu--js-show");
  var e = document.querySelector("#showcase-menu");
  if (e.style.height = "", bodyScrollLock.unlock(e), "#" === o || !document.querySelector(o)) return !1;
  setTimeout(function() {
    var e = document.querySelector(o);
    window.scrollTo({
      top: e.getBoundingClientRect().top,
      behavior: "smooth"
    })
  }, 250)
}
document.querySelector("[close-nav-menu]").onclick = function(e) {
  showcaseMenu.classList.toggle("ft-menu--js-show"), bodyScrollLock.unlock(showcaseMenu)
}, document.querySelector("[open-nav-menu]").onclick = function(e) {
  showcaseMenu.classList.toggle("ft-menu--js-show"), showcaseMenu.style.height = window.innerHeight + "px", bodyScrollLock.lock(showcaseMenu)
}, document.querySelector("#showcase-menu").querySelectorAll("[href*='#']").forEach(function(o) {
  o.onclick = function(e) {
    e.preventDefault(), closeMenuAndGoTo(o.getAttribute("href"))
  }
});
var nav = document.querySelector(".showcase-nav");
window.onscroll = function(e) {
  var o = document.querySelector("[change-src-onscroll]");
  window.scrollY > nav.getBoundingClientRect().height ? (nav.classList.contains("showcase-nav--is-sticky") || (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.add("showcase-nav--is-sticky")) : 0 === window.scrollY && (nav.classList.contains("showcase-nav--is-sticky") && (window.logoSrc = o.getAttribute("src"), o.setAttribute("src", o.getAttribute("change-src-onscroll")), o.setAttribute("change-src-onscroll", logoSrc)), nav.classList.remove("showcase-nav--is-sticky"))
};
var languageDropdown = document.querySelector("[javascript-language-selector]");
languageDropdown.onclick = function(e) {
  e.target.classList.contains("dropdown__link") && (languageDropdown.querySelector(".dropdown__link--selected").classList.remove("dropdown__link--selected"), e.target.classList.add("dropdown__link--selected"), document.querySelector(".language-image").setAttribute("src", e.target.querySelector("img").getAttribute("src")))
}