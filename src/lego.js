const detailsImage = document.querySelector(".details-image-head");
const detailsTitle = document.querySelector(".details-title-head");
const anchorElements = document.querySelectorAll(".class-anchor");
const mainElement = document.querySelector("main");
const hiddenButonX = document.querySelector("#button-hidden-x");
const HIDDEN = "hidden";

function showDetails(){
    mainElement.classList.remove(HIDDEN);
}

function addDetails(){
    mainElement.classList.add(HIDDEN);
}

function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}

for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}

hiddenButonX.addEventListener("click",addDetails);