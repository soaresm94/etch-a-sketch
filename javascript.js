// function createGrid(){
//     let gridRowSquares = prompt("what's the number of row/column squares?");
//     for(let i = 0; i < gridRowSquares**2; i++){
//         const divContainer = document.querySelector("#container");
//         const div = document.createElement("div");
//             div.classList.add("grid-square");
//         divContainer.appendChild(div);
//     }};

    
let gridRowSquares = 5;

for(let i = 0; i < gridRowSquares**2; i++){
        const divContainer = document.querySelector("#container");
        const div = document.createElement("div");
            div.classList.add("grid-square");
        divContainer.appendChild(div);
};