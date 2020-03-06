//GOT js file
//lightbox is like an overlay (for reference)
//div with css to show the lightbox
(() => {

//variables at the top -> elements on the page we need to work with
let sigilButtons = document.querySelectorAll('.sigilContainer'),
    lightBox = document.querySelector(".lightBox"),
    gotVideo = document.querySelector(".lightBoxVideo"),
    //can also write this as gotVideo = lightBox.querySelector("video")
    lightBoxClose = lightBox.querySelector(".lightBoxClose");

//events go in the middle
  function showLightBox() {
  // pop open a light box here and show some content
  //start with a video
  //debugger;

  //need to get the class name from element so we can match the video source
  // $ lets you do it right in line and return back a value
  //split - splits the name into two pieces as they all start with House- name of video
  let targetName = this.className.split(" ")[1] //this will strip out the house className
  //makes it upper case to match video clip
  let targetSource = targetName.charAt(0).toUpperCase() + targetName.slice(1);

  let newVideoSource = `video/House-${targetSource}.mp4`;
  //debugger;


    lightBox.classList.add("show-lightBox");

//plays video as soon as you open the view port
    gotVideo.src = newVideoSource
    gotVideo.load();
    gotVideo.play();
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightBox");

//makes the video pause when ou exit the view port
    gotVideo.pause();
    gotVideo.currentTime = 0;
  }

// add a click event to the sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox))

//add an event handler for the lightbox close sigilButton
  lightBoxClose.addEventListener("click", hideLightBox);



})();
