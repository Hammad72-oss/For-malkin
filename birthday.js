const starsContainer = document.getElementById("stars");

function createStars() {

    for (let i = 0; i < 140; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 4 + "s";
        star.style.animationDuration = (2 + Math.random() * 3) + "s";

        starsContainer.appendChild(star);
    }
}

createStars();