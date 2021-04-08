
function preload(){


}

function setup() {

  paragraph = createP("Coming soon... Click Sobble!");
  paragraph.position(200, 200);
  paragraph.style("color:black; font-size:25px;");

  sobble = createImg('./assets/sobble.png');
  sobble.addClass('rotation');
  sobble.position(windowWidth/2, windowHeight/2);
  sobble.mousePressed(sad_song);

}

function draw() {

}

function sad_song(){

window.open('https://www.youtube.com/watch?v=zB_q1I0leoI', '_self');

}
