let song;
let sliderVolume;
let sliderRate;
let sliderPan;
let playing = false;

function setup() {
  song = loadSound("assets/Koltrast.mp3");
  song.playMode("restart");
  amp = new p5.Amplitude();

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
}

function togglePlaying() {
  if (!playing) {
    song.loop();
    startButton.innerHTML = "Stop";
    playing = true;
  } else {
    playing = false;
    song.stop();
    startButton.innerHTML = "Start song";
  }
}

startButton = document.getElementById("startButton");
startButton.addEventListener("click", togglePlaying);

function draw() {
  let vol = amp.getLevel();

  // get font property values from the :root custom variables

  document.documentElement.style.setProperty("--YTLC", vol * 9000);
  document.documentElement.style.setProperty("--YTAS", vol * 9000);
  document.documentElement.style.setProperty("--GRAD", vol * 100);

  song.setVolume(sliderVolume.value());
}
