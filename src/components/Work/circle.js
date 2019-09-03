let i = 5;
let rounds = 0;
let interval, timeout;

export const initCircle = function() {
  const fields = document.getElementsByClassName('itemDot');
  const container = document.getElementsByClassName('dotCircle')[0];
  const width = container.offsetWidth;
  const radius = width /2.5

  const height = container.offsetHeight;
  let angle = 0;
  const step = (2*Math.PI) / fields.length;
  for (let i = 0; i < fields.length; i++) {
    let item = fields[i];
    const x = (Math.round(width/2 + radius * Math.cos(angle) - item.offsetWidth/2));
    const y = (Math.round(height/2 + radius * Math.sin(angle) - item.offsetHeight/2));

    item.style.left = x + 'px';
    item.style.top = y + 'px';
    angle += step;
  }
  if(timeout) {
    clearTimeout(timeout);
  }
  if(interval) {
    clearInterval(interval);
  }
  autoSpin();
}


export const handleClick = function(event) {

  let dataTab= event.currentTarget.getAttribute('data-tab');
  let previousDataTab = document.getElementsByClassName('itemDot active')[0].getAttribute('data-tab');
  document.getElementsByClassName('itemDot active')[0].classList.remove('active');
	event.currentTarget.classList.add('active');
  document.getElementsByClassName('CirItem active')[0].classList.remove('active');
  document.getElementsByClassName('CirItem' + dataTab)[0].classList.add('active');
  document.getElementsByClassName('text active')[0].classList.remove('active');
  document.getElementsByClassName('text' + dataTab)[0].classList.add('active');
	i=dataTab;
  const rotate = dataTab - previousDataTab;
  if(Math.abs(rotate) >= 3 ) {
    if(rotate < 0) {
      rounds -= 1;
    }
    else {
      rounds += 1;
    }
  }

  const dotCircles = document.getElementsByClassName('dotCircle');
  for (let item of dotCircles) {
    item.style.transform = "rotate("+(360-(i-1)*60 + 360*rounds)+"deg)";
  }

  const itemDots = document.getElementsByClassName('itemDot');
  for (let item of itemDots) {
    item.style.transform = "rotate("+((i-1)*60 - 360*rounds)+"deg)";
  }
  if(timeout) {
    clearTimeout(timeout);
  }
  if(interval) {
    clearInterval(interval);
  }
  timeout = setTimeout(autoSpin(), 10000);
};

const autoSpin = function () {
  interval = setInterval(function() {
    let dataTab = document.getElementsByClassName('itemDot active')[0].getAttribute('data-tab');
    if(dataTab < 1 || i < 1) {
      dataTab = 6;
      i = 6;
      rounds += 1;
    }

    document.getElementsByClassName('itemDot active')[0].classList.remove('active');
    document.querySelectorAll('[data-tab="'+i+'"]')[0].classList.add('active');
    document.getElementsByClassName('CirItem active')[0].classList.remove('active');
    document.getElementsByClassName('CirItem' + i)[0].classList.add('active');
    document.getElementsByClassName('text active')[0].classList.remove('active');
    document.getElementsByClassName('text' + i)[0].classList.add('active');
    i--;

    const dotCircles = document.getElementsByClassName('dotCircle');
    for (let item of dotCircles) {
      item.style.transform = "rotate("+(360-(i)*60 + 360*rounds)+"deg)";
    }

    const itemDots = document.getElementsByClassName('itemDot');
    for (let item of itemDots) {
      item.style.transform = "rotate("+((i)*60 - 360*rounds)+"deg)";
    }

    console.log(rounds)

  }, 5000);
}
