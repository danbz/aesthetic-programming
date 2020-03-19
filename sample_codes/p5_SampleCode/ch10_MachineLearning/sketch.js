/**
 * @Author: siusoon
 * @Date:   2020-03-13T21:35:06+01:00
 * @Last modified by:   siusoon
 * @Last modified time: 2020-03-13T23:23:28+01:00
 */



//LSTM Generator example with p5.js

let charRNN;
let textInput;
let lengthSlider;
let tempSlider;
let button;
let runningInference = false;
let status;

let lengthText;
let temperatureText;

let resultText;


function setup() {

  // Create the LSTM Generator passing it the model directory
  charRNN = ml5.charRNN('./models/AP_book/', modelReady);

  // Grab the DOM elements
  textInput = document.querySelector('#textInput');
  lengthSlider = document.querySelector('#lenSlider');
  tempSlider = document.querySelector('#tempSlider');
  button = document.querySelector('#generate');
  lengthText = document.querySelector('#length');
  temperatureText = document.querySelector('#temperature');
  status = document.querySelector('#status')
  resultText = document.querySelector('#result')

  // DOM element events
  button.addEventListener('click', generate);
  lengthSlider.addEventListener('change',updateSliders);
  tempSlider.addEventListener('change',updateSliders);
}

setup();

// Update the slider values
function updateSliders() {
  lengthText.innerHTML = lengthSlider.value;
  temperatureText.innerHTML = tempSlider.value;
}

function modelReady() {
  status.innerHTML = 'Model Loaded';
}

// Generate new text
function generate() {
  // prevent starting inference if we've already started another instance
  // TODO: is there better JS way of doing this?
 if(!runningInference) {
    runningInference = true;

    // Update the status log
    status.innerHTML = 'Generating...';

    // Grab the original text
    let original = textInput.value;
    // Make it to lower case
    let txt = original.toLowerCase();

    // Check if there's something to send
    if (txt.length > 0) {
      // This is what the LSTM generator needs
      // Seed text, temperature, length to outputs
      // TODO: What are the defaults?
      let data = {
        seed: txt,
        temperature: tempSlider.value,
        length: lengthSlider.value
      };

      // Generate text with the charRNN
      charRNN.generate(data, gotData);

      // When it's done
      function gotData(err, result) {
        // Update the status log
        status.innerHTML = 'Ready!';
        resultText.innerHTML = txt + result.sample;
        runningInference = false;
      }
    }
  }
}
