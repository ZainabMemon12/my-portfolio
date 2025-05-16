var typed = new Typed(".text", {
    strings: ["I am Zainab Memon", " I am a Mern Dev", "I am a Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) { 
        navbar.classList.add("scrolled"); 
      } else {
        navbar.classList.remove("scrolled");
      }
    });