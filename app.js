console.log("Hello World");

$(function() {
  $(document).mousemove(function(e) {
    moveDiv(e, 'parallax', 50, 50, 40);
    moveDiv(e, 'much-events', 30, 20, 30);
    moveDiv(e, 'many-js', 20, 80, 20);
    moveDiv(e, 'wow', 60, 70, 10);
    backgroundMove(e)
  });
});

// Move a div around with mouse input
function moveDiv(e, id, left, bottom, sensitivity) {
  pointerDeltaX = e.pageX - window.innerWidth/2;
  pointerDeltaY = e.pageY - window.innerHeight/2;

  elDeltaX = pointerDeltaX * sensitivity / (window.innerWidth/2);
  elDeltaY = -1 * pointerDeltaY * sensitivity / (window.innerHeight/2);

  elPosX = left + elDeltaX;
  elPosY = bottom + elDeltaY;

  console.log(elPosX + " " + elPosY);
  document.getElementById(id).style.left = elPosX + "%";
  document.getElementById(id).style.bottom = elPosY + "%";
}

// Move the positioning of the body's background with mouse input
function backgroundMove(e) {
  console.log(e.pageX + " " + e.pageY);

  sensitivity = 5;
  pointerDeltaX = e.pageX - window.innerWidth/2;
  pointerDeltaY = e.pageY - window.innerHeight/2;

  imgDeltaX = -1 * pointerDeltaX * sensitivity / (window.innerWidth/2);
  imgDeltaY = pointerDeltaY * sensitivity / (window.innerHeight/2);

  imgBgPosX = -50 + imgDeltaX;
  imgBgPosY = -50 + imgDeltaY;

  document.body.style.backgroundPosition = imgBgPosX + "px " + imgBgPosY + "px";
}
