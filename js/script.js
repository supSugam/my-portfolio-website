//Sidebar for Mobile

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  navLinks.classList.toggle("gradient-text");
});

// const navLinks = document.querySelectorAll(".main-nav-links:link");

// navLinks.forEach(function (navLink) {
//   btnNavEl.addEventListener("click", function (e) {
//     navLink.classList.toggle("gradient-text");
//   });
// });

//Smooth Scrolling Animation (Any Browser)

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    //Scroll to sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //Close Sidebar after click

    if (link.classList.contains("main-nav-links")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//Sticky NavBar

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

//For Scrolling Animation

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Email Receive SMTP

//For Popup Message

function toggleBlur() {
  let blur = document.getElementById("blur");
  let blurFooter = document.getElementById("blur--footer");

  blur.classList.toggle("active");
  blurFooter.classList.toggle("active");

  let popup = document.getElementById("popup");
  popup.classList.toggle("active");
}

function openPopup() {
  popup.classList.add("open-popup");
  toggleBlur();
  $("body").css("overflow", "hidden");

  // document.body.style.overflow = "hidden";
}

function closePopup() {
  popup.classList.remove("open-popup");
  toggleBlur();
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var btn = document.getElementById("button");

  var option = document.getElementById("select-where");
  let selected = option.options[option.selectedIndex].text;
  let datetime = new Date().toLocaleString();

  emailjs
    .send("toZoho", "template_o6787aq", {
      from_name: document.getElementById("full-name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
      selected_option: selected,
      date_time: datetime,
    })
    .then(function (res) {
      openPopup();

      var form = document.getElementById("form");
      form.reset();
    });
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

checkFlexGap();
