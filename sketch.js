var song;
var sliderVolume;
var sliderRate;
var sliderPan;
let playing = false;

function setup() {
  song = loadSound("assets/Koltrast.mp3", loaded);
  song.playMode("restart");
  amp = new p5.Amplitude();

  // sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);
  // sliderPan = createSlider(0, 1, 0.5, 0.01);
}

function togglePlaying() {
  if (!playing) {
    song.loop();
    button.html("stop");
    playing = true;
  } else {
    playing = false;
    song.stop();
    button.html("start");
  }
}

function loaded() {
  button = createButton("start");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(200);

  let vol = amp.getLevel();
  // let diam = map(vol, 0, 0.3, 10, 200);
  // let bird = document.getElementById("bird");
  // bird.style.fontWeight = vol * 6000;
  document.documentElement.style.setProperty("--YTLC", vol * 9000);
  document.documentElement.style.setProperty("--YTAS", vol * 9000);
  document.documentElement.style.setProperty("--GRAD", vol * 100);

  // document.documentElement.style.setProperty("--color", "green");

  // fill(
  //   sliderRate.value() * 50,
  //   sliderRate.value() * 100,
  //   sliderRate.value() * 100
  // );
  // ellipse(width / 2, height / 2, diam * 5, diam * 5);
  song.rate(sliderRate.value());
}
