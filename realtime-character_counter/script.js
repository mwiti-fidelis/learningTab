const charCount = document.getElementById("char-count");
const textInput = document.querySelector("#text-input");

//Add an en=vent listener to determine every time the user inputs text
textInput.addEventListener("input", ()=>{
//Adding a logic to trim the text that exceeds 50 characters and only input the initial 50 characters when the user pastes content
  if (textInput.value.length > 50){
    textInput.value = textInput.value.substring(0, 50);
  }
  let charLength = textInput.value.length
  charCount.textContent = `Character Count: ${charLength}/50`;
  //color toggle when the character count reaches 50
  if(charLength >= 50){
    charCount.style.color = "red";
  }else{
    charCount.style.color = "black";
  }
});
