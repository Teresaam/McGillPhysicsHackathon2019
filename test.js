
var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  let slider;
  let sliderD;
  let value;
  let d;
  var sc = 900;



  p.setup = function() {
    //IF CHANGE, JUST VALUES INSIDE
    
    p.createCanvas(sc, sc);
    slider = p.createSlider(1, 30, 100);
    sliderD = p.createSlider(1, 3, 70);
    slider.position(50, sc-100);
    sliderD.position(50,sc-50);
    sliderD.style('width', '100px')
    slider.style('width', '600px');
    //p.noLoop();
    p.frameRate(0.3);
  };

  p.draw = function() {
    //DO NOT CHANGE
    value = slider.value();
    d = sliderD.value();
    //TODO
    p.background(p.color(255, 229, 204));
    //p.fill(255);
    //p.rect(x,y,50,50);
    //END TODO

    // text near slider
    p.text('k - randomness factor', 50, sc-110);
    p.text('dimention', 50, sc-60);
    p.text('0', 30, sc-90);
    p.text('30',660, sc-90);
    p.text('1',30, sc-20);
    p.text('2', 85, sc-20);
    p.text('3', 150, sc-20);

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
    /////////////////
    // print the eigenvector in the console
    //console.log(eigenvector);

    var numPoints = 50;

    // convert the oned array to twod array
    var eigvec2d = new Array(numPoints);
    for (let j=0; j<numPoints; j++){
      eigvec2d[j] = new Array(numPoints);
      for (let k=0; k<numPoints; k++){
        eigvec2d[j][k] = eigenvector[j*numPoints+k];
      }
    }

    //for (let i=0; i < eigenvectors.length; i++){
    for (let j=0; j < eigvec2d.length; j++){
      for (let k=0; k < eigvec2d[j].length; k++){
        // if it's bigger than zero plot a circle centered around that region in some color
        if (eigvec2d[j][k] > 1.0/2500){
          var r = eigvec2d[j][k]*3.5;// some random scaling factor
          var c = '#00FFFF';//getColor(i);
          c = p.color(150,p.int(value*255./30),150);
          p.fill(c);
          p.stroke(p.color(0,0,0));
          p.circle(p.int(j * sc / numPoints), p.int(k * sc / numPoints), 3500 * r / numPoints);
        }
      }
    }
    //}

    });

  };
};


var myp5 = new p5(s, 'c1');

/*
// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(700, 700);
    p.noLoop();
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
*/
