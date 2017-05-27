

function Wave(cx,ctx){
  this.cx = cx;
  this.ctx = ctx;
  this.SEPARATION = 100;
  this.AMOUNTX = 50;
  this.AMOUNTY = 50;
  this.container = ;   //
  this.camera = ;
  this.scene = ;
  this.renderer = ;
  this.particles = ;
  this.particle = ;
  this.count = ;
  this.mouseX = ;
  this.mouseY = ;
  this.camera = ;
}

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

Wave.prototype = {  
  construct:function(){