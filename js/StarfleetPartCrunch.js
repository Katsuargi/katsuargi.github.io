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

var workingPhaser = {
	effect: [currentPhaser].effect * (1+3.5*Math.log10(0.7*numberOfParts+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti,
	weight: [currentPhaser].weight,
	totalWeight: [currentPhaser].weight + [currentPhaser].uWeight*numberOfParts,
	sr: [currentPhaser].sr * workingPhaser.totalWeight * (frame.srMod * subFrame.srMod),
	power: ([currentPhaser].power + ([currentPhaser].sPower * frame.size) + ([currentPhaser].uPower * numberOfParts)),
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

function  () {

}