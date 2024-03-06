  const divContainer = document.querySelector("#container");
  const divBtnContainer = document.querySelector("#btn-container");


  const btn = document.createElement("button");
  divBtnContainer.appendChild(btn);
  btn.textContent = "START";


  function getRandomColor(){
    let x = Math.floor((Math.random() * 255));
    return x;
  }
  


  function createGrid(){
      while(divContainer.hasChildNodes()){
          divContainer.removeChild(divContainer.firstChild);
      };
      let gridRowSquares = prompt("What's the number of squares per side for the new grid?");
      if((gridRowSquares>=1)&&(gridRowSquares<=100)){
          for(let i = 0; i < gridRowSquares**2; i++){
              const div = document.createElement("div");
              div.classList.add("grid-square");
              div.style.width = `${500/gridRowSquares}px`;
              div.style.height = `${500/gridRowSquares}px`;
              div.addEventListener("mouseover",()=>{
                  div.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
              });   
              divContainer.appendChild(div);
          };
      }else{
          alert("Choose a number from 1 to 100");
      }};

  btn.addEventListener("click",createGrid);

