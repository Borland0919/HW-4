export const formSection = document.getElementById("form-section");
export const tableSection = document.getElementById("table-section");
export const buttonAdd = document.querySelector(".addEmployee");
export const buttonViewAll = document.querySelector(".allEmployees");

export function event(){
    buttonAdd.addEventListener("click", function(){
        formSection.style.display = 'flex';
        tableSection.style.display = 'none';
        buttonAdd.style.background = 'lightskyblue'
        buttonViewAll.style.background = 'palegreen';
    
     })
     buttonViewAll.addEventListener("click", function(){
        tableSection.style.display = 'block';
        formSection.style.display = 'none';
        buttonViewAll.style.background = 'lightskyblue';
        buttonAdd.style.background = 'palegreen'
     })
}
