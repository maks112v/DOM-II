// Your code goes here

const navBrand = document.querySelector('.logo-heading');

navBrand.addEventListener('mouseover', e => {
  navBrand.textContent = "You are on the home page";
  navBrand.style.color = "red";
});

navBrand.addEventListener('mouseleave', e => {
  navBrand.textContent = "Repetitive Bus";
  navBrand.style.color = "black";
});

const navSelect = document.querySelector('nav');
navSelect.addEventListener('click', e => {
  console.log(`Stop Clicking the Nav...`);
  // console.error("The nav doesn't work");
  e.preventDefault();
});

const mainText = document.querySelector("h2");

mainText.addEventListener('click', e => {
  mainText.textContent = `Welcome To The Repetitive Bus!`;
})

const pTags =  document.querySelectorAll('p');

const containerBtn = document.querySelector('body');

containerBtn.addEventListener('dblclick', e => {
  mainText.textContent = `Welcome To Fun Bus!`;
  pTags.forEach(el => el.contentEditable = true);
  alert("You can now edit text");
})

window.addEventListener('keypress', e => {
  if(e.key == "g"){
    containerBtn.style.color = "green";
  }
  if(e.key == "d"){
    containerBtn.style.color = "black";
  }
  if(e.key == "b"){
    containerBtn.style.color = "blue";
  }
  if(e.key == "r"){
    containerBtn.style.color = "red";
  }
})

window.onbeforeunload = () => {
  return "Are You Sure?";
}



const inputSelect = document.querySelector('input');

inputSelect.addEventListener('select', e => {
  console.log("text selected")
})

inputSelect.addEventListener('focus', e => {
  console.log('You can start typing');
})