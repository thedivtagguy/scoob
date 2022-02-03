const cardThree = (sketch) => {
  sketch.preload = () => {
    // Load data from the CSV file
    data = sketch.loadTable("./scoobydoo.csv", "csv", "header");
    
  };

  const imdb_score = [];
  const rows = 8;
  const cols = 35;

  sketch.setup = () => {
    // Get div width and height
    const divWidth = document.getElementById("card-3").clientWidth;
    const divHeight = document.getElementById("card-3").clientHeight;
    const canvas = sketch.createCanvas(divWidth - 40, divHeight);
    canvas.parent("card-3");

     // Create a new array called years
     const years = data.getColumn("date_aired").map((d) => {
      const date = new Date(d);
      const year = date.getFullYear();
      return year;
    });

    // Column names are date_aired and imdb
    const imdb = data.getColumn("imdb");

    // Create a new array called imdb_score for each year
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      const score = imdb[i];
      imdb_score.push({
        year,
        score,
      });
    }
    console.log(imdb_score);
    // Sort the array by year
    imdb_score.sort((a, b) => {
      return a.year - b.year;
    }
    );
    sketch.push();
    sketch.textSize(40);
    sketch.fill("#F18F01");
    sketch.textFont("Bangers");
    sketch.textLeading(60);
    sketch.text("EPISODE RATINGS", sketch.width / 3, 30);
    sketch.pop();
  };

  sketch.draw = () => {

    // Create a heatmap using the imdb_score array
    // Colors are defined below: 
    const colors = ['#d7b8f5','#C294F0', '#AD70EB', '#994CE6', '#8529E0', '#701CC4', '#5C17A1', '#47127D', '#330D59']
    for(let i = 0; i < imdb_score.length; i++) {
      // Draw a grid of squares in rows and cols
      const x = (i % cols) * (sketch.width / cols);
      const y = Math.floor(i / cols) * (sketch.height / rows) + 250;

      const score = imdb_score[i].score;
      if (score >= 0 && score < 1) {
        sketch.fill(colors[0]);
      } else if (score >= 1 && score < 2) {
        sketch.fill(colors[1]);
      } else if (score >= 2 && score < 3) {
        sketch.fill(colors[2]);
      } else if (score >= 3 && score < 4) {
        sketch.fill(colors[3]); 
      } else if (score >= 4 && score < 5) {
        sketch.fill(colors[4]);
      } else if (score >= 5 && score < 6) {
        sketch.fill(colors[5]);
      } else if (score >= 6 && score < 7) {
        sketch.fill(colors[6]);
      } else if (score >= 7 && score < 8) {
        sketch.fill(colors[7]);
      } else if (score >= 8 && score < 9) {
        sketch.fill(colors[8]);
      } else if (score >= 9 && score < 10) {
        sketch.fill(colors[9]);
      }
      
      sketch.noStroke();
      // If it is a new year, draw a rectangle with a different color
      // If not, just draw a rectangle
      if(i != 0 && imdb_score[i].year !== imdb_score[i-1].year) {
        sketch.rect(x, y/3.2, 16, 16);
        sketch.push();
        sketch.fill('#fff');
        sketch.textSize(6);
        sketch.text(imdb_score[i].year, x+2,y/3.13);
        sketch.pop();
      } else {
        sketch.rect(x, y/3.2, 16, 16);
      }
      sketch.push();
      sketch.fill(0);
      sketch.textSize(12);
      sketch.pop();         
    }
  };
};
let myp35 = new p5(cardThree);
