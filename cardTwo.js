const cardTwo = ( sketch ) => {
  let data;

  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./scoobydoo.csv", "csv", "header");
  };

  sketch.setup = () => {
    const canvas = sketch.createCanvas(655, 400);
    canvas.parent("card-2");
    sketch.noLoop();
  };

  sketch.draw = () => {
    // Title on top of the chart
    sketch.push();
    sketch.textSize(40);
    sketch.fill("#F18F01");
    sketch.textFont("Bangers");
    sketch.textLeading(60);
    sketch.text("WHO GIVES THE SNACKS?", sketch.width / 4, 50);
    sketch.pop();
}
}
let myp54 = new p5(cardTwo);