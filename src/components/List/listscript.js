let selected = {};
let randomizer = null;
let complete = [];

export const initList = function() {
  complete = document.getElementsByClassName('complete');
  console.log(complete)
  selected = complete[Math.floor(Math.random()*complete.length)];
  randomlyChange();
  randomizer = setInterval(randomlyChange, 5000);
  for(let i = 0; i < complete.length; i++) {
    complete[i].addEventListener("click", function(){
      clearInterval(randomizer);
      selected = complete[i];
      changeContent();
    });
  }
}

function randomlyChange() {
  selected = complete[Math.floor(Math.random()*complete.length)];
  changeContent();
}

function changeContent() {
  let title = selected.innerHTML;
  let id = selected.id;
  let image = selected.getAttribute('data-content');
  document.getElementById('listImage').src = image;
  document.getElementById('listContent').innerHTML =
    document.getElementsByClassName(id)[0].innerHTML;
}
