window.addEventListener("keydown", function (e) {
  //   console.log(e.keyCode);
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.drum-box[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  function removeTransition(e) {
    console.log("hello");
    if (e.propertyName !== "transform") {
      return;
    }
    this.classList.remove("playing");
  }

  const keys = this.document.querySelectorAll(".drum-box");
  keys.forEach((ele) =>
    ele.addEventListener("transitionend", removeTransition)
  );
});
