
/* start setting box */

// toggle setting icon
document.querySelector(".setting-icon").onclick = function ()  {

document.querySelector(".setting-box").classList.toggle("open");

};

// switch theme color
const colorsLi = document.querySelectorAll(".change-color .colors li");
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    });

});

/* end setting box */

/* start toggle menu links */
let menuBtn = document.querySelector(".menu-toggle");
let menuLinks = document.querySelector(".links");

menuBtn.onclick = function() {
    menuLinks.classList.toggle("openmenu");
};

/* end toggle menu links */


/* start change images */

let homePage = document.querySelector(".home-page");
let homeImages = ["home1.jpg", "home2.jpg", "home3.jpg"];
let i = 0;
setInterval(() => {
    if (i < homeImages.length) {
    homePage.style.backgroundImage = "url('images/"+homeImages[i]+"')";
    i++;} else {
        i = 0;}
}, 5000);

/* end change images */


/* start sroll skill section */
let skills = document.querySelector("#skills");

window.onscroll = function () {
    if (this.pageYOffset > ((skills.offsetTop + skills.offsetHeight) - this.innerHeight)) {
        let allSkills = document.querySelectorAll("#skills .sk .progress span");
        allSkills.forEach (skill => {
            skill.style.width = skill.dataset.progress;
        });
    } 
};

/* end sroll skill section */