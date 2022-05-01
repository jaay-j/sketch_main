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
    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 65 && mouseX <= 190){ 
      //165 in x, 200 in y
      window.open("https://jaay-j.github.io/sketch-01/"); // day 1
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 230 && mouseX <= 355){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-02/"); // d2
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 395 && mouseX <= 520){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-03/"); // d3
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 560 && mouseX <= 685){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-04/"); // d4
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 725 && mouseX <= 850){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-05/"); // d5
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 900 && mouseX <= 1030){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-06/"); // d6
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 1070 && mouseX <= 1195){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-07/"); // d7
    }

    if (mouseY >= 65 && mouseY <= 210 && mouseX >= 1240 && mouseX <= 1365){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-08/"); // d8
    }



    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 65 && mouseX <= 180){ 
        //125 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-09/"); // d9
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 230 && mouseX <= 355){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-10/"); // d10
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 395 && mouseX <= 520){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-11/"); // d11
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 560 && mouseX <= 685){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-12/"); // d12
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 730 && mouseX <= 855){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-13/"); // d13
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 900 && mouseX <= 1025){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-14/"); // d14
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 1070 && mouseX <= 1195){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-15/"); // d15
    }

    if (mouseY >= 265 && mouseY <= 410 && mouseX >= 1240 && mouseX <= 1365){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-16/"); // d16
    }



    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 65 && mouseX <= 200){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-17-/"); // d17
    }

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 230 && mouseX <= 355){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-18/"); // d18
    }

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 395 && mouseX <= 520){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-19/"); // d19
    }

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 560 && mouseX <= 685){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-20/"); // d20
    }

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 730 && mouseX <= 855){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-21/"); // d21
    }

    if (mouseY >= 465 && mouseY <= 605 && mouseX >= 910 && mouseX <= 1030){ 
        //165 in x, 200 in y
        window.open("https://jaay-j.github.io/sketch-ref/"); // reflection
      }
}
