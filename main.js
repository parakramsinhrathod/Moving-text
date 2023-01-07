/*
// this is main js
const enhance  = id => {
    const element = document.querySelector(id)
    text = element.innerText.split('')
    console.log(text)
    
    element.innerText  = ''

    text.forEach(letter  => {
        const span = document.createElement('span')
        span.className = 'letter'
        span.innerText  = letter
        element.appendChild(span)
    });
   
}

enhance('#channel-link')

*/


// js from yt copy paste


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
  const element = document.getElementById(id) 
        text = element.innerText.split("");
  
  element.innerText = "";
  
  text.forEach((value, index) => {
    const outer = document.createElement("span");
    
    outer.className = "outer";
    
    const inner = document.createElement("span");
    
    inner.className = "inner";
    
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;
    
    const letter = document.createElement("span");
    
    letter.className = "letter";
    
    letter.innerText = value;
    
    letter.style.animationDelay = `${index * 1000 }ms`;
    
    inner.appendChild(letter);    
    
    outer.appendChild(inner);    
    
    element.appendChild(outer);
  });
}

enhance("channel-link");
enhance("email");
enhance("github");

