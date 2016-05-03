 
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
        width : 10,
        height : 30,
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
      id: "o1",
      position : {
        x : 0,
        y : 0
      },
      rotation : 0
    },
    {
      id: "o2",
      position : {
        x : 0,
        y : 30
      },
      rotation : 0
    },
    {
      id: "o3",
      position : {
        x : 50,
        y : delta_t / 100
      },
      rotation : delta_t / 1000 / 2 / Math.pi
    },
  ];
}
