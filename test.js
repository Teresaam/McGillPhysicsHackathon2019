
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  let slider;
  let sliderD;
  let value;
  let d;



  p.setup = function() {
    //IF CHANGE, JUST VALUES INSIDE
    p.createCanvas(700, 700);
    slider = p.createSlider(1, 30, 100);
    sliderD = p.createSlider(1, 3, 70);
    slider.position(50, 600);
    sliderD.position(50,650);
    sliderD.style('width', '100px')
    slider.style('width', '600px');
  };

  p.draw = function() {
    //DO NOT CHANGE
    value = slider.value();
    d = sliderD.value();
    //TODO
    p.background(value);
    p.fill(255);
    p.rect(x,y,50,50);
    //END TODO

    //DO NOT CHANGE
    //emits: gives the 'value' of the slider to python
    socket.emit("hi", value, d);
    //'data' contains info from python
    socket.on("message", function(data) {
    //console.log(1.32e3);
    var index = 0;
    var pos = 0;
    var entry_str = "";
    var eigenvector = new Array();
    //while not end of string
    for (var i = index; i < data.length ; i++) {
      pos = data.indexOf(" ", index);//pos = position of first occurrence of " "
      entry_str = data.slice(index,pos);
      eigenvector.push(parseFloat(entry_str))
      index = pos+1;
    }
    // console.log(eigenvector)

    });

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