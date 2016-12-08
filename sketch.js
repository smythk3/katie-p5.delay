//DELAY: new p5.Delay();
//osc = new p5.Oscillator();
//parameters in delay are:
//source [variable name]
//delay time (in seconds) maximum delay can be 0.99999999999...
//feedback (0-1)
//filter freq
//process()
//delay.process([source], [feedback time 0-0.99], [filter freq]);

var sound;
var myDelay;
var env;
var sliderVol;

function setup() {
  createCanvas(500,500);
  
  // [volume 0-1], [ramp time (amount of time it takes to go from one value to another (usually in miliseconds))], 
  //[time from now]
  masterVolume(1);
  
  sliderVol = createSlider(0, 1, 0.6, 0.01);
  sliderVol.position(10,10);
  
  sound = new p5.Oscillator();
  sound.setType('sine');
  
  env = new p5.Env();
  env.setADSR(0.05, 0.05, 0.8, 0.2);
  env.setRange(1, 0);
  
  delay = new p5.Delay();
  delay.process(sound, 0.2, 0.6);
  
}

function draw() {
  
  masterVolume(sliderVol.value(), 0.1);
  
  //getMasterVolume();
  
}

function mousePressed() {
  
sound.freq(220);
sound.amp(env);
sound.start();
env.play();
}