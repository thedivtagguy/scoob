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

 let maxNegativeHeight = sketch.height - 120;
 let maxPositiveHeight = sketch.height/4;


  const mapToGraph = (value, oldXPos, maxHeight, minHeight) => {
    const newXPos = oldXPos + 10;
    const newYPos = sketch.map(value, 0, maxHeight, minHeight, maxHeight);
    return [newXPos, newYPos];
  };
  let xStartingPoint = 0;
  sketch.draw = () => {
    for(let i = 0; i < data.getRowCount(); i++) {
      let character = data.getString(i, "character");
      if(character === 'Daphne Blake'){
        console.log(character);
        // Draw a horizontal line in the middle of the canvas
        sketch.stroke('#F18F01');
        sketch.line(xStartingPoint, sketch.height/4, sketch.width, sketch.height/4);
        sketch.line(xStartingPoint, sketch.height - 120, sketch.width, sketch.height - 120);
        sketch.line(0, sketch.height/2, sketch.width, sketch.height/2);
        // Plot the data points
        let value = data.getNum(i, "roll_value");
        let [newX, newY] = mapToGraph(value, xStartingPoint, maxNegativeHeight, maxPositiveHeight);
        console.log(newX, newY);
        sketch.stroke('#F18F01');
        sketch.strokeWeight(0.5);
        sketch.point(newX, newY);
      }
    }
  
   
  };
};
let myp35 = new p5(cardThree);
