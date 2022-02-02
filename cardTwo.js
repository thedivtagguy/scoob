const cardTwo = ( sketch ) => {

  sketch.setup = () =>  {
    const canvas = sketch.createCanvas(625, 400);
    canvas.parent('card-2');
  }
  
  sketch.draw = () => {
    sketch.background(220);
  }
}
let myp54 = new p5(cardTwo);