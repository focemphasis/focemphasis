// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });

});

// Counter Animation
const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    if (window.scrollY > stats.offsetTop - 500 && !started) {

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

        started = true;

    }

});

// Back To Top
const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.className = "back-top";

document.body.appendChild(btn);

btn.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

window.addEventListener("scroll", () => {

    btn.style.display = window.scrollY > 500 ? "block" : "none";

});