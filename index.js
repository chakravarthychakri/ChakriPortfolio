const themeBtn = document.getElementById("theme-toggle");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});