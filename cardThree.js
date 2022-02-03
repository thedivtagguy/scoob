const cardThree = (sketch) => {
  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./caught.csv", "csv", "header");
    
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
    sketch.textAlign(sketch.CENTER);
    sketch.text("The Catchers and the Captured", sketch.width / 2, 50);
    sketch.pop();
    sketch.push();
    sketch.fill("#F18F01");
    sketch.textAlign(sketch.CENTER);
    sketch.text("Who catches the criminals and who gets captured? \n Spoiler Alert: Daphnie isn't doing so well.", sketch.width/2, 80);
    sketch.pop();
  };

 const drawPlot = (characterName) => {
  let xStartingPoint = 0;

  for(let i = 0; i < data.getRowCount(); i++) {
    let character = data.getString(i, "character");
    if(character === characterName) {
      console.log(characterName);
      // Draw a horizontal line in the middle of the canvas
      sketch.stroke('#F18F01');
     // Draw bars that correspond to the value
     // If it is negative, draw a bar with a negative height
      // If it is positive, draw a bar with a positive height
      let height = data.getNum(i, "roll_value");
      if(height < 0){
        sketch.stroke('#F18F01');
        sketch.strokeWeight(0.5);
        sketch.line(xStartingPoint, 250, xStartingPoint, sketch.height - 600 - height);
        xStartingPoint += 1;
      }
      if(height > 0){
        sketch.stroke('#F18F01');
        sketch.strokeWeight(0.5);
        sketch.line(xStartingPoint, 250, xStartingPoint , 200 + height);
        xStartingPoint += 1;
      }
      sketch.line(0, sketch.height/3.6, xStartingPoint, sketch.height/3.6);

    }
  }
 }
  sketch.draw = () => {
    sketch.translate(100, 0);
    drawPlot("Daphne Blake");
    // Move the next graph to the right
    sketch.translate(600, 0);
    drawPlot("Fred Jones");
    sketch.translate(10, 250);
    drawPlot("Shaggy Rogers");
   
  };
};
let myp35 = new p5(cardThree);
