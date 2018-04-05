// Variable / part value declarations. Contains pre-set values for testing purposes. (No one wants to input 50+ values for every test run.)

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

var currentPhaser;
var currentTorpedo;
var numberOfPhasers;
var numberOfTorpedos;

var workingPhaser = {
	effect: [currentPhaser].effect * (1+3.5*Math.log10(0.7*numberOfPhasers+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti,
	weight: [currentPhaser].weight,
	phaserTotalWeight: [currentPhaser].weight + [currentPhaser].uWeight*numberOfPhasers,
	sr: [currentPhaser].sr * workingPhaser.totalWeight * (frame.srMod * subFrame.srMod),
	power: ([currentPhaser].power + ([currentPhaser].sPower * frame.size) + ([currentPhaser].uPower * numberOfPhasers)),
	o: [currentPhaser].o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod),
	e: [currentPhaser].e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod),
	t: [currentPhaser].o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod),
	type: 1,
	name: [currentPhaser].name,
}

var partArray = [part1, part2, part3, part4, part5, part6];
var phaserArray = [];
var torpedoArray = [];
var otherArray = [];

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

var partTotalWeight = 0;
var partTotalWeight2 = 0;
var partTotalWeight3 = 0;

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
	var x = 0;
	var y = 0;
	while (totalWeight < subFrame.maxWeight) {
		currentPhaser = phaserArray.[x];
		currentTorpedo = torpedoArray.[y];
		numberOfPhasers = 1;
		numberOfTorpedos = 0;

		combinedEffect = workingPhaser.effect + workingTorpedo.effect;
		combinedWeight = workingPhaser.phaserTotalWeight + workingTorpedo.torpedoTotalWeight;
		combinedPower = workingPhaser.power + workingTorpedo.power;
		combinedEff = combinedEffect / combinedWeight;
		combinedSr = workingPhaser.sr + workingTorpedo.sr;
		combinedBr = combinedWeight / 10;
		combinedO = workingPhaser.o + workingTorpedo.o;
		combinedE = workingPhaser.e + workingTorpedo.e;
		combinedT = workingPhaser.t + workingTorpedo.t;
		print();
		numberOfTorpedos = numberOfTorpedos + 1;
		if (numberOfTorpedos == 13) {numberOfTorpedos = 0; y = y + 1;}
		if (currentTorpedo == NaN) {numberOfTorpedos = 0; y = 0; x = x+1;}
		if (currentPhaser == NaN) {break;}
	}
}