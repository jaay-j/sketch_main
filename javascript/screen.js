let bg;

function setup() {
    bg = loadImage('img/sketchscreen.png');
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bg);

   /* push(); // day 1
    stroke(0);
    noFill();
    rect(65, 65, 120, 140);
    pop();

    push(); // day 2
    stroke(0);
    noFill();
    rect(230, 65, 120, 140);
    pop();

    push(); // day 9
    stroke(0);
    noFill();
    rect(65, 265, 120, 140);
    pop(); 

    push(); // reflection
    stroke(0);
    noFill();
    rect(910, 465, 120, 140);
    pop(); */
}


function mousePressed(){
    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 65 && mouseX <= 200){ 
      //165 in x, 200 in y
      window.open("https://jaay-j.github.io/sketch-01/"); // day 1
    }

    /*
    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 230 && mouseX <= 350){ 
        //165 in x, 200 in y
        window.open("http://www.naver.com");
    } */

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 910 && mouseX <= 1030){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-ref/"); // reflection
      }
}
