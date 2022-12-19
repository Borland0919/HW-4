const detailsImage = document.querySelector(".details-image-head");
const detailsTitle = document.querySelector(".details-title-head");
const music = document.querySelector(".music");
const anchorElements = document.querySelectorAll(".class-anchor");
const mainElement = document.querySelector("main");
const hiddenButonX = document.querySelector("#button-hidden-x");
const classSectionHead = document.querySelector(".class-section-head");
const HIDDEN = "hidden";
const isPoint = "is-point";

function showDetails(){
    mainElement.classList.remove(HIDDEN);
    classSectionHead.classList.add(isPoint);
    setTimeout(function(){
        classSectionHead.classList.remove(isPoint);
    })
}

function addDetails(){
    mainElement.classList.add(HIDDEN);
}

function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    music.src = anchor.getAttribute("data-music");
    music.play();
    setTimeout(function(){
       music.pause();
    },100000)
    showDetails();
    
}

for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}

hiddenButonX.addEventListener("click",addDetails);