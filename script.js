/* Declare variables below to save the different sections (divs) of your story*/
let start=document.querySelector(".startScreen");
let noThanks=document.querySelector(".noThanksScreen");
let fineButReturnIt=document.querySelector(".fineButReturnItScreen");
let dontTalkToMe=document.querySelector(".dontTalkToMeScreen");
let retry=document.querySelector(".retry");
let end1Button=document.querySelector(".end1Button");
let end2Button=document.querySelector(".end2Button");
let end3Button=document.querySelector(".end3Button");
let startButton = document.querySelector(".startButton");
let storyOpening = document.querySelector(".story-opening");
let noThanksButton = document.querySelector(".noThanksButton");
let fineButReturnItButton = document.querySelector(".fineButReturnItButton");
let dontTalkToMeButton = document.querySelector(".dontTalkToMeButton");
let noThanksEnd = document.querySelector(".noThanksEnd");
let fineButReturnItEnd =document.querySelector(".fineButReturnItEnd");
let dontTalkToMeEnd = document.querySelector(".dontTalkToMeEnd");
// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!


startButton.onclick=function(){
    start.style.display="block";
    storyOpening.style.display="none";
    startButton.style.display="none";
    noThanksButton.style.display="block";
    fineButReturnItButton.style.display="block";
    dontTalkToMeButton.style.display="block";
}

noThanksButton.onclick=function(){
    start.style.display="none";
    storyOpening.style.display="none";
    startButton.style.display="none";
    noThanksButton.style.display="none";
    fineButReturnItButton.style.display="none";
    dontTalkToMeButton.style.display="none";
    noThanks.style.display="block";
    end1Button.style.display="block"
}

end1Button.onclick=function(){
  noThanksEnd.style.display="block";
  noThanks.style.display="none";
  end1Button.style.display="none";
  retry.style.display="block"
}

retry.onclick=function(){
  storyOpening.style.display="block";
  startButton.style.display="block";
  noThanksEnd.style.display="none";
  retry.style.display="none";
  fineButReturnItEnd.style.display="none";
  dontTalkToMeEnd.style.display="none";
}

fineButReturnItButton.onclick=function(){
    start.style.display="none";
    storyOpening.style.display="none";
    startButton.style.display="none";
    noThanksButton.style.display="none";
    fineButReturnItButton.style.display="none";
    dontTalkToMeButton.style.display="none";
    fineButReturnIt.style.display="block";
    end2Button.style.display="block";
}

end2Button.onclick=function(){
  fineButReturnIt.style.display="none";
  end2Button.style.display="none";
  fineButReturnItEnd.style.display="block";
  retry.style.display="block"
}

dontTalkToMeButton.onclick=function(){
    start.style.display="none";
    storyOpening.style.display="none";
    startButton.style.display="none";
    dontTalkToMeButton.style.display="none";
    fineButReturnItButton.style.display="none";
    noThanksButton.style.display="none";
    dontTalkToMeButton.style.display="none";
    dontTalkToMe.style.display="block";
    end3Button.style.display="block";
}

end3Button.onclick=function(){
  dontTalkToMe.style.display="none";
  end3Button.style.display="none";
  dontTalkToMeEnd.style.display="block";
  retry.style.display="block"
}