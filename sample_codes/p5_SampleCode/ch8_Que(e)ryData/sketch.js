/*
 Fetching other domain images via Google image search API has CORS problem (Cross-Origin Resource Sharing):
- proper fixing should be done at the web server side but for testing purpose we can install browser add-ons to by-pass the errors, keyword search: CORS, or add a proxy in front of the image URL
  - firefox ver72.02: Access Control-Allow-Origin - Unblock: https://addons.mozilla.org/en-US/firefox/addon/cors-unblock/
  - Chrome ver79: CORS Unblock https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino
  - we can also use CORS proxy: see line 45
- credit: Image Lines in Processing by Anna the Crow https://www.openprocessing.org/sketch/120964
- full url here: https://www.googleapis.com/customsearch/v1?key=???&cx=????&imgSize=small&q=warhol+flowers
*/
let url = "https://www.googleapis.com/customsearch/v1?";
var apikey = "INPUT YOUR OWN KEY";  //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
var engineID = "INPUT YOUR OWN"; //https://cse.google.com/all  | create search engine, then get the searchengine ID - make sure image is on
let query = "warhol+flowers";  //search keywords
let searchType = "image";
let imgSize ="medium"; //check here: https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
let request; //full API

let getImg;
let loc;
let img_x, img_y;
let imgCORSproxy = "https://cors-anywhere.herokuapp.com/"; //check top comment
let cv;

function setup() {
	cv = createCanvas(400,450);
	centerCanvas();
	background(235);
	frameRate(10);
	fetchImage();
}

function centerCanvas() {
	let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cv.position(x, y);
}

function fetchImage() {
	request = url + "key=" + apikey + "&cx=" + engineID + "&imgSize=" + imgSize + "&q=" + query + "&searchType=" + searchType;
	console.log(request);
	loadJSON(request, gotData); //this is the key syntax and line of code to make a query request and get a query response
}

function gotData(data) {
	getImg = imgCORSproxy + data.items[0].link;
	console.log(getImg);
}

function draw() {
  try {	//takes time to get the path of the image from the JSON file via the web API
   loadImage(getImg, img=> { //function(img)
			push();
			let frameBorder = (width-img.width)/2;
			translate(width/2-img.width/2, frameBorder);
			image(img,0,0);
		 //try to uncomment this block if you manage to get the image.
			img.loadPixels();
			img_x = floor(random(0,img.width));
			img_y = floor(random(0,img.height));
			loc = (img_x+img_y * img.width)*4; // The formular to locate the no: x+y*width, indicating which pixel of the image in a grid (and each pixel array holds red, green, blue and alpha values - 4) can see more here: https://www.youtube.com/watch?v=nMUMZ5YRxHI
			stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));  //rgb values
			line(img_x,1,img_x,height-frameBorder*2);
			pop();
   });
 }catch(error) {
    console.error(error);
 }
}
