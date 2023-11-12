function hide(object,trigger) {
    const Btn = document.querySelector(trigger);
    const Block = document.querySelector(object);
    Btn.addEventListener("click", function() {Block.classList.toggle("hide");})
    }
hide(".menu__list", ".menu__btn")
const portBtns = document.getElementsByClassName("portfolio__btn")
Array.from(portBtns).forEach(portBtn => {
  portBtn.addEventListener("click", function() {
    document.querySelector("#B").style.background = "#FFF";
    document.getElementById("portfolio").classList.toggle("hide");
    document.getElementById("info").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide");
    document.querySelector(".containerPort").classList.toggle("hide");
    if (!(Array.from(document.querySelector(".menu__list").classList).includes('hide'))){
        document.querySelector(".menu__list").classList.toggle("hide");
        };
    });
});
const infoBtns = document.getElementsByClassName("info__btn")
Array.from(infoBtns).forEach(infoBtn => {
  infoBtn.addEventListener("click", function() {
    document.querySelector("#B").style.background = "#000";
    document.getElementById("portfolio").classList.toggle("hide");
    document.getElementById("info").classList.toggle("hide");
    document.querySelector(".container").classList.toggle("hide");
    document.querySelector(".containerPort").classList.toggle("hide");
    });
});


