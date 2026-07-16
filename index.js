// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// ==========================
// CLOSE MENU AFTER CLICK
// ==========================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
        header.style.background = "rgba(15,23,42,.95)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(15,23,42,.8)";

    }

});


// ==========================
// ACTIVE NAVIGATION LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// SMOOTH REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(

".home-content, .home-image, .about, .skill-card, .service-card, .project-card, .contact"

);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ==========================
// TYPING EFFECT
// ==========================

const titles = [

"AI Full Stack Developer",

"Python Developer",

"LangChain Developer",

"AI Automation Expert",

"SEO Specialist"

];

let titleIndex = 0;

let charIndex = 0;

const heading = document.querySelector(".home-content h2");

function typeEffect() {

    if (charIndex < titles[titleIndex].length) {

        heading.textContent += titles[titleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    }

    else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        heading.textContent = titles[titleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    }

    else {

        titleIndex++;

        if (titleIndex >= titles.length) {

            titleIndex = 0;

        }

        setTimeout(typeEffect, 500);

    }

}

heading.textContent = "";

typeEffect();


// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ==========================
// CONTACT FORM
// ==========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("Portfolio Website Loaded Successfully");