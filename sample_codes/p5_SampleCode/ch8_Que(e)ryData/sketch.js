/*
 Fetching and visualizing images from Google image search API with CORS problem (Cross-Origin Resource Sharing) on displaying http images:
- proper fixing should be done at the web server side but for testing purpose we can install browser add-ons to by-pass the errors
- firefox: https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/
- Chrome: Allow-Control-Allow-Original:* (https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
- credit: Image Lines in Processing by Anna the Crow https://www.openprocessing.org/sketch/120964
- full url here: https://www.googleapis.com/customsearch/v1?key=???&cx=????&imgSize=small&q=warhol+flowers
*/
var url = "https://www.googleapis.com/customsearch/v1?";
var apikey = "AIzaSyBRE6L4ohm4c2rAxZqpbFSUbSc8w6ZOg-w";//"INPUT YOUR OWN KEY";  //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
var engineID = "012341178072093258148:xebpi6c3ibg";// "INPUT YOUR OWN"; //https://cse.google.com/all  | create search engine, then get the searchengine ID - make sure image is on
var query = "warhol+flowers";  //search keywords
var searchType = "image";
var imgSize ="medium"; //check here: https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
var request; //full API

var img;
var getImg;
var loc;
var img_x, img_y;
var cv;

function setup() {
	cv = createCanvas(500,450);
	centerCanvas();
	background(200,200);
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
	getImg = data.items[0].link;
	console.log(getImg);

}

function draw() {
  try {	//takes time to get the path of the image from the JSON file via the web API
 		loadImage(getImg, img=> { //function(img)
			push();
			translate(width/2-img.width/2, 0);
			image(img,0,0);
		 //try to uncomment this block if you manage to get the image.
			img.loadPixels();
			img_x = floor(random(0,img.width));
			img_y = floor(random(0,img.height));
			loc = (img_x+img_y * img.width)*4; // The formular to locate the no: x+y*width, indicating which pixel of the image in a grid (and each pixel array holds red, green, blue and alpha values - 4) can see more here: https://www.youtube.com/watch?v=nMUMZ5YRxHI
			stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));  //rgb values
			line(img_x,0,img_x,height);
			pop();
  });
 }catch(error) {
    console.error(error);
 }
}
