const container = document.getElementById('container');
gridMaker(container, 16);


function gridMaker(container, numPerSide){
  container.style.gridTemplateColumns = `repeat(${numPerSide}, 1fr)`;
  let boxes = [];
  numPerSide = numPerSide * numPerSide;
  for(i=0;i<numPerSide;i++){
    let div = document.createElement('div');
    div.id = "d"+i;
    div.className = 'eas-boxes'
    boxes[i] = div;
    container.appendChild(boxes[i]);
    

    boxes[i].addEventListener("mouseover", function(e){
      e.target.style.backgroundColor = "crimson";
    });
    
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',function(){
  removeAllChildNodes(container);
  function number(){
    //fix decimal catching
    let num = parseInt(prompt('Please enter desired squares per side of the etch-a-sketch.'));
    if((num > 0) && (num < 101) && (num%1)==0)
      return num;
    else{
      alert('unexpected input, try again');
      return number();
    }
  }
  gridMaker(container, number())
})
