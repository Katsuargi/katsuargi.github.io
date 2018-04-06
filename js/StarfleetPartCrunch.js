var userInput = {
	lowCutOff: 5,
	highCutOff: 6,
}

var part1 = {
	effect: .975,
	weight: 8,
	uWeight: 14,
	sr: 0.08,
	power: 5,
	sPower: 2.5,
	uPower: 1.75,
	o: .32,
	e: .32,
	t: .01,
	type: 1,
	name: "HPh",
}

var part2 = {
	effect: .8,
	weight: 5,
	uWeight: 10,
	sr: 0.04,
	power: 3,
	sPower: 1.5,
	uPower: 1,
	o: .15,
	e: .15,
	t: .001,
	type: 1,
	name: "LPh",
}

var part3 = {
	effect: .7,
	weight: 15,
	uWeight: 10,
	sr: 0.1,
	power: 4,
	sPower: 0.1,
	uPower: 0.5,
	o: .15,
	e: .15,
	t: 0,
	type: 3,
	name: "HTor",
}

var part4 = {
	effect: .7,
	weight: 12,
	uWeight: 9,
	sr: 0.05,
	power: 2,
	sPower: 0.15,
	uPower: 0.75,
	o: .2,
	e: .2,
	t: 0,
	type: 3,
	name: "LTor",
}

var part5 = {
	effect: .6,
	weight: 12,
	uWeight: 7,
	sr: 0.05,
	power: 2,
	sPower: 0.15,
	uPower: 0.75,
	o: .2,
	e: .2,
	t: 0,
	type: 0,
	name: "LSens",
}

var part6 = {
	effect: .8,
	weight: 12,
	uWeight: 9,
	sr: 0.05,
	power: 2,
	sPower: 0.15,
	uPower: 0.75,
	o: .2,
	e: .2,
	t: 0,
	type: 0,
	name: "HSens",
}

var currentPhaser = {
	effect: .975,
	weight: 8,
	uWeight: 14,
	sr: 0.08,
	power: 5,
	sPower: 2.5,
	uPower: 1.75,
	o: .32,
	e: .32,
	t: .01,
	type: 1,
	name: "HPh",
}

var currentTorpedo = {
	effect: .975,
	weight: 8,
	uWeight: 14,
	sr: 0.08,
	power: 5,
	sPower: 2.5,
	uPower: 1.75,
	o: .32,
	e: .32,
	t: .01,
	type: 1,
	name: "HPh",
}

var frame = {
	maxWeight: 2700,
	size: 9,
	oMod: .825,
	eMod: .825,
	tMod: .775,
	srMod: 1.1,
}

var subFrame = {
	maxWeight: 675,
	weight: 30,
	cMulti: 1.14,
	oMod: .88,
	eMod: .78,
	tMod: .88,
	srMod: 1,
}



var currentTorpedo;
var numberOfPhasers = 0;
var numberOfTorpedos = 0;

var workingPhaser = {
	effect: function() {return currentPhaser.effect * (1+3.5*Math.log10(0.7*numberOfPhasers+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti},
	weight: function() {return currentPhaser.weight},
	phaserTotalWeight: function() {return currentPhaser.weight + currentPhaser.uWeight*numberOfPhasers},
	sr: function() {return currentPhaser.sr * (currentPhaser.weight + currentPhaser.uWeight*numberOfPhasers) * (frame.srMod * subFrame.srMod)},
	power: function() {return (currentPhaser.power + (currentPhaser.sPower * frame.size) + (currentPhaser.uPower * numberOfPhasers))},
	o: function() {return currentPhaser.o * (1+Math.log10(numberOfPhasers)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	e: function() {return currentPhaser.e * (1+Math.log10(numberOfPhasers)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	t: function() {return currentPhaser.o * (1+Math.log10(numberOfPhasers)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	type: 1,
	name: function() {return currentPhaser.name},
}

var workingTorpedo = {
	effect: function() {return currentTorpedo.effect * (1+3.5*Math.log10(0.7*numberOfTorpedos+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti},
	weight: function() {return currentTorpedo.weight},
	torpedoTotalWeight: function() {return currentTorpedo.weight + currentTorpedo.uWeight*numberOfTorpedos},
	sr: function() {return currentTorpedo.sr * (currentTorpedo.weight + currentTorpedo.uWeight*numberOfTorpedos) * (frame.srMod * subFrame.srMod)},
	power: function() {return (currentTorpedo.power + (currentTorpedo.sPower * frame.size) + (currentTorpedo.uPower * numberOfTorpedos))},
	o: function() {return currentTorpedo.o * (1+Math.log10(numberOfTorpedos)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	e: function() {return currentTorpedo.e * (1+Math.log10(numberOfTorpedos)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	t: function() {return currentTorpedo.o * (1+Math.log10(numberOfTorpedos)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod)},
	type: function() {return currentTorpedo.type},
	name: function() {return currentTorpedo.name},
}

var partArray = [part1, part2, part3, part4, part5, part6];
var phaserArray = [];
var torpedoArray = [];
var otherArray = [];

var t = document.createElement("table");
var tb = document.createElement("tbody");
var tRow = document.createElement("tr");
var tCell=[];
var tCellText=[];

for (var i = 0; i <= 11; i++) {
		tCell[i] = document.createElement("td");
}
tCellText[0] = document.createTextNode("PName1");
tCellText[1] = document.createTextNode("Parts1");
tCellText[2] = document.createTextNode("PName2");
tCellText[3] = document.createTextNode("Parts2");
tCellText[4] = document.createTextNode("Effect");
tCellText[5] = document.createTextNode("Weight");
tCellText[6] = document.createTextNode("SR");
tCellText[7] = document.createTextNode("BR");
tCellText[8] = document.createTextNode("Officers");
tCellText[9] = document.createTextNode("Enlisted");
tCellText[10] = document.createTextNode("Technicians");
tCellText[11] = document.createTextNode("Power Cost");
for (var i = 0; i <= 11; i++) {
		tCell[i].appendChild(tCellText[i]);
		tRow.appendChild(tCell[i]);
}
tb.appendChild(tRow);
t.appendChild(tb);
document.getElementById("display-area").appendChild(t);

function sort() {
	for (i=0; i < partArray.length; i++){
		if (partArray[i].type === 1 || partArray[i].type === 2){
			phaserArray.push(partArray[i])
		}
		if (partArray[i].type === 3){
			torpedoArray.push(partArray[i])
		}
		if (partArray[i].type === 0){
			otherArray.push(partArray[i])
		}
		console.log(phaserArray);
		console.log(torpedoArray);
	}
}

function partMixer() {
	var combinedEffect;
	var combinedWeight = 0;
	var combinedPower;
	var combinedEff;
	var combinedSr;
	var combinedBr;
	var combinedO;
	var combinedE;
	var combinedT;
	var x = 0;
	var y = 0;
	currentPhaser = phaserArray[x];
	currentTorpedo = torpedoArray[y];
	numberOfPhasers = 1;
	numberOfTorpedos = 0;
	function table(){
		var row = document.createElement("tr");
		var cell = [];
		var partValues = [];
		for (var i = 0; i <= 11; i++) {
			cell[i] = document.createElement("td");
		}
		partValues[0] = document.createTextNode(phaserArray[x].name);
	    partValues[1] = document.createTextNode(numberOfPhasers);
	    partValues[2] = document.createTextNode(torpedoArray[y].name);
	    partValues[3] = document.createTextNode(numberOfTorpedos);
	    partValues[4] = document.createTextNode(combinedEffect);
	    partValues[5] = document.createTextNode(combinedWeight);
	    partValues[6] = document.createTextNode(combinedSr);
	    partValues[7] = document.createTextNode(combinedBr);
	    partValues[8] = document.createTextNode(combinedO);
	    partValues[9] = document.createTextNode(combinedE);
	    partValues[10] = document.createTextNode(combinedT);
	    partValues[11] = document.createTextNode(combinedPower);
	    for (var i = 0; i <= 11; i++) {
			cell[i].appendChild(partValues[i]);
			row.appendChild(cell[i]);
		}
	    tb.appendChild(row);
	    t.appendChild(tb);
	    document.getElementById("display-area").appendChild(t);
	}
	while (x <= phaserArray.length) {
		currentPhaser = phaserArray[x];
		currentTorpedo = torpedoArray[y];
		combinedEffect = workingPhaser.effect() + workingTorpedo.effect();
		if (combinedEffect <= userInput.highCutOff && combinedEffect >= userInput.lowCutOff){
			combinedWeight = workingPhaser.phaserTotalWeight() + workingTorpedo.torpedoTotalWeight();
			combinedPower = workingPhaser.power() + workingTorpedo.power();
			combinedEff = combinedEffect / combinedWeight;
			combinedSr = workingPhaser.sr() + workingTorpedo.sr();
			combinedBr = combinedWeight / 10;
			combinedO = workingPhaser.o() + workingTorpedo.o();
			combinedE = workingPhaser.e() + workingTorpedo.e();
			combinedT = workingPhaser.t() + workingTorpedo.t();
			console.log(phaserArray[x].name);
			console.log(torpedoArray[y].name);
			table();
		}
		numberOfTorpedos = numberOfTorpedos + 1;
		if (numberOfTorpedos == 13) {numberOfTorpedos = 0; y = y + 1;}
		if (y >= torpedoArray.length) {numberOfTorpedos = 0; y = 0; numberOfPhasers = numberOfPhasers + 1;}
		if (numberOfPhasers == 13) {numberOfPhasers = 0; x = x+1;}
	}
}