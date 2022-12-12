const detailsImage = document.querySelector(".details-image-head");
const detailsTitle = document.querySelector(".details-title-head");
const anchorElements = document.querySelectorAll(".class-anchor");

function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
}

for(let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    })
}
