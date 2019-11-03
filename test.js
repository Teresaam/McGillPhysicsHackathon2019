var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  let slider;
  let value;


  p.setup = function() {
    //IF CHANGE, JUST VALUES INSIDE
    p.createCanvas(700, 700);
    slider = p.createSlider(0, 30, 100);
    slider.position(50, 750);
    slider.style('width', '600px');
  };

  p.draw = function() {
    //DO NOT CHANGE
    value = slider.value();
    
    //TODO
    p.background(value);
    p.fill(255);
    p.rect(x,y,50,50);
    //END TODO

    //DO NOT CHANGE
    //emits: gives the 'value' of the slider to python
    socket.emit("message", value);
    //'data' contains info from python
    socket.on("message", function(data) {
    console.log(data);
  };
};


var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(700, 700);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'c2');
