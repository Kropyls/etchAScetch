const container = document.getElementById('container')
let boxes = []
for(i=0;i<256;i++){
  let div = document.createElement('div');
  div.id = "d"+i;
  div.className = 'eas-boxes'
  boxes[i] = div;
  container.appendChild(boxes[i]);
  

  boxes[i].addEventListener("mouseover", function(e){
    e.target.style.backgroundColor = "crimson";
  });
  
}