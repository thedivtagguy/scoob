const cardTwo = (sketch) => {
  let data;

  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./scoobydoo.csv", "csv", "header");
    image = sketch.loadImage("./scoob.png");
    // Columns are in snack_fred, snack_velma, snack_daphnie, snack_shaggy
    // Go through each column and if the value for that row is TRUE, add count
    // to the corresponding variable
    // For example, if the value for snack_fred is TRUE, add 1 to fredCount
    // and so on
  };
  let counts = {
    fredCount: 0,
    velmaCount: 0,
    daphnieCount: 0,
    shaggyCount: 0,
    scoobyCount: 0,
  };
  let countSnacks = [];

  sketch.setup = () => {
    const canvas = sketch.createCanvas(655, 400);
    canvas.parent("card-2");
    sketch.noLoop();

    let columnNames = [
      "snack_fred",
      "snack_velma",
      "snack_daphnie",
      "snack_shaggy",
      "snack_scooby",
    ];
    // Iterate through all the columnNames in the data and if the value is true,
    // Add 1 to the corresponding variable
    for (let i = 0; i < columnNames.length; i++) {
      for (let j = 0; j < data.getRowCount(); j++) {
        if (data.getString(j, columnNames[i]) === "TRUE") {
          console.log(data.getString(j, columnNames[i]));
          if (columnNames[i] === "snack_fred") {
            counts.fredCount++;
          }
          if (columnNames[i] === "snack_velma") {
            counts.velmaCount++;
          }
          if (columnNames[i] === "snack_daphnie") {
            counts.daphnieCount++;
          }
          if (columnNames[i] === "snack_shaggy") {
            counts.shaggyCount++;
          }
          if (columnNames[i] === "snack_scooby") {
            counts.scoobyCount++;
          }

        }
      }
    }
    // Convert the object to an array
    for (let key in counts) {
      countSnacks.push([key, counts[key]]);
    }
    // Sort the array in descending order
    countSnacks.sort((a, b) => {
      return b[1] - a[1];
    }
    );
    console.log(countSnacks);

  };

  sketch.draw = () => {
    // Title on top of the chart
    console.log(counts);
    sketch.push();
    sketch.textSize(40);
    sketch.fill("#F18F01");
    sketch.textFont("Bangers");
    sketch.textLeading(60);
    sketch.text("WHO GIVES THE SNACKS?", sketch.width / 2.1, 50);
    sketch.pop();
    // Add image
    sketch.image(
      image,
      sketch.width / 2.2,
      sketch.height / 5.5,
      sketch.width / 2,
      sketch.height
    );
    for(let i = 0; i < countSnacks.length; i++){
      sketch.push();
      sketch.textSize(15);
      sketch.strokeWeight(0.1);
      sketch.fill("#F18F01");
      if(countSnacks[i][0] === "fredCount"){
       sketch.text("Fred", 50, 70*i + 70);
      }
      if(countSnacks[i][0] === "velmaCount"){
        sketch.text("Velma", 50, 70*i + 70);
      }
      if(countSnacks[i][0] === "daphnieCount"){
        sketch.text("Daphnie", 50, 70*i + 70);
      }
      if(countSnacks[i][0] === "shaggyCount"){
        sketch.text("Shaggy", 50, 70*i + 70);
      }
      if(countSnacks[i][0] === "scoobyCount"){
        sketch.text("Scooby", 50, 70*i + 70);
      }
      sketch.pop();
      // Draw  a ricle proportional to the count
      sketch.push();
      sketch.strokeWeight(0.1);
      sketch.fill("#F18F01");
      sketch.ellipse(sketch.width / 4, 70*i + 70, countSnacks[i][1] * 1.3, countSnacks[i][1] * 1.3);
      sketch.text(countSnacks[i][1] + " times", 218, 70*i + 72);
      sketch.pop();
      
    }

  };
};
let myp54 = new p5(cardTwo);
