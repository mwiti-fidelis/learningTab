
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM is loaded.", mymenu);
});


const bodyEl = document.querySelector("body");
const kamtuu = document.getElementById("kamtuu");
console.log(kamtuu);

let isBgColorGrey = true;

function toggleBgColor() {
  bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
  isBgColorGrey = !isBgColorGrey;
}

kamtuu.addEventListener("click", toggleBgColor);

const para = document.getElementById("para");
const kitu = document.getElementById("kamtuu");

para.addEventListener("click", () => {
  kitu.removeEventListener("click", toggleBgColor);
});


const toggleMenu = document.getElementById("toggleMenu");
const mymenu = document.getElementById("menu");

toggleMenu.addEventListener("click", () => mymenu.classList.toggle("show"));



const rect = document.getElementById("gaifafaa");

let position = 0;

function update() {
  // Move the rectangle 2px to the top
  rect.style.left = position + "px";
  position += 2;

  if (position > window.innerWidth) {
    // Move the rectangle just outside the left side of the screen
    position = -rect.offsetWidth;
  }
}

function animate() {
  update();

  //request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);


const footer = document.querySelector("footer");
const animation = footer.animate(
  [{ transform: "translateX(0px)" }, { transform: "translateX(500px)" }],
  {
    duration: 8000,// makes animation lasts 2 seconds
    iterations: Infinity, // loops indefinitely
    direction: "alternate", // moves back and forth
    easing: "ease-in-out" // smooth easing
  }
);


const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const reverseBtn = document.querySelector("#reverseBtn");
const squareAnimation = square.animate([{transform: "translatex(0px)"}, {transform: "translatex(600px)"}], {
  duration: 3000, //we will not iterate infinitely because it will disable the functionalities of the buttons
  // iterations: Infinity,
  direction: "alternate",
  easing: "ease-in-out"
  }
);
//This logs a message to the console immediately the annimation concludes
squareAnimation.onfinish = ()=>{
  console.log("Animation finished");
}
//This function starts paly and also resumes play of the animation efter the pause button is clicked on 
playBtn.addEventListener("click", ()=>{
  squareAnimation.play();
  console.log("You have started the animation.");
});
//This function pauses the animation immediately the pause button is pressed
pauseBtn.addEventListener("click", ()=>{
  squareAnimation.pause();
  console.log("You have paused the animation.")
})
//This reverses the flow of the animation to its actual opposite
reverseBtn.addEventListener("click", ()=>{
  squareAnimation.reverse();
  console.log("You have reversed the animation.")
})


const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');
console.log(ctx);
//set the background color of the drawing
ctx.fillStyle = "lime";

//Draw a rectangle
ctx.fillRect(1,1,200,200);

ctx.font = "30px Arial";
ctx.fillStyle = "crimson";
ctx.fillText("Hello HTML Canvas", 1, 50);

//modal and non-modal dialogues
const modalDialogue = document.getElementById("modalDialogue");
const openDialogue = document.getElementById("openDialogue");
const closeDialogue = document.getElementById("closeDialogue");
//Add event Listener to open the dialogue by clicking the open dialogue/modal dialogue button
openDialogue.addEventListener("click", ()=>{
  modalDialogue.showModal();
});
//Add event Listener to Close the dialogue by clicking the close/yes button
closeDialogue.addEventListener("click", ()=>{
  modalDialogue.close();
})
//NON-MODAL DIALOGUES
const nonModalDialogue = document.getElementById("nonModalDialogue");
const openNonModalDialogue = document.getElementById("openNonModalDialogue");
const closeNonModalDialogue = document.getElementById("closeNonModalDialogue");
openNonModalDialogue.addEventListener("click", ()=>{
  nonModalDialogue.show();
});
closeNonModalDialogue.addEventListener("click", ()=>{
  nonModalDialogue.close();
});
