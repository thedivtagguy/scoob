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
    sketch.fill("#F18F01");
    sketch.textFont("Bangers");
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
    // Sort JSON object by value in descending order 
    // Draw a bar chart with the top 10 motives
    console.log(typeof topMotives);
    let sorted = [];
    for (const motive in topMotives) {
      sorted.push([motive, topMotives[motive]]);
    }
    sorted.sort((a, b) => {
      return b[1] - a[1];
    });
    console.log(sorted);

    // Draw a bar chart with the top 10 motives
 

    for(let i = 0; i < sorted.length; i++) {     
      sketch.push();
      sketch.fill("#F18F01");
      sketch.translate(60, 100 + i * 30);
      sketch.text(sorted[i][0], 0, 10);
      sketch.text(sorted[i][1], sketch.width / 3.7, 10);
      // Draw a bar based on the frequency 
      sketch.fill("#F18F01");
      sketch.rect(sketch.width / 3, 0, sorted[i][1] * 2, 20);
      sketch.pop();
    }

  };
};
let myp5 = new p5(cardOne);
