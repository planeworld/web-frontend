 
data = {}
data.objects= {
  o1 : {
    name : "Sun",
    shape : [
      {
        type : "circle",
        radius : 120
      }
    ],
  },

  o2 : {
    name : "Earth",
    shape : [
      {
        type : "circle",
        radius : 20
      }
    ],
  },

  o3 : {
    name : "Box",
    shape : [
      {
        type : "rectangle",
        corner1 : {
          x : -5,
          y : -5
        },
        corner2 : {
          x : 5,
          y : 5
        },
      },
    ],
  },

}

var Server = function() {
  this.data=data;
  this.timestamp=Date.now();
};

Server.prototype.getObject = function(id){
  return this.data.objects[id];
}

Server.prototype.getStates = function(){
  var delta_t = Date.now() - this.timestamp;
  return [
    {
      id: "1",
      position : {
        x : 0,
        y : 0
      },
      rotation : 0
    },
    {
      id: "2",
      position : {
        x : 0,
        y : 30
      },
      rotation : 0
    },
    {
      id: "3",
      position : {
        x : 0,
        y : delta_t / 1000
      },
      rotation : delta_t / 1000 / 2 / Math.pi
    },
  ];
}
