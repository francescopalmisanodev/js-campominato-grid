const gridContainer=document.querySelector(".container");
const btnlvl=document.querySelector(".btnLvl");
const lvl=document.getElementById("lvl");
let size=0;

btnlvl.addEventListener("click", function() {
    let boxfill="";
    switch (lvl.value) {
        case "Hard":
            size=49;
            break;
        case "Medium":
            size=81;   
            break;  
        case "Easy":
            size=100;   
            break;
    }
    for (let i = 0; i < size; i++) {
        boxfill+=`<div class="box">${i+1}</div>`;
    }
    gridContainer.innerHTML=boxfill;
});

