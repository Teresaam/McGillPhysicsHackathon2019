numPoints = 30;

getEigenvectors = function(numEigenvecs) {
  var eigenvectors = new Array(numEigenvecs);
  for (var i = 0; i < numEigenvecs; i++) {
    eigenvectors[i] = new Array(numPoints);

    // populate the 2D array
    for (var j = 0; j < eigenvectors[i].length; j++) {
      eigenvectors[i][j] = new Array(numPoints);
      for (var k = 0; k < eigenvectors[i][j].length; k++) {
        eigenvectors[i][j][k] = 0.0;
      }
    }

    // randomly add 3 numbers representing an eigenstate
    var size;
    var posx;
    var posy;

    for (var q = 0; q < 3; q++) {
      size = Math.random();
      posx = Math.floor(Math.random() * numPoints);
      posy = Math.floor(Math.random() * numPoints);
      eigenvectors[i][posx][posy] = size;
    }
  }
  return eigenvectors;
}

getColor = function(index) {
  // selects the next color in a pre-defined cycle of colors
  // see https://www.w3schools.com/colors/colors_names.asp
  var myColors = ['#00FFFF', '#8A2BE2',
    '#A52A2A', '#DEB887',
    '#7FFF00', '#FF7F50',
    '#008B8B', 'DAA520',
    'FF69B4', 'F0E68C',
  ];
  return myColors[index % myColors.length];
}

// GLOBAL VARIABLE
var eigenvectors = getEigenvectors(6);



var s = function(p) { // p could be any variable name
  let slider;
  var eigenvectors = getEigenvectors(6);
  var x = 700;

  p.setup = function() {
    p.createCanvas(x, x);
    slider = p.createSlider(0, 255, 100);
    slider.position(50, 750);
    slider.style('width', '600px');
  };

  p.draw = function() {
    var value = slider.value();
    p.background(value);
    //var c = getColor(0);
    //p.fill(p.color(c));
    //p.rect(100, 100, 50, 50);
    
    for (let i=0; i < eigenvectors.length; i++){
      for (let j=0; j < eigenvectors[i].length; j++){
        for (let k=0; k < eigenvectors[i][j].length; k++){
          // if it's bigger than zero plot a circle centered around that region in some color
          if (eigenvectors[i][j][k] !=0){
            var r = eigenvectors[i][j][k];
            var c = getColor(i);
            p.fill(p.color(c));
            p.stroke(p.color(c));
            p.circle(p.int(j * x / numPoints), p.int(k * x / numPoints), 3500 * r / numPoints);
          }
        }
      }
    }
    
  };

  p.customFunc = function(index) {
    return index * 3;
  };

  p.getColor = function(index) {
    // selects the next color in a pre-defined cycle of colors
    // see https://www.w3schools.com/colors/colors_names.asp
    var myColors = ['#00FFFF', '#8A2BE2',
      '#A52A2A', '#DEB887',
      '#7FFF00', '#FF7F50',
      '#008B8B', 'DAA520',
      'FF69B4', 'F0E68C',
    ];
    return myColors[index % myColors.length];
  };

};
var myp5 = new p5(s, 'c1');

// Sketch Two
var t = function(p) {
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
    if (x > p.width) {
      x = 0;
    }
    p.ellipse(x, y, 50, 50);

  };
};
var myp5 = new p5(t, 'c2');
