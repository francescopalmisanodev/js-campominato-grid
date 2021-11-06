const gridContainer=document.querySelector(".container");
const btnlvl=document.querySelector(".btnLvl");
const lvl=document.getElementById("lvl");
let size=0;
btnlvl.addEventListener("click", function() {
    switch (lvl) {
        case "Hard":
            size=49;
            console.log(size);
            break;
        case "Medium":
            size=81;   
            break;  
        case "Easy":
            size=100;   
            break;
    }
});

for (let i = 0; i < lvl; i++) {
    
}