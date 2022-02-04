const cardThree = (sketch) => {
  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./caught.csv", "csv", "header");
    fred = sketch.loadImage("./pfp/fred.png");
    velma = sketch.loadImage("./pfp/velma.png");
    daphne = sketch.loadImage("./pfp/daphne.png");
    shaggy = sketch.loadImage("./pfp/shaggy.png");
    scooby = sketch.loadImage("./pfp/scooby.png");
  };



  sketch.setup = () => {
    // Get div width and height
    const divWidth = document.getElementById("card-3").clientWidth;
    const divHeight = document.getElementById("card-3").clientHeight;
    const canvas = sketch.createCanvas(divWidth - 40, divHeight);
    canvas.parent("card-3");
    sketch.noLoop();
    sketch.push();
    sketch.textSize(40);
    sketch.fill("#F18F01");
    sketch.textFont("Bangers");
    sketch.textLeading(60);
    sketch.textAlign(sketch.LEFT);
    sketch.text("The Catchers and the Captured", 100, 50);
    sketch.pop();
    sketch.push();
    sketch.fill("#F18F01");
    sketch.textAlign(sketch.RIGHT);
    sketch.text("Who catches the criminals and who gets captured? \nEach slice of area represents cumulative count from the last 50 episodes.\nSpoiler Alert: Daphnie has never done so well.", 1300, 30);
    sketch.pop();
  };


 const drawPlot = (characterName) => {
  let xStartingPoint = 0;

  for(let i = 0; i < data.getRowCount(); i++) {
    let character = data.getString(i, "character");
    if(character === characterName) {
      sketch.stroke('#F18F01');
      // Calculate Height for the slice
      let height = data.getNum(i, "roll_value");
      if(height < 0){
        sketch.stroke('#F18F01');
        sketch.strokeWeight(0.8);
        sketch.line(xStartingPoint, 250, xStartingPoint, sketch.height  - height*2 - 640);
        xStartingPoint += 1;
      }
      if(height > 0){
        sketch.stroke('#F18F01');
        sketch.strokeWeight(0.8);
        sketch.line(xStartingPoint, 250, xStartingPoint ,  height*2 + 230);
        xStartingPoint += 1;
      }

      sketch.stroke('#8F5600');
      sketch.strokeWeight(1);
      // Main Axis

      sketch.line(0, sketch.height/3.6, xStartingPoint, sketch.height/3.6);      
      // Draw a line on the left side of the canvas
      sketch.line(0, sketch.height/4.8, 0, sketch.height/3);
      // Axis Labels
      sketch.push();
      sketch.textSize(12);
      sketch.fill("#F18F01");
      sketch.noStroke();
      sketch.text('0', -10, sketch.height/3.55);
      sketch.text('20', -18, sketch.height/4.6);
      sketch.text('20', -18, sketch.height/2.9);
      sketch.pop();
      sketch.push();
      sketch.textSize(9);
      sketch.textLeading(21);
      sketch.fill("#F18F01");
      sketch.noStroke();
      sketch.text('Got Caught', 10, sketch.height/2.9);
      sketch.text('Captures', 10, sketch.height/4.7);
      sketch.pop();
    }
    
  }
 }
  sketch.draw = () => {

    // Legend
    sketch.push();
    sketch.textSize(12);
    sketch.fill("#F18F01");
    sketch.noStroke();
    sketch.textAlign(sketch.CENTER);
    sketch.text('— Episodes 0 to 603 →', sketch.width/2, 100);
    // Rectangle around the legend
    sketch.pop();

    sketch.push();
    sketch.noFill();
    sketch.stroke('#F18F01');
    sketch.rect(sketch.width/2 - 100, 80, 200, 30);
    sketch.pop();

    sketch.fill('#F18F01');
    sketch.noStroke();
    sketch.textSize(20);
    ////// Daphne Blake //////
    sketch.translate(120, 30);
    sketch.push();
    sketch.textFont("Bangers");
    sketch.text('Daphne Blake', 0, 150);
    sketch.image(daphne, 120, 120, 50, 50);
    sketch.pop();
    drawPlot("Daphne Blake");
    ////// Fred Jones //////
    sketch.translate(600, 0);
    sketch.push();
    sketch.textFont("Bangers");
    sketch.image(fred, 90, 118, 45, 50);
    sketch.text('Fred Jones', 0, 150);
    sketch.pop();
    drawPlot("Fred Jones");
    ////// Shaggy Rogers //////
    sketch.translate(0, 250);
    sketch.push();
    sketch.textFont("Bangers");
    sketch.image(shaggy, 125, 120, 45, 50);
    sketch.text('Shaggy Rogers', 0, 150);
    sketch.pop();
    drawPlot("Shaggy Rogers");
    ////// Velma Dinkley //////
    sketch.translate(-600, 0);
    sketch.push();
    sketch.textFont("Bangers");
    sketch.image(velma, 115, 120, 50, 50);
    sketch.text('Velma Dinkley', 0, 150);
    sketch.pop();
    drawPlot("Velma Dinkley");
    ////// Scooby Doo //////
    sketch.translate(300, 250);
    sketch.push();
    sketch.textFont("Bangers");
    sketch.image(scooby, 100, 115, 32, 50);
    sketch.text('Scooby Doo', 0, 150);
    sketch.pop();
    drawPlot("Scooby Doo");

  };
};
let myp35 = new p5(cardThree);
