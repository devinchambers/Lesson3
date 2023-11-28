var note1;
var note2;
var note3;
var note4;
var note5;
var note6;
let s = 0;
let d = 0;
let f = 0;
let j = 0;
let k = 0;
let l = 0;
let a = 1;
let word = 'Bag'

let x = 100;
let y = 100;

function preload() {
  song = loadSound ("note1.wav");
 song2 = loadSound ("note2.wav");
 song3 = loadSound ("note3.wav");
  song4 = loadSound ("note4.wav");
 song5 = loadSound ("note5.wav");
 song6 = loadSound ("note6.wav");

}

function setup() {
  createCanvas(1920, 1080);
  background(255);
 
rect(700,900, 50, 100)
rect(760,900, 50, 100)
rect(820,900, 50, 100)
rect(940,900, 50, 100)
rect(1000,900, 50, 100)
rect(1060,900, 50, 100)
   textSize(30);
  text('s', 715, 875);
  text('d', 775, 875);
  text('f', 835, 875);
  text('j', 960, 875);
  text('k', 1015, 875);
  text('l', 1075, 875);
}


function draw() {
  //words 
  //stroke (255);
  x = int(random(250,1250));
  y = int(random(150,750));

  
  if (a == 1) 
  {
    word = 'The';
  }
   if (a == 2) 
  {
    word = 'image';
  }
  
   if (a == 3) 
  {
    word = 'lays';
  }
  
   if (a == 4) 
  {
    word = 'over';
  }
  
   if (a == 5) 
  {
    word = 'bent';
  }
  
  
   if (a == 6) 
  {
    word = 'plastic';
  }
  
  
   if (a == 7) 
  {
    word = '...';
  }
  
   if (a == 8) 
  {
    word = '...';
  }
  
 
  
   if (a == 9) 
  {
    word = 'Dont';
  }
  
   if (a == 10) 
  {
    word = 'have';
  }
  
   if (a == 11) 
  {
    word = 'allot';
  }
  
   if (a == 12) 
  {
    word = 'to';
  }
  
   if (a == 13) 
  {
    word = 'say';
  }
  
  
   if (a == 14) 
  {
    word = 'today';
  }
  
   if (a == 15) 
  {
    word = 'I';
  }
  
  
   if (a == 16) 
  {
    word = 'mostly';
  }
  
   if (a == 17) 
  {
    word = 'feel';
  }
  
   if (a == 18) 
  {
    word = 'little';
  }
  
  
   if (a == 19) 
  {
    word = 'shimmers';
  }
  
   if (a == 20) 
  {
    word = 'along';
  }
  
    if (a == 21) 
  {
    word = 'the';
  }
  
  
    if (a == 22) 
  {
    word = 'pathway';
  }
  
  
    if (a == 23) 
  {
    word = 'of';
  }
  
  
    if (a == 24) 
  {
    word = 'my';
  }
  
  
    if (a == 25) 
  {
    word = 'bones';
  }
  
  
    if (a == 26) 
  {
    word = 'I';
  }
  
  
    if (a == 27) 
  {
    word = 'just';
  }
  
  
    if (a == 28) 
  {
    word = 'try';
  }
  
  
    if (a == 29) 
  {
    word = 'to';
  }
  
  
    if (a == 30) 
  {
    word = 'hold';
  }
  
  
    if (a == 31) 
  {
    word = 'the';
  }
  
  
    if (a == 32) 
  {
    word = 'blankness';
  }
  
  
    if (a == 33) 
  {
    word = 'a';
  }
  
  
    if (a == 34) 
  {
    word = 'little';
  }
  
  
    if (a == 35) 
  {
    word = 'while';
  }
  
  
    if (a == 36) 
  {
    word = 'along';
  }
  
  
    if (a == 37) 
  {
    word = 'longer';
  }
  
  if(a == 38) {
    
    
    a = 0;
  }

  
  
if (s > 0) {
   fill (1);
     stroke(1);
  rect(700,900, 50, 100);
  s = s - 1;
  
}
  if (s == 0) {
   fill (255);
    stroke(1);
  rect(700,900, 50, 100);
}
  
  
  if (d > 0) {
       stroke(1);
   fill (1);
 rect(760,900, 50, 100);
  d = d - 1;
  
}
  if (d == 0) {
   fill (255);
 rect(760,900, 50, 100);

  
}

  
  
  if (f > 0) {
       stroke(1);
   fill (1);
 rect(820,900, 50, 100);
  f = f - 1;
  
}
  if (f == 0) {
   fill (255);
 rect(820,900, 50, 100);
  
}

  
  
  if (j > 0) {
       stroke(1);
   fill (1);
   rect(940,900, 50, 100);
  j = j - 1;
  
}
  if (j == 0) {
    //stroke(255);
   fill (255);
  rect(940,900, 50, 100);

  
}

  
  if (k > 0) {
       stroke(1);
   fill (1);
  rect(1000,900, 50, 100);
  k = k - 1;
  
}
  if (k == 0) {
       stroke(1);
   fill (255);
  rect(1000,900, 50, 100);

  
}
  
   if (l > 0) {
        stroke(1);
   fill (1);
  rect(1060,900, 50, 100);
  l = l - 1;
  
}
  if (l == 0) {
   fill (255);
  rect(1060,900, 50, 100);

  
}


}

 
function keyPressed() {
if (key === 's')  { 
    fill (255);
  stroke (255);
 rect (200,100, 1520, 700)
    
  textSize(30);

  fill (0);
text(word, x, y);
song.play();
 s = 10;
    a = a + 1;
  }
   
  if (key === 'd')  { 
  textSize(30);
    fill (255);
      stroke (255);
 rect (200,100, 1520, 700)
    
  fill (0);
text(word, x, y);

song2.play();
 d = 10;
    a = a + 1;
  }
  
  if (key === 'f')  { 
      fill (255);
      stroke (255);
   rect (200,100, 1520, 700)
    
  textSize(30);
 
      fill (0);
  text(word, x, y);


song3.play();
 f = 10;
    a = a + 1;
  }
  
  if (key === 'j')  { 
      fill (255);
      stroke (255);
    rect (200,100, 1520, 700)
    
    
  textSize(30);

      fill (0);
  text(word, x, y);


song4.play();
 j = 10;
    a = a + 1;
  }
  
  if (key === 'k')  { 
      fill (255);
      stroke (255);
  rect (200,100, 1520, 700)
    
    
  textSize(30);
    fill (255);
  
      fill (0);
    text(word, x, y);

song5.play();
 k = 10;
    a = a + 1;
  }
  
  if (key === 'l')  { 
      stroke (255);
      fill (255);
 rect (200,100, 1520, 700)
    
  textSize(30);
 
  fill (0);
  text(word, x, y);

song6.play();
 l = 10;
  a = a + 1;
  }
 

                         
print(a);
                   
                             
                          }                            
                    