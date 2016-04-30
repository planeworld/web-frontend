var Screen = function(id) {
  this.id=id;
  this.canvas = oCanvas.create({
    canvas: "#"+id,
    background: "#222",
    fps: 30
  });
  
  this.plane = this.canvas.display.ellipse({
    x:50,
    y:90,
    radius: 30,
    fill: "#107B99",
  }).add();

  // Activate moving of screen
  this.plane.dragAndDrop();
  
  // Activate scroll wheel for scaling
  this.scalefactor=1;
  var mycanvas = document.getElementById("mainscreen");
  // IE9, Chrome, Safari, Opera
  mycanvas.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  mycanvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  
  var _this=this;
  function MouseWheelHandler(ev) {
    var delta = Math.max(-1, Math.min(1, (ev.wheelDelta || -ev.detail)));
    _this.scalefactor = _this.scalefactor * (1 + delta/10);
    _this.plane.scale(_this.scalefactor, _this.scalefactor);
    _this.canvas.redraw();
  }
  
};
 
Screen.prototype.addObject = function(data){
  return this.data[id];
}

var VisualObject = function() {
}

VisualObject.create=function(data, canvas, parent) {
  var object= new VisualObject();
  object.name=data.name;
  
  if (data.shape[0].type=="circle") {
    object.shape = canvas.display.ellipse({
      radius: data.shape[0].radius,
      stroke: "1px #107B99",
    });
  }
  
  parent.addChild(object.shape);
  
  return object;
}
