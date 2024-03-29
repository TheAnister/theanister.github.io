
gdjs.evtsExt__Boomerang__Boomerang = gdjs.evtsExt__Boomerang__Boomerang || {};

/**
 * Behavior generated from Boomerang
 */
gdjs.evtsExt__Boomerang__Boomerang.Boomerang = class Boomerang extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ThrowSpeed = behaviorData.ThrowSpeed !== undefined ? behaviorData.ThrowSpeed : Number("100") || 0;
    this._behaviorData.ReturnTime = behaviorData.ReturnTime !== undefined ? behaviorData.ReturnTime : Number("1") || 0;
    this._behaviorData.Rotation = behaviorData.Rotation !== undefined ? behaviorData.Rotation : Number("360") || 0;
    this._behaviorData.ThrowerX = Number("0") || 0;
    this._behaviorData.ThrowerY = Number("0") || 0;
    this._behaviorData.BoomerangReturning = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ThrowSpeed !== newBehaviorData.ThrowSpeed)
      this._behaviorData.ThrowSpeed = newBehaviorData.ThrowSpeed;
    if (oldBehaviorData.ReturnTime !== newBehaviorData.ReturnTime)
      this._behaviorData.ReturnTime = newBehaviorData.ReturnTime;
    if (oldBehaviorData.Rotation !== newBehaviorData.Rotation)
      this._behaviorData.Rotation = newBehaviorData.Rotation;
    if (oldBehaviorData.ThrowerX !== newBehaviorData.ThrowerX)
      this._behaviorData.ThrowerX = newBehaviorData.ThrowerX;
    if (oldBehaviorData.ThrowerY !== newBehaviorData.ThrowerY)
      this._behaviorData.ThrowerY = newBehaviorData.ThrowerY;
    if (oldBehaviorData.BoomerangReturning !== newBehaviorData.BoomerangReturning)
      this._behaviorData.BoomerangReturning = newBehaviorData.BoomerangReturning;

    return true;
  }

  // Properties:
  
  _getThrowSpeed() {
    return this._behaviorData.ThrowSpeed !== undefined ? this._behaviorData.ThrowSpeed : Number("100") || 0;
  }
  _setThrowSpeed(newValue) {
    this._behaviorData.ThrowSpeed = newValue;
  }
  _getReturnTime() {
    return this._behaviorData.ReturnTime !== undefined ? this._behaviorData.ReturnTime : Number("1") || 0;
  }
  _setReturnTime(newValue) {
    this._behaviorData.ReturnTime = newValue;
  }
  _getRotation() {
    return this._behaviorData.Rotation !== undefined ? this._behaviorData.Rotation : Number("360") || 0;
  }
  _setRotation(newValue) {
    this._behaviorData.Rotation = newValue;
  }
  _getThrowerX() {
    return this._behaviorData.ThrowerX !== undefined ? this._behaviorData.ThrowerX : Number("0") || 0;
  }
  _setThrowerX(newValue) {
    this._behaviorData.ThrowerX = newValue;
  }
  _getThrowerY() {
    return this._behaviorData.ThrowerY !== undefined ? this._behaviorData.ThrowerY : Number("0") || 0;
  }
  _setThrowerY(newValue) {
    this._behaviorData.ThrowerY = newValue;
  }
  _getBoomerangReturning() {
    return this._behaviorData.BoomerangReturning !== undefined ? this._behaviorData.BoomerangReturning : false;
  }
  _setBoomerangReturning(newValue) {
    this._behaviorData.BoomerangReturning = newValue;
  }
  _toggleBoomerangReturning() {
    this._setBoomerangReturning(!this._getBoomerangReturning());
  }
}

/**
 * Shared data generated from Boomerang
 */
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.SharedData = class BoomerangSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Boomerang_BoomerangSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Boomerang_BoomerangSharedData = new gdjs.evtsExt__Boomerang__Boomerang.Boomerang.SharedData(
      initialData
    );
  }
  return instanceContainer._Boomerang_BoomerangSharedData;
}

// Methods:
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].addForceTowardPosition((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowerX()), (gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowerY()), (gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getThrowSpeed()), 0);
}
}}

}


};gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBoomerangReturning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].timerElapsedTime("__Boomerang_ReturnTimeTimer", (gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getReturnTime())) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ReturnBoomerang((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsBoomerangReturning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].rotate((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRotation()), runtimeScene);
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ThrowSpeed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ReturnTime")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotation((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Rotation")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].addPolarForce((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ThrowSpeed")) || 0 : 0), 1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getY() - ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].getHeight()) / 2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngle = function(Angle, ThrowSpeed, ReturnTime, Rotation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
if (argName === "ThrowSpeed") return ThrowSpeed;
if (argName === "ReturnTime") return ReturnTime;
if (argName === "Rotation") return Rotation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowSpeed((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ThrowSpeed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ReturnTime")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setRotation((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Rotation")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].addForceTowardPosition((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionX")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ThrowSpeed")) || 0 : 0), 1);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getY() - ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].getHeight()) / 2));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPosition = function(PositionX, PositionY, ThrowSpeed, ReturnTime, Rotation, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "ThrowSpeed") return ThrowSpeed;
if (argName === "ReturnTime") return ReturnTime;
if (argName === "Rotation") return Rotation;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ThrowBoomerangPositionContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].removeTimer("__Boomerang_ReturnTimeTimer");
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBoomerangReturning(true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].clearForces();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].getY() + ((gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1[i].getHeight()) / 2));
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerang = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.ReturnBoomerangContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setReturnTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ReturnTime")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTime = function(ReturnTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ReturnTime") return ReturnTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.SetReturnTimeContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects2= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thrower"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowerX((( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1[0].getCenterXInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setThrowerY((( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1[0].getCenterYInScene()));
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrower = function(Thrower, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Thrower": Thrower
},
  _objectArraysMap: {
"Object": thisObjectList
, "Thrower": gdjs.objectsListsToArray(Thrower)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.GDThrowerObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.TrackingThrowerContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBoomerangReturning() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1[k] = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturning = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.IsBoomerangReturningContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1[i].removeTimer("__Boomerang_ReturnTimeTimer");
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext = {};
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects2= [];


gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1[i].resetTimer("__Boomerang_ReturnTimeTimer");
}
}}

}


};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Boomerang__Boomerang.Boomerang.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Boomerang::Boomerang", gdjs.evtsExt__Boomerang__Boomerang.Boomerang);
