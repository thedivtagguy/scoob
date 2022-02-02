const cardOne = (sketch) => {
  // Create variable called data
  let data;

  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./scoobydoo.csv", "csv", "header");
  };

  sketch.setup = () => {
    const canvas = sketch.createCanvas(655, 400);
    canvas.parent("card-1");
    sketch.noLoop();
  };

  sketch.draw = () => {
    // Title on top of the chart
    sketch.push();
    sketch.textSize(40);
    sketch.fill('#F18F01')
    // Font Family: 'Arial'
    sketch.textFont('Bangers');
    // Spacing between the letters
    sketch.textLeading(60);
    sketch.text("TOP CRIMINAL MOTIVES", sketch.width / 4, 50);
    sketch.pop();



    // Create a new array called years
    const years = data.getColumn("date_aired").map((d) => {
      const date = new Date(d);
      const year = date.getFullYear();
      return year;
    });

    console.log(years);
    // Draw an X axis with the years as labels
    sketch.stroke(0);
    sketch.strokeWeight(0.1);

    const motives = data.getColumn("motive").map((d) => {
      return d;
    });

    // Create a JSON object called motives
    // Each item in JSON object is anothe JSON object of year, and count of motives
    const motivesObj = {};
    for (let i = 0; i < motives.length; i++) {
      if (motivesObj[motives[i]]) {
        motivesObj[motives[i]]++;
      } else {
        motivesObj[motives[i]] = 1;
      }
    }
    // Remove NULL
    delete motivesObj["NULL"];
    console.log(motivesObj);
    // Keep only the top 10 motives in the object
    const topMotives = {};
    let count = 0;
    for (const motive in motivesObj) {
      if (count < 10) {
        topMotives[motive] = motivesObj[motive];
        count++;
      }
    }

    console.log(topMotives);

    // Draw a bar chart with the top 10 motives

    Object.keys(topMotives).forEach((motive, index) => {
      sketch.push();
      sketch.textSize(8);
      sketch.textAlign(sketch.CENTER);
      sketch.textStyle(sketch.BOLD);
      sketch.fill("#EFF1F3");
      sketch.text(motive, index * 63 + 42, sketch.height - 20);
      sketch.pop();
      sketch.fill("#F18F01");
      sketch.rect(
        index * 63 + 20,
        sketch.height - 50 - topMotives[motive],
        50,
        topMotives[motive]
      );
      // Add a label of the count above the bar
      sketch.textSize(12);
      sketch.fill("#EFF1F3");
      sketch.text(
        topMotives[motive],
        index * 63 + 36,
        sketch.height - 50 - topMotives[motive] - 10
      );
    });
  };
};
let myp5 = new p5(cardOne);
