const s = ( sketch ) => {

  let x = 100;
  let y = 100;


  //This is the set up function
  sketch.setup = () => {
    sketch.createCanvas(400, 400);
  };


  //this is the draw function
  sketch.draw = () => {
    sketch.background(250);
    //TODO below
	sketch.ellipse(50,50, 50,50);
	//END TODO
  };
};


//DO NOT ERASE OR MODIFY
let myp5 = new p5(s);