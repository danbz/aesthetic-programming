/*
- There is Cross-Origin Resource Sharing (CORS) issue with the bigger image, so here we are using thumbnailLink instead.
- credit: Image Lines in Processing by Anna the Crow https://www.openprocessing.org/sketch/120964
- full url here: https://www.googleapis.com/customsearch/v1?key=???&cx=????&imgSize=small&q=warhol+flowers
*/
let url = "https://www.googleapis.com/customsearch/v1?";
let apikey = "AIzaSyBRE6L4ohm4c2rAxZqpbFSUbSc8w6ZOg-w";//"INPUT YOUR OWN KEY";  //register API key here: https://developers.google.com/custom-search/json-api/v1/overview
let engineID = "012341178072093258148:xebpi6c3ibg";//"INPUT YOUR OWN"; //https://cse.google.com/all  | create search engine, then get the searchengine ID - make sure image is on
let query = "warhol+flowers";  //search keywords
let searchType = "image";
let imgSize ="medium"; //check here: https://developers.google.com/custom-search/json-api/v1/reference/cse/list#parameters
let request; //full API

let getImg;
let loc;
let img_x, img_y;
let frameBorder = 25;  //each side
let imgLoaded = false;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	frameRate(10);
	fetchImage();
}

function fetchImage() {
	request = url + "key=" + apikey + "&cx=" + engineID + "&imgSize=" + imgSize + "&q=" + query + "&searchType=" + searchType;
	console.log(request);
	loadJSON(request, gotData); //this is the key syntax and line of code to make a query request and get a query response
}

function gotData(data) {
	getImg = data.items[0].image.thumbnailLink;
	console.log(getImg);
}

function draw() {
	if (getImg){	//takes time to retrieve the API data
		loadImage(getImg, img=> { //callback function
			//frame + image
			push();
			translate(width/2-img.width-frameBorder, height/2-img.height-frameBorder);
			scale(2);
			if (!imgLoaded) {
				noStroke();
				fill(220);
				rect(0,0,img.width+frameBorder*2,img.height+frameBorder*2);
				image(img,frameBorder,frameBorder);
				imgLoaded = true;
			}else{
				//draw lines
				img.loadPixels();
				img_x = floor(random(0,img.width));
				img_y = floor(random(0,img.height));
				loc = (img_x+img_y * img.width)*4; // The formular to locate the no: x+y*width, indicating which pixel of the image in a grid (and each pixel array holds red, green, blue and alpha values - 4) can see more here: https://www.youtube.com/watch?v=nMUMZ5YRxHI
				strokeWeight(0.7);
				stroke(color(img.pixels[loc],img.pixels[loc + 1], img.pixels[loc+2]));  //rgb values
				line(frameBorder+img_x,frameBorder+img_y,frameBorder+img_x,frameBorder+img.height);
			}
			pop();
		});
	}
}
