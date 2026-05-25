let circles1, circles2, circles3, fruits, flowers, images, leaves, rects, texts;
let data;
let index = 0;
let size, xpos, ypos;
let fruitSelected, imgSelected, flowerSelected;

let saveButton, mouseButton, newArtButton, clearScreenButton;
let radioBackground, radioFruits, radioFlower, radioImage, radioSize, radioPos;

let img1, img2, img3, img4, img5, img6, img0;
let interFont;

function preload(){
  
  data = loadJSON("assets/palettes.json");
  img1 = loadImage("images/cherry.png");
  img2 = loadImage("images/apple.png");
  img3 = loadImage("images/lotus-red.png");
  img4 = loadImage("images/lotus-yellow.png");
  img5 = loadImage("images/leaves01.png");
  img6 = loadImage("images/leaves02.png");
  img0 = loadImage("images/empty.svg");
  interFont = loadFont("assets/Inter.ttf");
}

function setup() {
  createCanvas(1120, 630).parent('stage');
  rectMode(CENTER);
  preload();

  background(248, 248, 248);

  textAlign(CENTER);
  textFont("Inter");
  textSize(32);
  fill(0);
  text('Start your artwork by selecting options below', 560, 315);
  // text('by selecting options below', width/2, height/2+10, 200, 100);
  
  
  
  radioBackground = createRadio('Background').parent('stage');
  radioBackground.addClass('radiostyle');
  radioBackground.option('1', 'Background particles');
  radioBackground.option('2', 'Background big cirlces');
  radioBackground.selected('Background particle');
  radioBackground.style("width", "180px");
  radioBackground.style("line-height", "2");
  radioBackground.position(10, height+2);
  
  radioFruits = createRadio('Fruits').parent('stage');
  radioFruits.addClass('radiostyle');
  radioFruits.option('1', 'Cherry Image');
  radioFruits.option('2', 'Apple Image');
  radioFruits.option('0', 'No Fruits');
  radioFruits.style("width", "115px");
  radioFruits.style("line-height", "2");
  radioFruits.position(200, height+2);
  
  radioFlower = createRadio('Lotus').parent('stage');
  radioFlower.addClass('radiostyle');
  radioFlower.option('3', 'Lotus in Red');
  radioFlower.option('4', 'Lotus in Yellow');
  radioFlower.option('0', 'No Lotus');
  radioFlower.selected('Lotus in Red');
  radioFlower.style("width", "140px");
  radioFlower.style("line-height", "2");
  radioFlower.position(325, height+2);
  
  radioImage = createRadio('Mandalas').parent('stage');
  radioImage.addClass('radiostyle');
  radioImage.option('5', 'Leaves green');
  radioImage.option('6', 'Leaves yellow');
  radioImage.option('0', 'No Image');
  radioImage.selected('Mandala Brown');
  radioImage.style("width", "120px");
  radioImage.style("line-height", "2");
  radioImage.position(475, height+2);
  
  radioSize = createRadio('Size').parent('stage');
  radioSize.addClass('radiostyle');
  radioSize.option('1', 'Small circles');
  radioSize.option('2', 'Medium circles');
  radioSize.selected('Small');
  radioSize.style("width", "130px");
  radioSize.style("line-height", "2");
  radioSize.position(605, height+2);
  
  radioPos = createRadio('Position').parent('stage');
  radioPos.addClass('radiostyle');
  radioPos.option('1', 'Center composition');
  radioPos.option('2', '  Right composition      ');
  radioPos.option('3', '    Left composition');
  radioPos.selected('Center');
  radioPos.style("width", "160px");
  radioPos.style("line-height", "2");
  radioPos.position(745, height+2);
  
  newArtButton = createButton('New Art').parent('stage');
  newArtButton.addClass('radiostylebutton');
  newArtButton.mousePressed(newArt);
  newArtButton.style("width", "80px");
  newArtButton.style("line-height", "2");
  newArtButton.position(1020, height+10);
  
  saveButton = createButton('save').parent('stage');
  saveButton.addClass('radiostylebutton');
  saveButton.mousePressed(saveFile);
  saveButton.style("width", "80px");
  saveButton.style("line-height", "2");
  saveButton.position(1020, height+56);
}

function saveFile() {
  save('design.jpg');
}


function newArt(){
  
  //CLEANING ARRAYS
  circles1 = [];
  circles2 = [];
  images = [];
  fruits = [];
  flowers = [];
  leaves = [];
  rects = [];
  texts = [];
  
  
  //RANDOM COLORS FROM JSON FILE
  index = floor(random(data.palettes.length));
  let palette = data.palettes[index];
  let hex0 = palette[0];
  let hex1 = palette[1];
  let hex2 = palette[2];
  let hex3 = palette[3];
  let hex4 = palette[4];
  let array = [hex0, hex1, hex2, hex3, hex4];
  
  
  //BACKGROUND COLOR FROM JSON FILE
  background(random(array));
  
  
  // FOR LOOP FOR BACKGROUND CIRCLES
  for (let c = 0; c < 20; c++) {
    let x = random(width);
    let y = random(height);
    let hex = (random(array));
    
    if (radioBackground.value() == '1') {
      r = random(1, 8);
    } else if (radioBackground.value() == '2'){
      r = random(400, 1000);
    }
    
    let circle = new CircleBack(x, y, r, hex);
    circles1.push(circle);
  }  

    // FOR LOOP FOR CIRCLES
    for (let d = 0; d < 30; d++) {
      let x = 0;
      let y = 0;
      let r = 0;
      let hex = (random(array));
      
      if (radioSize.value() == '1') {
        r = random(1, 20);
      } else if (radioSize.value() == '2'){
        r = random(1, 300);
      }
      
      if (radioPos.value() == '1'){
        x = random(width);
        y = random(height);   
        
      } else if (radioPos.value() == '2'){
        x = random(100, width);
        y = random(100, height);
        
      } else if (radioPos.value() == '3'){
        x = random(width-100);
        y = random(height-100);
      }
      
      let circle = new CircleParticles(x, y, r, hex);
      circles2.push(circle);
    }
    
  
  //FOR LOOP FOR CLUSTER
  for (let i = 0; i < 15; i++) {
    let x = 0;
    let y = 0;
    
    if (radioPos.value() == '1'){
      x = random(width);
      y = random(height);        
    } else if (radioPos.value() == '2'){
      x = random(300, width);
      y = random(200, height); 
    } else if (radioPos.value() == '3'){
      x = random(0, 400);
      y = random(0, 300);
    }
    
    let size = random(0, 150);
    let rot = random(0, 180);
    
    if (radioImage.value() == '5') {
      imgSelected = img5;
    } else if (radioImage.value() == '6'){
      imgSelected = img6;
    } else if (radioImage.value() == '0'){
      imgSelected = img0;
    }
    
    let img = new RandomImage (x, y, size, rot);
    images.push(img);   
  }

  

  
  //FOR LOOP FOR FLOWERS
  for (let i = 0; i < 25; i++) {
    let x = 0;
    let y = 0;
    
    if (radioPos.value() == '1'){
      x = random(width);
      y = random(height);        
    } else if (radioPos.value() == '2'){
      x = random(300, width);
      y = random(200, height);
      
    } else if (radioPos.value() == '3'){
      x = random(width-400);
      y = random(height-300);
    }
    
    let size = random(0, 100);
    let rot = random(0, 180);
    
    if (radioFlower.value() == '3') {
      flowerSelected = img3;
    } else if (radioFlower.value() == '4'){
      flowerSelected = img4;
    } else if (radioFlower.value() == '0'){
      flowerSelected = img0;
    }
    
    let img = new RandomFlower (x, y, size, rot);
    images.push(img);   
  }
  

  //FOR LOOP FOR FRUITS
  for (let i = 0; i < 30; i++) {
    let x = 0;
    let y = 0;
    
    if (radioPos.value() == '1'){
      x = random(width);
      y = random(height);        
    } else if (radioPos.value() == '2'){
      x = random(200, width);
      y = random(200, height);
      
    } else if (radioPos.value() == '3'){
      x = random(width-200);
      y = random(height-200);
    }
    
    let size = random(0, 100);
    let rot = random(0, 180);
    
    if (radioFruits.value() == '1') {
      fruitSelected = img1;
    } else if (radioFruits.value() == '2'){
      fruitSelected = img2;
    } else if (radioFruits.value() == '0'){
      fruitSelected = img0;
    }
    
    let img = new RandomFruits (x, y, size, rot);
    images.push(img);   
  }
  
  
  //FOR LOOP FOR LEAVES
  for (let l = 0; l < 50; l++) {
    let x = random(width);
    let y = random(height);
    let rot = random(0, 360);
    let size = random(2, 25);
    let hex = (random(array));
    let leave = new Leave(x, y, size, rot, hex);
    leaves.push(leave);   
  }
  

  // FOR LOOP FOR X
  for (let t = 0; t < 25; t++) {
    let x = random(width);
    let y = random(height);
    let rot = random(0, 180);
    let size = random(2, 30);
    let text = new TextX (x, y, rot, size);
    texts.push(text);    
  }
  

  // FOR LOOP FOR O
  for (let o = 0; o < 25; o++) {
    let x = random(width);
    let y = random(height);
    let rot = random(0, 360);
    let size = random(2, 25);
    let text = new TextO (x, y, rot, size);
    texts.push(text);    
  }
  

  /////////////////////
  


  for (let circle of circles1){
    circle.display();
  }

  for (let circle of circles2){
    circle.display();
  }
  
  for (let img of images){
    img.display();
  }

  for (let img of flowers){
    img.display();
  }
  
  for (let img of fruits){
    img.display();
  }
  
  for (let leave of leaves){
    leave.display();
  }
  
  for (let rect of rects){
    rect.display();
  }
  
  for (let text of texts){
    text.display();
  }
  
}


/////////////////////



class CircleBack{
  constructor(x, y, r, hex){
    this.x = x;
    this.y = y;
    this.r = r;
    this.hex = hex;
  }
  display(){  
    fill(this.hex);
    circle(this.x, this.y, this.r);
  }
} 

class CircleParticles{
  constructor(x, y, r, hex){
    this.x = x;
    this.y = y;
    this.r = r;
    this.hex = hex;
  }
  display(){  
    fill(this.hex);
    circle(this.x, this.y, this.r);
  } 
}

class RandomFruits{
  constructor(x, y, size, rot){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
    
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    image(fruitSelected, this.x, this.y, this.size, this.size);    
    pop();
  } 
}


class RandomFlower{
  constructor(x, y, size, rot){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    image(flowerSelected, this.x, this.y, this.size, this.size);    
    pop();
  } 
}

class RandomImage{
  constructor(x, y, size, rot){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    image(imgSelected, this.x, this.y, this.size, this.size); 
    pop();
  } 
}

class Leave{
  constructor(x, y, size, rot, hex){
    this.x = x;
    this.y = y; 
    this.size = size;
    this.rot = rot;
    this.hex = hex;
  }
  display(){ 
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2);  
    fill(this.hex);
    
    beginShape();
    curveVertex(this.x, this.y);
    curveVertex(this.x +15, this.y-8);
    curveVertex(this.x+30, this.y);
    curveVertex(this.x+15, this.y+8);
    curveVertex(this.x+1, this.y+1); 
    endShape(CLOSE);
    
    
    pop();
    
    push(); 
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    pop();
    
  } 
}

class TextX{
  constructor(x, y, rot, size){
    this.x = x;
    this.y = y; 
    this.rot = rot;
    this.size = size;
  }
  display(){   
    push();
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    textSize(this.size);
    fill(0);
    text('x', this.x, this.y);
    pop();
    
  } 
}

class TextO{
  constructor(x, y, rot, size){
    this.x = x;
    this.y = y; 
    this.rot = rot;
    this.size = size;
  }
  display(){   
    push();
    translate(this.x + this.x/2, this.y + this.y/2); 
    rotate(this.rot);
    translate(-this.x - this.x/2, -this.y - this.y/2); 
    textSize(this.size);
    fill(0);
    text('o', this.x, this.y);
    pop();
    
  } 
}

