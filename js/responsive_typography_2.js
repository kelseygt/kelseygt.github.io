window.addEventListener("resize", function (event) {
    let w = window.innerWidth;
    let size = document.getElementById("skills-list")
    if (w < 400) {
        size.style.fontSize = "18px"
    } else if (w >= 400) {
        size.style.fontSize = "20px"
    }
})