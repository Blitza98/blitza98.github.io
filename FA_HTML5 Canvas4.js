(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ATuntijaBlue = function() {
	this.initialize(img.ATuntijaBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,122);


(lib.AuntijaRed = function() {
	this.initialize(img.AuntijaRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,123);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,54);


(lib.benisBlue = function() {
	this.initialize(img.benisBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.benisRed = function() {
	this.initialize(img.benisRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.Field = function() {
	this.initialize(img.Field);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1556,773);


(lib.kgmBlue = function() {
	this.initialize(img.kgmBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,122);


(lib.kgmRed = function() {
	this.initialize(img.kgmRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,122);


(lib.KimiBlue = function() {
	this.initialize(img.KimiBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,117);


(lib.KimiRed = function() {
	this.initialize(img.KimiRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.MagicBlue = function() {
	this.initialize(img.MagicBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,122);


(lib.MagicRed = function() {
	this.initialize(img.MagicRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,122);


(lib.PikaBlue = function() {
	this.initialize(img.PikaBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,115);


(lib.PikaRed = function() {
	this.initialize(img.PikaRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,116);


(lib.SanRooBlue = function() {
	this.initialize(img.SanRooBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,115);


(lib.SanRooRed = function() {
	this.initialize(img.SanRooRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,115);


(lib.saviolaBlue = function() {
	this.initialize(img.saviolaBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,116);


(lib.saviolaRed = function() {
	this.initialize(img.saviolaRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,115);


(lib.Sero07Blue = function() {
	this.initialize(img.Sero07Blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,116);


(lib.Sero07Red = function() {
	this.initialize(img.Sero07Red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,116);


(lib.SpartacusBlue = function() {
	this.initialize(img.SpartacusBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,122);


(lib.SpartacusRed = function() {
	this.initialize(img.SpartacusRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,122);


(lib.theBossBlue = function() {
	this.initialize(img.theBossBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,116);


(lib.theBossRed = function() {
	this.initialize(img.theBossRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,116);


(lib.VeraBlue = function() {
	this.initialize(img.VeraBlue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,116);


(lib.VeraRed = function() {
	this.initialize(img.VeraRed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,116);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.ball();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4545,0.4546);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,25,24.6), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.VeraRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,206,116), null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.VeraBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,204,116), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.theBossRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,116,116), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.theBossBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,0,114,116), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.SpartacusRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,144,122), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.SpartacusBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,143,122), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Sero07Red();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,101,116), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.Sero07Blue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,101,116), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.saviolaRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,98,115), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.saviolaBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,98,116), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.SanRooRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,115,115), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.SanRooBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,115,115), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.PikaRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,79,116), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.PikaBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,80,115), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MagicRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,84,122), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.MagicBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,83,122), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.KimiRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,79,116), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.KimiBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,79,117), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.kgmRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,80,122), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.kgmBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,79,122), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.benisRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,79,116), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.benisBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,79,116), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.AuntijaRed();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,113,123), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.ATuntijaBlue();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,113,122), null);


// stage content:
(lib.FA_HTML5Canvas3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ball.on("pressmove", goball)
		
		function goball(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.ATuntijaBlue.on("pressmove", goATuntijaBlue)
		
		function goATuntijaBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.benisBlue.on("pressmove", gobenisBlue)
		
		function gobenisBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.KimiBlue.on("pressmove", goKimiBlue)
		
		function goKimiBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.MagicBlue.on("pressmove", goMagicBlue)
		
		function goMagicBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.kgmBlue.on("pressmove", gokgmBlue)
		
		function gokgmBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.theBossBlue.on("pressmove", gotheBossBlue)
		
		function gotheBossBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.SanRooBlue.on("pressmove", goSanRooBlue)
		
		function goSanRooBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.SpartacusBlue.on("pressmove", goSpartacusBlue)
		
		function goSpartacusBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.saviolaBlue.on("pressmove", gosaviolaBlue)
		
		function gosaviolaBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.Sero07Blue.on("pressmove", goSero07Blue)
		
		function goSero07Blue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.VeraBlue.on("pressmove", goVeraBlue)
		
		function goVeraBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.PikaBlue.on("pressmove", goPikaBlue)
		
		function goPikaBlue(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.ATuntijaRed.on("pressmove", goATuntijaRed)
		
		function goATuntijaRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.benisRed.on("pressmove", gobenisRed)
		
		function gobenisRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.KimiRed.on("pressmove", goKimiRed)
		
		function goKimiRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.MagicRed.on("pressmove", goMagicRed)
		
		function goMagicRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.kgmRed.on("pressmove", gokgmRed)
		
		function gokgmRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.theBossRed.on("pressmove", gotheBossRed)
		
		function gotheBossRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.SanRooRed.on("pressmove", goSanRooRed)
		
		function goSanRooRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.SpartacusRed.on("pressmove", goSpartacusRed)
		
		function goSpartacusRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.saviolaRed.on("pressmove", gosaviolaRed)
		
		function gosaviolaRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.Sero07Red.on("pressmove", goSero07Red)
		
		function goSero07Red(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.VeraRed.on("pressmove", goVeraRed)
		
		function goVeraRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
		
		this.PikaRed.on("pressmove", goPikaRed)
		
		function goPikaRed(e){
			e.currentTarget.x= e.stageX
			e.currentTarget.y= e.stageY
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene_1
	this.ball = new lib.Symbol26();
	this.ball.name = "ball";
	this.ball.parent = this;
	this.ball.setTransform(778,382.95,1,1,0,0,0,12.5,12.3);

	this.VeraRed = new lib.Symbol24();
	this.VeraRed.name = "VeraRed";
	this.VeraRed.parent = this;
	this.VeraRed.setTransform(1511.9,424.2,0.5,0.5,0,0,0,103,58);

	this.VeraBlue = new lib.Symbol23();
	this.VeraBlue.name = "VeraBlue";
	this.VeraBlue.parent = this;
	this.VeraBlue.setTransform(46.15,718.5,0.5,0.5,0,0,0,102,58);

	this.theBossRed = new lib.Symbol22();
	this.theBossRed.name = "theBossRed";
	this.theBossRed.parent = this;
	this.theBossRed.setTransform(1510.45,488.5,0.5,0.5,0,0,0,58,58.1);

	this.theBossBlue = new lib.Symbol21();
	this.theBossBlue.name = "theBossBlue";
	this.theBossBlue.parent = this;
	this.theBossBlue.setTransform(47,660.55,0.5,0.5,0,0,0,57,58.1);

	this.SpartacusRed = new lib.Symbol20();
	this.SpartacusRed.name = "SpartacusRed";
	this.SpartacusRed.parent = this;
	this.SpartacusRed.setTransform(1510.85,360.25,0.4917,0.4918,0,0,0,72.1,61.1);

	this.SpartacusBlue = new lib.Symbol19();
	this.SpartacusBlue.name = "SpartacusBlue";
	this.SpartacusBlue.parent = this;
	this.SpartacusBlue.setTransform(46.6,601.55,0.4916,0.4918,0,0,0,71.5,61.1);

	this.Sero07Red = new lib.Symbol18();
	this.Sero07Red.name = "Sero07Red";
	this.Sero07Red.parent = this;
	this.Sero07Red.setTransform(1513,291.8,0.5,0.5,0,0,0,50.6,58.1);

	this.Sero07Blue = new lib.Symbol17();
	this.Sero07Blue.name = "Sero07Blue";
	this.Sero07Blue.parent = this;
	this.Sero07Blue.setTransform(46.3,542.55,0.5,0.5,0,0,0,50.6,58.1);

	this.saviolaRed = new lib.Symbol16();
	this.saviolaRed.name = "saviolaRed";
	this.saviolaRed.parent = this;
	this.saviolaRed.setTransform(1514.35,226.95,0.5041,0.5043,0,0,0,49.1,57.6);

	this.saviolaBlue = new lib.Symbol15();
	this.saviolaBlue.name = "saviolaBlue";
	this.saviolaBlue.parent = this;
	this.saviolaBlue.setTransform(47.05,478.55,0.5,0.5,0,0,0,49.1,58);

	this.SanRooRed = new lib.Symbol14();
	this.SanRooRed.name = "SanRooRed";
	this.SanRooRed.parent = this;
	this.SanRooRed.setTransform(1513,158.5,0.5043,0.5043,0,0,0,57.6,57.5);

	this.SanRooBlue = new lib.Symbol13();
	this.SanRooBlue.name = "SanRooBlue";
	this.SanRooBlue.parent = this;
	this.SanRooBlue.setTransform(48.35,412.85,0.5043,0.5043,0,0,0,57.6,57.5);

	this.PikaRed = new lib.Symbol12();
	this.PikaRed.name = "PikaRed";
	this.PikaRed.parent = this;
	this.PikaRed.setTransform(1513.15,675,0.5,0.5,0,0,0,39.5,58);

	this.PikaBlue = new lib.Symbol11();
	this.PikaBlue.name = "PikaBlue";
	this.PikaBlue.parent = this;
	this.PikaBlue.setTransform(47.4,349.75,0.5038,0.5043,0,0,0,40,57.5);

	this.MagicRed = new lib.Symbol10();
	this.MagicRed.name = "MagicRed";
	this.MagicRed.parent = this;
	this.MagicRed.setTransform(1514.1,737.75,0.4917,0.4918,0,0,0,42.1,61);

	this.MagicBlue = new lib.Symbol9();
	this.MagicBlue.name = "MagicBlue";
	this.MagicBlue.parent = this;
	this.MagicBlue.setTransform(47.9,285.95,0.4916,0.4918,0,0,0,41.5,61.1);

	this.KimiRed = new lib.Symbol8();
	this.KimiRed.name = "KimiRed";
	this.KimiRed.parent = this;
	this.KimiRed.setTransform(1511.95,612.5,0.5,0.5,0,0,0,39.6,58);

	this.KimiBlue = new lib.Symbol7();
	this.KimiBlue.name = "KimiBlue";
	this.KimiBlue.parent = this;
	this.KimiBlue.setTransform(45.8,220.2,0.4956,0.4957,0,0,0,39.6,58.5);

	this.kgmRed = new lib.Symbol6();
	this.kgmRed.name = "kgmRed";
	this.kgmRed.parent = this;
	this.kgmRed.setTransform(1512.05,550,0.4912,0.4918,0,0,0,40.1,61);

	this.kgmBlue = new lib.Symbol5();
	this.kgmBlue.name = "kgmBlue";
	this.kgmBlue.parent = this;
	this.kgmBlue.setTransform(45.7,159.55,0.4911,0.4918,0,0,0,39.6,61.1);

	this.benisRed = new lib.Symbol4();
	this.benisRed.name = "benisRed";
	this.benisRed.parent = this;
	this.benisRed.setTransform(1513.2,92.6,0.4993,0.5,0,0,0,39.6,58.2);

	this.benisBlue = new lib.Symbol3();
	this.benisBlue.name = "benisBlue";
	this.benisBlue.parent = this;
	this.benisBlue.setTransform(45.8,92.55,0.4981,0.5,0,0,0,39.8,58.1);

	this.ATuntijaRed = new lib.Symbol2();
	this.ATuntijaRed.name = "ATuntijaRed";
	this.ATuntijaRed.parent = this;
	this.ATuntijaRed.setTransform(1512.75,30,0.4872,0.4878,0,0,0,56.6,61.5);

	this.ATuntijaBlue = new lib.Symbol1();
	this.ATuntijaBlue.name = "ATuntijaBlue";
	this.ATuntijaBlue.parent = this;
	this.ATuntijaBlue.setTransform(46.95,30,0.4911,0.4918,0,0,0,56.3,61);

	this.instance = new lib.Field();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Am1kZINrAAIAAIzItrAAg");
	this.shape.setTransform(671.575,149.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(1,1,1).p("As5jHIZyAAIAAGPI5yAAg");
	this.shape_1.setTransform(775.45,27.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Am1EaIAAozINrAAIAAIzg");
	this.shape_2.setTransform(671.575,149.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.008)").s().p("As4DIIAAmPIZxAAIAAGPg");
	this.shape_3.setTransform(775.45,27.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.ATuntijaBlue},{t:this.ATuntijaRed},{t:this.benisBlue},{t:this.benisRed},{t:this.kgmBlue},{t:this.kgmRed},{t:this.KimiBlue},{t:this.KimiRed},{t:this.MagicBlue},{t:this.MagicRed},{t:this.PikaBlue},{t:this.PikaRed},{t:this.SanRooBlue},{t:this.SanRooRed},{t:this.saviolaBlue},{t:this.saviolaRed},{t:this.Sero07Blue},{t:this.Sero07Red},{t:this.SpartacusBlue},{t:this.SpartacusRed},{t:this.theBossBlue},{t:this.theBossRed},{t:this.VeraBlue},{t:this.VeraRed},{t:this.ball}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(773.2,386.5,790.2,386.5);
// library properties:
lib.properties = {
	id: '909C412DED033D4A87A7D7429064468F',
	width: 1556,
	height: 773,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ATuntijaBlue.png", id:"ATuntijaBlue"},
		{src:"images/AuntijaRed.png", id:"AuntijaRed"},
		{src:"images/ball.png", id:"ball"},
		{src:"images/benisBlue.png", id:"benisBlue"},
		{src:"images/benisRed.png", id:"benisRed"},
		{src:"images/Field.png", id:"Field"},
		{src:"images/kgmBlue.png", id:"kgmBlue"},
		{src:"images/kgmRed.png", id:"kgmRed"},
		{src:"images/KimiBlue.png", id:"KimiBlue"},
		{src:"images/KimiRed.png", id:"KimiRed"},
		{src:"images/MagicBlue.png", id:"MagicBlue"},
		{src:"images/MagicRed.png", id:"MagicRed"},
		{src:"images/PikaBlue.png", id:"PikaBlue"},
		{src:"images/PikaRed.png", id:"PikaRed"},
		{src:"images/SanRooBlue.png", id:"SanRooBlue"},
		{src:"images/SanRooRed.png", id:"SanRooRed"},
		{src:"images/saviolaBlue.png", id:"saviolaBlue"},
		{src:"images/saviolaRed.png", id:"saviolaRed"},
		{src:"images/Sero07Blue.png", id:"Sero07Blue"},
		{src:"images/Sero07Red.png", id:"Sero07Red"},
		{src:"images/SpartacusBlue.png", id:"SpartacusBlue"},
		{src:"images/SpartacusRed.png", id:"SpartacusRed"},
		{src:"images/theBossBlue.png", id:"theBossBlue"},
		{src:"images/theBossRed.png", id:"theBossRed"},
		{src:"images/VeraBlue.png", id:"VeraBlue"},
		{src:"images/VeraRed.png", id:"VeraRed"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['909C412DED033D4A87A7D7429064468F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;