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
      // For each decade, draw two columns of squares with colors that
      if(imdb_score[i]. year <= 1970 && imdb_score[i].year >=1980){
        sketch.push();
        sketch.fill(colors[0]);
        sketch.rect(sketch.width / 3, sketch.height / 2, 21, 21);
        sketch.pop();
      }
    }
  };
};
let myp35 = new p5(cardThree);
