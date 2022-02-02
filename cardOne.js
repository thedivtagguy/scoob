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
    sketch.background(220);
    // All dates are stored in date_aired column of the csv file
    // Convert it to DATE type and keep only the year
    data.getColumn("date_aired").map((d) => {
      const date = new Date(d);
      const year = date.getFullYear();
      return year;
    });
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

    const motivesCount = {};
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      const motive = motives[i];
      if (!motivesCount[year]) {
        motivesCount[year] = {};
      }
      if (!motivesCount[year][motive]) {
        motivesCount[year][motive] = 0;
      }
      motivesCount[year][motive]++;
    }
    console.log(motivesCount);

    // Print a total of 10 labels on the X axis
    // Starting from 1969 and ending with 2020 from the years in motivesCount
    // The labels will be spaced evenly
    for (let i = 1969; i <= 2020; i += 10) {
      sketch.text(
        i,
        sketch.map(i, 1969, 2020, 0, sketch.width - 150),
        sketch.height - 10
      );
    }
  };
};
let myp5 = new p5(cardOne);
