const cardThree = (sketch) => {
  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./scoobydoo.csv", "csv", "header");
  };

  
  sketch.setup = () => {
    // Get div width and height
    const divWidth = document.getElementById("card-3").clientWidth;
    const divHeight = document.getElementById("card-3").clientHeight;
    const canvas = sketch.createCanvas(divWidth - 50, divHeight);
    canvas.parent("card-3");
  };

  sketch.draw = () => {
    sketch.background(220);
  };
};
let myp35 = new p5(cardThree);
