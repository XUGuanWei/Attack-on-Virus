(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Nigger_atlas_", frames: [[0,0,1080,720],[1358,956,192,192],[582,825,192,192],[776,825,192,192],[970,825,192,192],[1164,956,192,192],[1752,0,192,192],[1752,194,192,192],[1752,388,192,192],[1752,582,192,192],[1282,762,192,192],[1476,762,192,192],[1670,776,192,192],[0,825,192,192],[194,825,192,192],[388,825,192,192],[1552,970,185,80],[0,762,1280,61],[1417,0,333,379],[1082,0,333,379],[1082,381,333,379],[1417,381,333,379],[1164,825,100,100]]}
];


// symbols:



(lib.bg2 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c01 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c02 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.c03 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.c04 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.c05 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.c06 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.c07 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.c08 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.c09 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.c10 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.c11 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.c12 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.c13 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.c14 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.c16 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Money = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.footer = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.run1 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.run2 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.run3 = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.virus = function() {
	this.spriteSheet = ss["Nigger_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Virus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.virus();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Virus, new cjs.Rectangle(0,0,100,100), null);


(lib.NiggerUser = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop:0,run:1,dal:14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(16).call(this.frame_29).wait(1));

	// 圖層_1
	this.instance = new lib.stop();
	this.instance.parent = this;
	this.instance.setTransform(-71,112,0.519,0.541);

	this.instance_1 = new lib.run1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71,112,0.519,0.541);

	this.instance_2 = new lib.run2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-71,112,0.519,0.541);

	this.instance_3 = new lib.run3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-71,112,0.519,0.541);

	this.instance_4 = new lib.c01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-71,119);

	this.instance_5 = new lib.c02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-71,119);

	this.instance_6 = new lib.c03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-71,119);

	this.instance_7 = new lib.c04();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-71,119);

	this.instance_8 = new lib.c05();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-71,119);

	this.instance_9 = new lib.c06();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-71,119);

	this.instance_10 = new lib.c07();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-71,119);

	this.instance_11 = new lib.c08();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-71,119);

	this.instance_12 = new lib.c09();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-71,119);

	this.instance_13 = new lib.c10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-71,119);

	this.instance_14 = new lib.c11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-71,119);

	this.instance_15 = new lib.c12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-71,119);

	this.instance_16 = new lib.c13();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-71,119);

	this.instance_17 = new lib.c14();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-71,119);

	this.instance_18 = new lib.c16();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-71,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.instance_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,112,173,205);


(lib.Footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.footer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Footer, new cjs.Rectangle(0,0,1280,61), null);


// stage content:
(lib.Nigger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.Footer();
	this.instance.parent = this;
	this.instance.setTransform(500.6,474.6,0.781,0.869,0,0,0,640.8,31.7);

	this.instance_1 = new lib.bg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,0,0.926,0.694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500,250,1002,500);
// library properties:
lib.properties = {
	id: '60523E4F619FF74781C197D0D274347B',
	width: 1000,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Nigger_atlas_.png?1589975112242", id:"Nigger_atlas_"}
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
an.compositions['60523E4F619FF74781C197D0D274347B'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;