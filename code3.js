gdjs.Level_322Code = {};
gdjs.Level_322Code.GDBtnJumpObjects1_1final = [];

gdjs.Level_322Code.GDBtnLeftObjects1_1final = [];

gdjs.Level_322Code.GDBtnRightObjects1_1final = [];

gdjs.Level_322Code.GDPlanetObjects1_1final = [];

gdjs.Level_322Code.GDSpaceGuyObjects1_1final = [];

gdjs.Level_322Code.GDPlanetObjects1= [];
gdjs.Level_322Code.GDPlanetObjects2= [];
gdjs.Level_322Code.GDSpaceGuyObjects1= [];
gdjs.Level_322Code.GDSpaceGuyObjects2= [];
gdjs.Level_322Code.GDMessageObjects1= [];
gdjs.Level_322Code.GDMessageObjects2= [];
gdjs.Level_322Code.GDBtnLeftObjects1= [];
gdjs.Level_322Code.GDBtnLeftObjects2= [];
gdjs.Level_322Code.GDBtnRightObjects1= [];
gdjs.Level_322Code.GDBtnRightObjects2= [];
gdjs.Level_322Code.GDBtnJumpObjects1= [];
gdjs.Level_322Code.GDBtnJumpObjects2= [];
gdjs.Level_322Code.GDLEVELObjects1= [];
gdjs.Level_322Code.GDLEVELObjects2= [];
gdjs.Level_322Code.GDNewObjectObjects1= [];
gdjs.Level_322Code.GDNewObjectObjects2= [];

gdjs.Level_322Code.conditionTrue_0 = {val:false};
gdjs.Level_322Code.condition0IsTrue_0 = {val:false};
gdjs.Level_322Code.condition1IsTrue_0 = {val:false};
gdjs.Level_322Code.condition2IsTrue_0 = {val:false};
gdjs.Level_322Code.conditionTrue_1 = {val:false};
gdjs.Level_322Code.condition0IsTrue_1 = {val:false};
gdjs.Level_322Code.condition1IsTrue_1 = {val:false};
gdjs.Level_322Code.condition2IsTrue_1 = {val:false};
gdjs.Level_322Code.conditionTrue_2 = {val:false};
gdjs.Level_322Code.condition0IsTrue_2 = {val:false};
gdjs.Level_322Code.condition1IsTrue_2 = {val:false};
gdjs.Level_322Code.condition2IsTrue_2 = {val:false};


gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpaceGuyObjects2Objects = Hashtable.newFrom({"SpaceGuy": gdjs.Level_322Code.GDSpaceGuyObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlanetObjects2Objects = Hashtable.newFrom({"Planet": gdjs.Level_322Code.GDPlanetObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnJumpObjects2Objects = Hashtable.newFrom({"BtnJump": gdjs.Level_322Code.GDBtnJumpObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnJumpObjects2Objects = Hashtable.newFrom({"BtnJump": gdjs.Level_322Code.GDBtnJumpObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnRightObjects2Objects = Hashtable.newFrom({"BtnRight": gdjs.Level_322Code.GDBtnRightObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnLeftObjects2Objects = Hashtable.newFrom({"BtnLeft": gdjs.Level_322Code.GDBtnLeftObjects2});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.Level_322Code.GDNewObjectObjects1});gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpaceGuyObjects1Objects = Hashtable.newFrom({"SpaceGuy": gdjs.Level_322Code.GDSpaceGuyObjects1});gdjs.Level_322Code.eventsList0xb0a98 = function(runtimeScene) {

{



}


{

gdjs.Level_322Code.GDBtnJumpObjects1.length = 0;

gdjs.Level_322Code.GDPlanetObjects1.length = 0;

gdjs.Level_322Code.GDSpaceGuyObjects1.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDBtnJumpObjects1_1final.length = 0;gdjs.Level_322Code.GDPlanetObjects1_1final.length = 0;gdjs.Level_322Code.GDSpaceGuyObjects1_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.GDPlanetObjects2.createFrom(runtimeScene.getObjects("Planet"));
gdjs.Level_322Code.GDSpaceGuyObjects2.createFrom(runtimeScene.getObjects("SpaceGuy"));
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.object.distanceTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpaceGuyObjects2Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDPlanetObjects2Objects, 100, true);
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDPlanetObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDPlanetObjects1_1final.indexOf(gdjs.Level_322Code.GDPlanetObjects2[j]) === -1 )
            gdjs.Level_322Code.GDPlanetObjects1_1final.push(gdjs.Level_322Code.GDPlanetObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.Level_322Code.GDSpaceGuyObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDSpaceGuyObjects1_1final.indexOf(gdjs.Level_322Code.GDSpaceGuyObjects2[j]) === -1 )
            gdjs.Level_322Code.GDSpaceGuyObjects1_1final.push(gdjs.Level_322Code.GDSpaceGuyObjects2[j]);
    }
}
}
{
gdjs.Level_322Code.GDBtnJumpObjects2.createFrom(runtimeScene.getObjects("BtnJump"));
{gdjs.Level_322Code.conditionTrue_2 = gdjs.Level_322Code.condition1IsTrue_1;
gdjs.Level_322Code.condition0IsTrue_2.val = false;
gdjs.Level_322Code.condition1IsTrue_2.val = false;
{
gdjs.Level_322Code.condition0IsTrue_2.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if ( gdjs.Level_322Code.condition0IsTrue_2.val ) {
{
gdjs.Level_322Code.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnJumpObjects2Objects, runtimeScene, true, true);
}}
gdjs.Level_322Code.conditionTrue_2.val = true && gdjs.Level_322Code.condition0IsTrue_2.val && gdjs.Level_322Code.condition1IsTrue_2.val;
}
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDBtnJumpObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDBtnJumpObjects1_1final.indexOf(gdjs.Level_322Code.GDBtnJumpObjects2[j]) === -1 )
            gdjs.Level_322Code.GDBtnJumpObjects1_1final.push(gdjs.Level_322Code.GDBtnJumpObjects2[j]);
    }
}
}
{
gdjs.Level_322Code.GDBtnJumpObjects1.createFrom(gdjs.Level_322Code.GDBtnJumpObjects1_1final);
gdjs.Level_322Code.GDPlanetObjects1.createFrom(gdjs.Level_322Code.GDPlanetObjects1_1final);
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(gdjs.Level_322Code.GDSpaceGuyObjects1_1final);
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_322Code.GDPlanetObjects1 */
/* Reuse gdjs.Level_322Code.GDSpaceGuyObjects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceTowardPosition((( gdjs.Level_322Code.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlanetObjects1[0].getPointX("Centre")), (( gdjs.Level_322Code.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlanetObjects1[0].getPointY("Centre")), 7, runtimeScene);
}
}}

}


{



}


{

gdjs.Level_322Code.GDBtnJumpObjects1.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
gdjs.Level_322Code.condition1IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDBtnJumpObjects1_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.GDBtnJumpObjects2.createFrom(runtimeScene.getObjects("BtnJump"));
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnJumpObjects2Objects, runtimeScene, true, false);
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDBtnJumpObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDBtnJumpObjects1_1final.indexOf(gdjs.Level_322Code.GDBtnJumpObjects2[j]) === -1 )
            gdjs.Level_322Code.GDBtnJumpObjects1_1final.push(gdjs.Level_322Code.GDBtnJumpObjects2[j]);
    }
}
}
{
gdjs.Level_322Code.GDBtnJumpObjects1.createFrom(gdjs.Level_322Code.GDBtnJumpObjects1_1final);
}
}
}if ( gdjs.Level_322Code.condition0IsTrue_0.val ) {
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition1IsTrue_0;
gdjs.Level_322Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7982700);
}
}}
if (gdjs.Level_322Code.condition1IsTrue_0.val) {
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].getBehavior("Physics").applyImpulseUsingPolarCoordinates((gdjs.Level_322Code.GDSpaceGuyObjects1[i].getAngle()) - 90, 1, runtimeScene);
}
}}

}


{



}


{

gdjs.Level_322Code.GDBtnRightObjects1.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDBtnRightObjects1_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.GDBtnRightObjects2.createFrom(runtimeScene.getObjects("BtnRight"));
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnRightObjects2Objects, runtimeScene, true, false);
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDBtnRightObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDBtnRightObjects1_1final.indexOf(gdjs.Level_322Code.GDBtnRightObjects2[j]) === -1 )
            gdjs.Level_322Code.GDBtnRightObjects1_1final.push(gdjs.Level_322Code.GDBtnRightObjects2[j]);
    }
}
}
{
gdjs.Level_322Code.GDBtnRightObjects1.createFrom(gdjs.Level_322Code.GDBtnRightObjects1_1final);
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceUsingPolarCoordinates((gdjs.Level_322Code.GDSpaceGuyObjects1[i].getDirectionOrAngle()), 0.5, runtimeScene);
}
}}

}


{

gdjs.Level_322Code.GDBtnLeftObjects1.length = 0;


gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_322Code.conditionTrue_1 = gdjs.Level_322Code.condition0IsTrue_0;
gdjs.Level_322Code.GDBtnLeftObjects1_1final.length = 0;gdjs.Level_322Code.condition0IsTrue_1.val = false;
gdjs.Level_322Code.condition1IsTrue_1.val = false;
{
gdjs.Level_322Code.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.Level_322Code.condition0IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
}
}
{
gdjs.Level_322Code.GDBtnLeftObjects2.createFrom(runtimeScene.getObjects("BtnLeft"));
gdjs.Level_322Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDBtnLeftObjects2Objects, runtimeScene, true, false);
if( gdjs.Level_322Code.condition1IsTrue_1.val ) {
    gdjs.Level_322Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level_322Code.GDBtnLeftObjects2.length;j<jLen;++j) {
        if ( gdjs.Level_322Code.GDBtnLeftObjects1_1final.indexOf(gdjs.Level_322Code.GDBtnLeftObjects2[j]) === -1 )
            gdjs.Level_322Code.GDBtnLeftObjects1_1final.push(gdjs.Level_322Code.GDBtnLeftObjects2[j]);
    }
}
}
{
gdjs.Level_322Code.GDBtnLeftObjects1.createFrom(gdjs.Level_322Code.GDBtnLeftObjects1_1final);
}
}
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].getBehavior("Physics").applyForceUsingPolarCoordinates((gdjs.Level_322Code.GDSpaceGuyObjects1[i].getDirectionOrAngle())+180, 0.5, runtimeScene);
}
}}

}


{



}


{


{
gdjs.Level_322Code.GDPlanetObjects1.createFrom(runtimeScene.getObjects("Planet"));
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));
{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].rotateTowardPosition((( gdjs.Level_322Code.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlanetObjects1[0].getPointX("Centre")), (( gdjs.Level_322Code.GDPlanetObjects1.length === 0 ) ? 0 :gdjs.Level_322Code.GDPlanetObjects1[0].getPointY("Centre")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDSpaceGuyObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDSpaceGuyObjects1[i].setAngle(gdjs.Level_322Code.GDSpaceGuyObjects1[i].getAngle() - (90));
}
}}

}


{

gdjs.Level_322Code.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
gdjs.Level_322Code.GDSpaceGuyObjects1.createFrom(runtimeScene.getObjects("SpaceGuy"));

gdjs.Level_322Code.condition0IsTrue_0.val = false;
{
gdjs.Level_322Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDNewObjectObjects1Objects, gdjs.Level_322Code.mapOfGDgdjs_46Level_95322Code_46GDSpaceGuyObjects1Objects, false, runtimeScene);
}if (gdjs.Level_322Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 3", false);
}}

}


}; //End of gdjs.Level_322Code.eventsList0xb0a98


gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Level_322Code.GDPlanetObjects1.length = 0;
gdjs.Level_322Code.GDPlanetObjects2.length = 0;
gdjs.Level_322Code.GDSpaceGuyObjects1.length = 0;
gdjs.Level_322Code.GDSpaceGuyObjects2.length = 0;
gdjs.Level_322Code.GDMessageObjects1.length = 0;
gdjs.Level_322Code.GDMessageObjects2.length = 0;
gdjs.Level_322Code.GDBtnLeftObjects1.length = 0;
gdjs.Level_322Code.GDBtnLeftObjects2.length = 0;
gdjs.Level_322Code.GDBtnRightObjects1.length = 0;
gdjs.Level_322Code.GDBtnRightObjects2.length = 0;
gdjs.Level_322Code.GDBtnJumpObjects1.length = 0;
gdjs.Level_322Code.GDBtnJumpObjects2.length = 0;
gdjs.Level_322Code.GDLEVELObjects1.length = 0;
gdjs.Level_322Code.GDLEVELObjects2.length = 0;
gdjs.Level_322Code.GDNewObjectObjects1.length = 0;
gdjs.Level_322Code.GDNewObjectObjects2.length = 0;

gdjs.Level_322Code.eventsList0xb0a98(runtimeScene);
return;
}
gdjs['Level_322Code'] = gdjs.Level_322Code;
