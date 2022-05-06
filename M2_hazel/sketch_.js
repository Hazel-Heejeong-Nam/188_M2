let handpose;
var video;
let hands = [];

let img1;
let img2;
let img3;
let img4;
let img5;

function preload() {
    img1 = loadImage('emoji1.jpg');
    img2 = loadImage('emoji2.jpg');
    img3 = loadImage('emoji3.jpg');
    img4 = loadImage('emoji4.jpg');
    img5 = loadImage('emoji5.jpg');
}

function setup() {
    var canvas = createCanvas(197,167);
    canvas.parent('camerabox')
    video = createCapture(VIDEO);
    video.size(197, 167);

    handpose = ml5.handpose(video, modelReady);

    // This sets up an event that fills the global variable "predictions"
    // with an array every time new hand poses are detected
    handpose.on("hand", results => {
    hands = results;
    });

    // Hide the video element, and just show the canvas
    video.hide();
}

function modelReady() {
    console.log("Model ready!");
}

function draw() {
    console.log('draw 들어옴')
    image(video, 0, 0, 197, 167);
    image(img1, 30, 30 ,20, 20);
    image(img2, 147, 30, 20, 20);
    image(img3, 90, 70, 20, 20);
    image(img4, 30, 117, 20, 20);
    image(img5, 147, 117, 20, 20);

    if (hands.length>0) {
    let hand = hands[0]
    let index = hand.annotations.indexFinger;
    let indexTip = index[3];
    let xval = indexTip[0]*0.35;
    let yval = indexTip[1]*0.35;

    if (xval>30 && xval<50) {
        if(yval>30 && yval<50){
            console.log('emoji1')
            document.getElementById("text-display").innerText += '😆'
        }
        if(yval>117 && yval<137){
            console.log('emoji4')
            document.getElementById("text-display").innerText += '😧'
        }
    }
    if (xval>147 && xval<167) {
        if(yval>30 && yval<50){
            console.log('emoji2')
            document.getElementById("text-display").innerText += '😐'
        }
        if(yval>117 && yval<137){
            console.log('emoji5')
            document.getElementById("text-display").innerText += '🤣'
        }
    }
    if (xval>90 && xval<110 && yval>70 && yval<90) {
        console.log('emoji3')
        document.getElementById("text-display").innerText += '😖'
    }

    push()
    fill(0,0,255);
    ellipse(xval,yval,10,10)
    pop()    
    }
}

