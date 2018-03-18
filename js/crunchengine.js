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
	type: 2,
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

var partArray = [part1, part2, part3, part4];
var phaserArray = [];
var torpedoArray = [];

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

// Custom value input code.

function storeCutoff() {
    userInput.lowCutOff = (document.getElementById("low-cutOff").value);
    userInput.highCutOff = (document.getElementById("high-cutOff").value);
}

function submitValues1(){
	frame.size = parseInt(document.getElementById("shipSize").value);
	frame.maxWeight = parseInt(document.getElementById("frame-max-weight").value);
	frame.oMod = parseFloat(document.getElementById("frame-O-Mod").value);
	frame.eMod = parseFloat(document.getElementById("frame-E-Mod").value);
	frame.tMod = parseFloat(document.getElementById("frame-T-Mod").value);
	frame.srMod = parseFloat(document.getElementById("frame-SR-Mod").value);
	subFrame.maxWeight = parseInt(document.getElementById("subFrame-maxWeight").value);
	subFrame.weight = parseInt(document.getElementById("subFrame-weight").value);
	subFrame.cMulti = parseFloat(document.getElementById("statMulti").value);
	subFrame.oMod = parseFloat(document.getElementById("subFrame-O-Mod").value);
	subFrame.eMod = parseFloat(document.getElementById("subFrame-E-Mod").value);
	subFrame.tMod = parseFloat(document.getElementById("subFrame-T-Mod").value);
	subFrame.srMod = parseFloat(document.getElementById("subFrame-SR-Mod").value);
	part1.effect = parseFloat(document.getElementById("effect1").value);
	part1.weight = parseInt(document.getElementById("weight1").value);
	part1.uWeight = parseInt(document.getElementById("uWeight1").value);
	part1.sr = parseFloat(document.getElementById("sr1").value);
	part1.power = parseFloat(document.getElementById("power1").value);
	part1.sPower = parseFloat(document.getElementById("sPower1").value);
	part1.uPower = parseFloat(document.getElementById("uPower1").value);
	part1.o = parseFloat(document.getElementById("o1").value);
	part1.e = parseFloat(document.getElementById("e1").value);
	part1.t = parseFloat(document.getElementById("t1").value);
	part2.effect = parseFloat(document.getElementById("effect2").value);
	part2.weight = parseInt(document.getElementById("weight2").value);
	part2.uWeight = parseInt(document.getElementById("uWeight2").value);
	part2.sr = parseFloat(document.getElementById("sr2").value);
	part2.power = parseFloat(document.getElementById("power2").value);
	part2.sPower = parseFloat(document.getElementById("sPower2").value);
	part2.uPower = parseFloat(document.getElementById("uPower2").value);
	part2.o = parseFloat(document.getElementById("o2").value);
	part2.e = parseFloat(document.getElementById("e2").value);
	part2.t = parseFloat(document.getElementById("t2").value);
	if (document.getElementById("phaser2").checked == true){
		part2.type = 1;
	} else if (document.getElementById("torpedo2").checked == true){
		part2.type = 2;
	} else if (document.getElementById("burst-launcher2").checked == true){
		part2.type = 3;
	} else if (document.getElementById("other2").checked == true) {
		part2.type = 0;
	}
}

//Initial test project for crunching and generating all legal parts of a single type.

function simpleCrunch() {
	x = 0;
	var t = document.createElement("table");
	var tb = document.createElement("tbody");
	var tRow = document.createElement("tr");
	var tCell=[];
	var tCellText=[];
	for (var i = 0; i <= 9; i++) {
 		tCell[i] = document.createElement("td");
	}
	tCellText[0] = document.createTextNode("Parts1");
	tCellText[1] = document.createTextNode("Eff");
	tCellText[2] = document.createTextNode("Effect");
	tCellText[3] = document.createTextNode("Weight");
	tCellText[4] = document.createTextNode("SR");
	tCellText[5] = document.createTextNode("BR");
	tCellText[6] = document.createTextNode("Officers");
	tCellText[7] = document.createTextNode("Enlisted");
	tCellText[8] = document.createTextNode("Technicians");
	tCellText[9] = document.createTextNode("Power Cost");
	for (var i = 0; i <= 9; i++) {
 		tCell[i].appendChild(tCellText[i]);
 		tRow.appendChild(tCell[i]);
	}
    tb.appendChild(tRow);
    t.appendChild(tb);
    document.getElementById("display-area").appendChild(t);

	    function displayChart() {
			
				var row = document.createElement("tr");
				var cell = [];
				var partValues = [];
				for (var i = 0; i <= 9; i++) {
 					cell[i] = document.createElement("td");
				}
			    partValues[0] = document.createTextNode(x);
			    partValues[1] = document.createTextNode(partEff);
			    partValues[2] = document.createTextNode(partTotalEffect);
			    partValues[3] = document.createTextNode(partTotalWeight);
			    partValues[4] = document.createTextNode(partSrTotal);
			    partValues[5] = document.createTextNode(partBrTotal);
			    partValues[6] = document.createTextNode(oTotal);
			    partValues[7] = document.createTextNode(eTotal);
			    partValues[8] = document.createTextNode(tTotal);
			    partValues[9] = document.createTextNode(partTotalPower);
			    for (var i = 0; i <= 9; i++) {
 					cell[i].appendChild(partValues[i]);
 					row.appendChild(cell[i]);
				}
			    tb.appendChild(row);
			    t.appendChild(tb);
			    document.getElementById("display-area").appendChild(t);
		
		}

	while (partTotalWeight < subFrame.maxWeight) {
		x = x + 1;
		if (part1.type == 1) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti;
			partTotalWeight = (part1.weight + (part1.uWeight * x));
		}
		else if (part1.type == 2) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * subFrame.cMulti;
			partTotalWeight = (part1.weight + (part1.uWeight * x));
		}
		else if (part1.type == 3) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * subFrame.cMulti;
			partTotalWeight = (part1.weight + (part1.uWeight * x)) * 1.5;
		}
		else if (part1.type == 0) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
			partTotalWeight = (part1.weight + (part1.uWeight * x));
		} else {partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
		partTotalPower = (part1.power + (part1.sPower * frame.size) + (part1.uPower * x));
		partEff = (partTotalEffect / partTotalWeight);
		partSrTotal = part1.sr * partTotalWeight *  (frame.srMod*subFrame.srMod);
		partBrTotal = partTotalWeight / 10;
		partPowerTotal = part1.uPower * x + part1.power;
		oTotal = part1.o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
		eTotal = part1.e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
		tTotal = part1.t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
		if (partTotalEffect >= userInput.lowCutOff && userInput.highCutOff >= partTotalEffect) {
			displayChart();
		}
	}
	partTotalWeight = 0;
}

//5th generation test code for generating all legal combinations of parts. Currently works with 2x2. Should now easily be expanded to any number of parts and catagories.
//Lacks complex huristics so n^x hell will quickly outstrip reasonable processing times.

function testOptimization() {
	x = 0;
	a = 0;
	b = 0;
	var cycles = 0;
	for (i=0; i < partArray.length; i++){
		if (partArray[i].type === 1 || partArray[i].type === 2){
			phaserArray.push(partArray[i])
		}
		if (partArray[i].type === 3){
			torpedoArray.push(partArray[i])
		}
		console.log(phaserArray);
		console.log(torpedoArray);
	}
	var t = document.createElement("table");
	var tb = document.createElement("tbody");
	var tRow = document.createElement("tr");
	var tCell=[];
	var tCellText=[];
	var effectArray1 = [];
	var weightArray1 = [];
	var powerArray1 = [];
	var effArray1 = [];
	var srArray1 = [];
	var brArray1 = [];
	var oArray1 = [];
	var eArray1 = [];
	var tArray1 = [];
	var effectArray2 = [];
	var weightArray2 = [];
	var powerArray2 = [];
	var effArray2 = [];
	var srArray2 = [];
	var brArray2 = [];
	var oArray2 = [];
	var eArray2 = [];
	var tArray2 = [];
	var typeArray1 = [];
	var typeArray2 = [];
	var nameArray1 = [];
	var nameArray2 = [];
	var y = 0;
	var z = 0;
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

	function displayChart2() {
			
		var row = document.createElement("tr");
		var cell = [];
		var partValues = [];
		for (var i = 0; i <= 11; i++) {
			cell[i] = document.createElement("td");
		}
		partValues[0] = document.createTextNode(nameArray1[x]);
	    partValues[1] = document.createTextNode(a - 1);
	    partValues[2] = document.createTextNode(nameArray2[y]);
	    partValues[3] = document.createTextNode(b + 1);
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

	while (y < phaserArray.length) {
		while (partTotalWeight < subFrame.maxWeight && x <= 12) {
			x = x + 1;
			a = a + 1;
			if (phaserArray[y].type == 1) {
				partTotalEffect = phaserArray[y].effect * (1+3.5*Math.log10(0.7*x+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti;
				partTotalWeight = (phaserArray[y].weight + (phaserArray[y].uWeight * x));
			}
			else if (phaserArray[y].type == 2) {
				partTotalEffect = phaserArray[y].effect * (1+3.5*Math.log10(0.7*x+0.3)) * subFrame.cMulti;
				partTotalWeight = (phaserArray[y].weight + (phaserArray[y].uWeight * x));
			}
			else if (phaserArray[y].type == 0) {
				partTotalEffect = phaserArray[y].effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
				partTotalWeight = (phaserArray[y].weight + (phaserArray[y].uWeight * x));
			} else {partTotalEffect = phaserArray[y].effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
			partTotalPower = (phaserArray[y].power + (phaserArray[y].sPower * frame.size) + (phaserArray[y].uPower * x));
			partEff = (partTotalEffect / partTotalWeight);
			partSrTotal = phaserArray[y].sr * partTotalWeight *  (frame.srMod*subFrame.srMod);
			partBrTotal = partTotalWeight / 10;
			oTotal = phaserArray[y].o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
			eTotal = phaserArray[y].e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
			tTotal = phaserArray[y].t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
			effectArray1[a] = partTotalEffect;
			weightArray1[a] = partTotalWeight;
			powerArray1[a] = partTotalPower;
			effArray1[a] = partEff;
			srArray1[a] = partSrTotal;
			brArray1[a] = partBrTotal;
			oArray1[a] = oTotal;
			eArray1[a] = eTotal;
			tArray1[a] = tTotal;
			nameArray1[a] = phaserArray[y].name;
			typeArray1[a] = y;
		}
		y = y+1;
		partTotalWeight = 0;
		x = 0;
	}
	x = 0;
	a = 0;
	partTotalWeight = 0;
	while (z < torpedoArray.length) {
		while (partTotalWeight2 < subFrame.maxWeight && x <= 12) {
			x = x + 1;
			a = a + 1;
			if (torpedoArray[z].type == 3) {
				partTotalEffect2 = torpedoArray[z].effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * subFrame.cMulti;
				partTotalWeight2 = (torpedoArray[z].weight + (torpedoArray[z].uWeight * x)) * 1.5;
			}
			else if (torpedoArray[z].type == 0) {
				partTotalEffect2 = torpedoArray[z].effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
				partTotalWeight2 = (torpedoArray[z].weight + (torpedoArray[z].uWeight * x));
			} else {partTotalEffect2 = torpedoArray[z].effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
			partTotalPower2 = (torpedoArray[z].power + (torpedoArray[z].sPower * frame.size) + (torpedoArray[z].uPower * x));
			partEff2 = (partTotalEffect / partTotalWeight);
			partSrTotal2 = torpedoArray[z].sr * partTotalWeight *  (frame.srMod*subFrame.srMod);
			partBrTotal2 = partTotalWeight / 10;
			oTotal2 = torpedoArray[z].o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
			eTotal2 = torpedoArray[z].e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
			tTotal2 = torpedoArray[z].t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
			effectArray2[a] = partTotalEffect2;
			weightArray2[a] = partTotalWeight2;
			powerArray2[a] = partTotalPower2;
			effArray2[a] = partEff2;
			srArray2[a] = partSrTotal2;
			brArray2[a] = partBrTotal2;
			oArray2[a] = oTotal2;
			eArray2[a] = eTotal2;
			tArray2[a] = tTotal2;
			nameArray2[a] = torpedoArray[z].name;
			typeArray2[a] = z;
		}
		z = z+1;
		partTotalWeight2 = 0;
		x = 0;
	}

	partTotalWeight2 = 0;
	x = 0;
	a = 0;
	b = 0;
	var varKey = 0;
	var varKey2 = 0;
	var workingParts = [];
	console.log(weightArray2);
	console.log(typeArray2);
	while (x < effectArray1.length) {
		if (typeArray1[x] == 1 && varKey == 0) {a = 0; varKey = varKey + 1;}
		part1Effect = effectArray1[x];
		part1Weight = weightArray1[x];
		part1Power = powerArray1[x];
		part1Eff = effArray1[x];
		part1Sr = srArray1[x];
		part1Br = brArray1[x];
		part1O = oArray1[x];
		part1E = eArray1[x];
		part1T = tArray1[x];
		combinedWeight = 0;
		combinedEffect = 0;
		x = x + 1;
		a = a + 1;
		function getValue(effect){
			return effect >= (userInput.lowCutOff - part1Effect)
		}
		function incPart(value){
			return value == varKey2;
		}
		y = 1;
		while (combinedWeight < subFrame.maxWeight && combinedEffect <= userInput.highCutOff && y < effectArray2.length) {
			part2Effect = effectArray2[y];
			part2Weight = weightArray2[y];
			part2Power = powerArray2[y];
			part2Eff = effArray2[y];
			part2Sr = srArray2[y];
			part2Br = brArray2[y];
			part2O = oArray2[y];
			part2E = eArray2[y];
			part2T = tArray2[y];
			combinedEffect = part1Effect + part2Effect;
			combinedWeight = part1Weight + part2Weight;
			combinedPower = part1Power + part2Power;
			combinedEff = combinedEffect / combinedWeight;
			combinedSr = part1Sr + part2Sr;
			combinedBr = combinedWeight / 10;
			combinedO = part1O + part2O;
			combinedE = part1E + part2E;
			combinedT = part1T + part2T;
			displayChart2();
			y = y+1;
			b = b+1;
			console.log(varKey2);
			if ((combinedWeight > subFrame.maxWeight || combinedEffect >= userInput.highCutOff || typeArray2[y] == varKey2 + 1) && varKey2 == 0){
				varKey2 = varKey2 + 1;
				b = 0;
				combinedWeight = 0;
				combinedEffect = 0;
				y = typeArray2.findIndex(incPart);
			}
			cycles = cycles + 1;
		}
		varKey2 = 0;
		b = 0;
	}
	console.log(cycles);
}