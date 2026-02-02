/* ===============================
   HOME PAGE ONLY SCRIPT
   =============================== */

/* HERO BUTTON ACTIONS */
const exploreBtn = document.querySelector(".btn-primary");
const howItWorksBtn = document.querySelector(".btn-outline");
const productsSection = document.querySelector(".products");
const aboutSection = document.querySelector(".about");

if (exploreBtn && productsSection) {
    exploreBtn.addEventListener("click", () => {
        productsSection.scrollIntoView({ behavior: "smooth" });
    });
}

if (howItWorksBtn && aboutSection) {
    howItWorksBtn.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
}

/* FEATURE REVEAL ON SCROLL (HOME ONLY) */
const revealElements = document.querySelectorAll(
    ".feature, .product-card, .about-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach(el => observer.observe(el));

/* ADD TO CART (TEMPORARY HOME DEMO) */
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.innerText = "Added ✓";
        button.disabled = true;
    });
});
