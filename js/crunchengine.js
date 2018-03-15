// var toke = {
// 	maxWeight: 3100,
// 	weight: 550,
// 	oMod: 0.8,
// 	eMod: 0.8,
// 	tMod: 0.75,
// 	srMod: 1.1,
// }

// var lets = {
// 	maxWeight: 675,
// 	weight: 30,
// 	cMod: 1.14,
// 	oMod: 0.88,
// 	eMod: 0.78,
// 	tMod: 0.88,
// 	srMod: 1,
// 	sizeE: .91,
// 	torpM: 1.5,
// }

// var ttHeavyPhaser = {
// 	effect: .975,
// 	weight: 8,
// 	uWeight: 14,
// 	sr: .08,
// 	power: 5,
// 	sPower: 2.5,
// 	uPower: 1.75,
// 	o: .32,
// 	e: .32,
// 	t: .01,
// }

// var t3HeavyPhaser = {
// 	effect: .975,
// 	weight: 8,
// 	uWeight: 14,
// 	sr: .08,
// 	power: 5,
// 	sPower: 2.5,
// 	uPower: 1.75,
// 	o: .32,
// 	e: .32,
// 	t: .01,
// }

// var t3LightPhaser = {
// 	effect: .52,
// 	weight: 4,
// 	uWeight: 6,
// 	sr: .065,
// 	power: 3,
// 	sPower: 3,
// 	uPower: 2,
// 	o: .175,
// 	e: .19,
// 	t: .02,
// }

// var ttHeavyTorp = {
// 	effect: .7,
// 	weight: 15,
// 	uWeight: 10,
// 	sr: .1,
// 	power: 4,
// 	sPower: 0.1,
// 	uPower: 0.5,
// 	o: .15,
// 	e: .15,
// 	t: 0,
// }

// function partPick() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// } 

// function crunch4() {
// 	var partTotalItem = 1;
// 	var partTotalItem2 = 1;
// 	var partTotalEffect;
// 	var partTotalWeight = 0;
// 	var partBaseWeight;
// 	var partSrTotal;
// 	var partPowerTotal;
// 	var oTotal;
// 	var eTotal;
// 	var tTotal;
// 	var x = partTotalItem;
// 	var y = partTotalItem;
// 	var t = document.createElement("table");
// 	var tb = document.createElement("tbody");
// 	var tRow = document.createElement("tr");
// 	var tCell1 = document.createElement("td");
// 	var tCell2 = document.createElement("td");
// 	var tCell3 = document.createElement("td");
// 	var tCell4 = document.createElement("td");
// 	var tCell5 = document.createElement("td");
// 	var tCell6 = document.createElement("td");
// 	var tCell7 = document.createElement("td");
// 	var tCell8 = document.createElement("td");
// 	var tCellText1 = document.createTextNode("Parts1");
// 	var tCellText2 = document.createTextNode("Parts2");
// 	var tCellText3 = document.createTextNode("Effect");
// 	var tCellText4 = document.createTextNode("Weight");
// 	var tCellText5 = document.createTextNode("SR");
// 	var tCellText6 = document.createTextNode("Officers");
// 	var tCellText7 = document.createTextNode("Enlisted");
// 	var tCellText8 = document.createTextNode("Technicians");
// 	tCell1.appendChild(tCellText1);
//     tCell2.appendChild(tCellText2);
//     tCell3.appendChild(tCellText3);
//     tCell4.appendChild(tCellText4);
//     tCell5.appendChild(tCellText5);
//     tCell6.appendChild(tCellText6);
//     tCell7.appendChild(tCellText7);
//     tCell8.appendChild(tCellText8);
//     tRow.appendChild(tCell1);
//     tRow.appendChild(tCell2);
//     tRow.appendChild(tCell3);
//     tRow.appendChild(tCell4);
//     tRow.appendChild(tCell5);
//     tRow.appendChild(tCell6);
//     tRow.appendChild(tCell7);
//     tRow.appendChild(tCell8);
//     tb.appendChild(tRow);
//     t.appendChild(tb);
//     document.getElementById("display-area").appendChild(t);

// 	function combination2() {
// 		var z = x + y;
// 		var row = document.createElement("tr");
// 		var cell1 = document.createElement("td");
// 		var cell2 = document.createElement("td");
// 		var cell3 = document.createElement("td");
// 		var cell4 = document.createElement("td");
// 		var cell5 = document.createElement("td");
// 		var cell6 = document.createElement("td");
// 		var cell7 = document.createElement("td");
// 		var cell8 = document.createElement("td");
// 		row.id = (z);
// 		partTotalEffect = ((ttHeavyPhaser.effect * 1+3.5*Math.log10(0.7*x+0.3) * lets.sizeE * lets.cMod) + (ttHeavyTorp.effect * 1+3.5*Math.log10(0.7*y+0.3) * lets.torpM * lets.cMod));
// 		partTotalWeight = ((ttHeavyPhaser.uWeight * x) + ttHeavyPhaser.weight) + ((ttHeavyTorp.uWeight * y) + ttHeavyTorp.weight);
// 		partEff = (partTotalEffect / partTotalWeight);
// 		partSrTotal = (ttHeavyPhaser.sr * x) + (ttHeavyTorp.sr * y);
// 		partPowerTotal = ((ttHeavyPhaser.uPower * x) + ttHeavyPhaser.power) + ((ttHeavyTorp.uPower * y) + ttHeavyTorp.power);
// 		oTotal = (ttHeavyPhaser.o * x) + (ttHeavyTorp.o * y);
// 		eTotal = (ttHeavyPhaser.e * x) + (ttHeavyTorp.e * y);
// 		tTotal = (ttHeavyPhaser.t * x) + (ttHeavyTorp.t * y);
	
// 		if (partTotalEffect >= userInput.cutOff){
// 		    var tParts1 = document.createTextNode(x);
// 		    var tParts2 = document.createTextNode(y);
// 		    var tEffect = document.createTextNode(partTotalEffect);
// 		    var tWeight = document.createTextNode(partTotalWeight);
// 		    var tSr = document.createTextNode(partSrTotal);
// 		    var tO = document.createTextNode(oTotal);
// 		    var tE = document.createTextNode(eTotal);
// 		    var tT = document.createTextNode(tTotal);
// 		    //t.appendChild(tParts, tEffect, tWeight, tSr, tO, tE, tT);
// 		    //tb.appendChild(tParts, tEffect, tWeight, tSr, tO, tE, tT);
// 		    cell1.appendChild(tParts1);
// 		    cell2.appendChild(tParts2);
// 		    cell3.appendChild(tEffect);
// 		    cell4.appendChild(tWeight);
// 		    cell5.appendChild(tSr);
// 		    cell6.appendChild(tO);
// 		    cell7.appendChild(tE);
// 		    cell8.appendChild(tT);
// 		    row.appendChild(cell1);
// 		    row.appendChild(cell2);
// 		    row.appendChild(cell3);
// 		    row.appendChild(cell4);
// 		    row.appendChild(cell5);
// 		    row.appendChild(cell6);
// 		    row.appendChild(cell7);
// 		    row.appendChild(cell8);
// 		    tb.appendChild(row);
// 		    t.appendChild(tb);
// 		    document.getElementById("display-area").appendChild(t);
// 		}
// 	}

// 	while (partTotalWeight + lets.weight < lets.maxWeight) {

// 		x = x + 1;
// 		y = y + 1;
// 		partTotalEffect1 = (ttHeavyPhaser.effect * 1+3.5*Math.log10(0.7*x+0.3)) * lets.sizeE * lets.cMod;
// 		partTotalWeight1 = (ttHeavyPhaser.uWeight * x) + ttHeavyPhaser.weight;
// 		partEff = (partTotalEffect1 / partTotalWeight1);
// 		partSrTotal = ttHeavyPhaser.sr * x;
// 		partPowerTotal = (ttHeavyPhaser.uPower * x) + ttHeavyPhaser.power;
// 		oTotal = ttHeavyPhaser.o * x;
// 		eTotal = ttHeavyPhaser.e * x;
// 		tTotal = ttHeavyPhaser.t * x;

// 		partTotalEffect2 = (ttHeavyTorp.effect * 1+3.5*Math.log10(0.7*y+0.3)) * lets.torpM * lets.cMod;
// 		partTotalWeight2 = (ttHeavyTorp.uWeight * y) + ttHeavyTorp.weight;
// 		partEff2 = (partTotalEffect2 / partTotalWeight2);
// 		partSrTotal2 = ttHeavyTorp.sr * y;
// 		partPowerTotal = (ttHeavyTorp.uPower * y) + ttHeavyTorp.power;
// 		oTotal2 = ttHeavyTorp.o * y;
// 		eTotal2 = ttHeavyTorp.e * y;
// 		tTotal2 = ttHeavyTorp.t * y;

// 		if (partEff > partEff2){
// 			y = y - 1;
// 			if (y < 0) {
// 				y = 0;
// 			}
// 		}
// 		else if (partEff < partEff2) {
// 			x = x - 1;
// 			if (x < 0) {
// 				x = 0;
// 			}
// 		}
// 		combination2();

// 		partTotalWeight = (ttHeavyPhaser.uWeight * x) + ttHeavyPhaser.weight + (ttHeavyTorp.uWeight * y) + ttHeavyTorp.weight;
// 	}
// }

var userInput = {
	lowCutOff: 5,
	highCutOff: 6,
}

function storeCutoff() {
    userInput.lowCutOff = (document.getElementById("low-cutOff").value);
    userInput.highCutOff = (document.getElementById("high-cutOff").value);
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
}

var partArray = [part1, part2, part3];
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

function testOptimization2() {
	x = 0;
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
	var effectArray3 = [];
	var weightArray3 = [];
	var powerArray3 = [];
	var effArray3 = [];
	var srArray3 = [];
	var brArray3 = [];
	var oArray3 = [];
	var eArray3 = [];
	var tArray3 = [];
	for (var i = 0; i <= 10; i++) {
 		tCell[i] = document.createElement("td");
	}
	tCellText[0] = document.createTextNode("ID");
	tCellText[1] = document.createTextNode("Parts1");
	tCellText[2] = document.createTextNode("Parts2");
	tCellText[3] = document.createTextNode("Effect");
	tCellText[4] = document.createTextNode("Weight");
	tCellText[5] = document.createTextNode("SR");
	tCellText[6] = document.createTextNode("BR");
	tCellText[7] = document.createTextNode("Officers");
	tCellText[8] = document.createTextNode("Enlisted");
	tCellText[9] = document.createTextNode("Technicians");
	tCellText[10] = document.createTextNode("Power Cost");
	for (var i = 0; i <= 10; i++) {
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
		for (var i = 0; i <= 10; i++) {
			cell[i] = document.createElement("td");
		}
		partValues[0]= document.createTextNode(partName);
	    partValues[1] = document.createTextNode(x - 1);
	    partValues[2] = document.createTextNode(y);
	    partValues[3] = document.createTextNode(combinedEffect);
	    partValues[4] = document.createTextNode(combinedWeight);
	    partValues[5] = document.createTextNode(combinedSr);
	    partValues[6] = document.createTextNode(combinedBr);
	    partValues[7] = document.createTextNode(combinedO);
	    partValues[8] = document.createTextNode(combinedE);
	    partValues[9] = document.createTextNode(combinedT);
	    partValues[10] = document.createTextNode(combinedPower);
	    for (var i = 0; i <= 10; i++) {
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
		oTotal = part1.o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
		eTotal = part1.e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
		tTotal = part1.t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
		effectArray1[x] = partTotalEffect;
		weightArray1[x] = partTotalWeight;
		powerArray1[x] = partTotalPower;
		effArray1[x] = partEff;
		srArray1[x] = partSrTotal;
		brArray1[x] = partBrTotal;
		oArray1[x] = oTotal;
		eArray1[x] = eTotal;
		tArray1[x] = tTotal;
	}
	
	x = 0;
	partTotalWeight = 0;

	while (partTotalWeight2 < subFrame.maxWeight) {
		x = x + 1;
		if (part2.type == 1) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x));
		}
		else if (part2.type == 2) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x));
		}
		else if (part2.type == 3) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x)) * 1.5;
		}
		else if (part2.type == 0) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x));
		} else {partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
		partTotalPower2 = (part2.power + (part2.sPower * frame.size) + (part2.uPower * x));
		partEff2 = (partTotalEffect2 / partTotalWeight2);
		partSrTotal2 = part2.sr * partTotalWeight *  (frame.srMod*subFrame.srMod);
		partBrTotal2 = partTotalWeight / 10;
		oTotal2 = part2.o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
		eTotal2 = part2.e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
		tTotal2 = part2.t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
		effectArray2[x] = partTotalEffect2;
		weightArray2[x] = partTotalWeight2;
		powerArray2[x] = partTotalPower2;
		effArray2[x] = partEff2;
		srArray2[x] = partSrTotal2;
		brArray2[x] = partBrTotal2;
		oArray2[x] = oTotal2;
		eArray2[x] = eTotal2;
		tArray2[x] = tTotal2;
	}

	x = 0;

	while (partTotalWeight3 < subFrame.maxWeight) {
		x = x + 1;
		if (part3.type == 1) {
			partTotalEffect3 = part3.effect * (1+3.5*Math.log10(0.7*x+0.3)) * ((100-frame.size) / 100) * subFrame.cMulti;
			partTotalWeight3 = (part3.weight + (part3.uWeight * x));
		}
		else if (part3.type == 2) {
			partTotalEffect3 = part3.effect * (1+3.5*Math.log10(0.7*x+0.3)) * subFrame.cMulti;
			partTotalWeight3 = (part3.weight + (part3.uWeight * x));
		}
		else if (part3.type == 3) {
			partTotalEffect3 = part3.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * subFrame.cMulti;
			partTotalWeight3 = (part3.weight + (part3.uWeight * x)) * 1.5;
		}
		else if (part3.type == 0) {
			partTotalEffect3 = part3.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
			partTotalWeight3 = (part3.weight + (part3.uWeight * x));
		} else {partTotalEffect3 = part3.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
		partTotalPower3 = (part3.power + (part3.sPower * frame.size) + (part3.uPower * x));
		partEff3 = (partTotalEffect3 / partTotalWeight3);
		partSrTotal3 = part3.sr * partTotalWeight3 *  (frame.srMod*subFrame.srMod);
		partBrTotal3 = partTotalWeight3 / 10;
		oTotal3 = part3.o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
		eTotal3 = part3.e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
		tTotal3 = part3.t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
		effectArray3[x] = partTotalEffect3;
		weightArray3[x] = partTotalWeight3;
		powerArray3[x] = partTotalPower3;
		effArray3[x] = partEff3;
		srArray3[x] = partSrTotal3;
		brArray3[x] = partBrTotal3;
		oArray3[x] = oTotal3;
		eArray3[x] = eTotal3;
		tArray3[x] = tTotal3;
	}
	
	x = 0;
	partTotalWeight = 0;
	partTotalWeight2 = 0;
	partTotalWeight3 = 0;
	part2Eff = 1;
	var partId = 1;
	var partName;
	var workingParts = [];
	console.log(effectArray1);
	console.log(effectArray2);
	console.log(effectArray3);
	while ((x < effectArray1.length && partId < 2) || (x < effectArray3.length && partId < 2)) {
		if (partId === 1){
			part1Effect = effectArray1[x];
			part1Weight = weightArray1[x];
			part1Power = powerArray1[x];
			part1Eff = effArray1[x];
			part1Sr = srArray1[x];
			part1Br = brArray1[x];
			part1O = oArray1[x];
			part1E = eArray1[x];
			part1T = tArray1[x];
			partName = 1;
			console.log(partId);
		}
		console.log(effArray1);
		console.log(effArray3);
		if (partId === 2){
			if (part1.type === part3.type){
				part3Effect = effectArray3[x];
				part3Weight = weightArray3[x];
				part3Power = powerArray3[x];
				part3Eff = effArray3[x];
				part3Sr = srArray3[x];
				part3Br = brArray3[x];
				part3O = oArray3[x];
				part3E = eArray3[x];
				part3T = tArray3[x];
				part1Effect = part3Effect;
				part1Weight = part3Weight;
				part1Power = part3Power;
				part1Eff = part3Eff;
				part1Sr = part3Sr;
				part1Br = part3Br;
				part1O = part3O;
				part1E = part3E;
				part1T = part3T;
				partName = 2;
				console.log("Part 3 better is true");
			}
		}
		combinedWeight = 0;
		combinedEffect = 0;
		x = x + 1;
		console.log(x);
		function getValue(effect){
			return effect >= (userInput.lowCutOff - part1Effect)
		}
		console.log(x);
		//Note: .02 is a sane breakpoint for phasers and torpedos. Other types will require an additional || type + sane breakpoint condition
		y = (effectArray2.findIndex(getValue));
		if (part1Effect < userInput.highCutOff){
			while (combinedWeight < subFrame.maxWeight && combinedEffect <= userInput.highCutOff && part2Eff > .02) {
				console.log(part2Eff, part1Eff);
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
			}
			part2Eff = 1;
		}
		if (x < effectArray1.length && partId < 2){
			x = 0;
			partId = partId + 1;
		}
	}
}

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
	var y = 0;
	var z = 0;
	for (var i = 0; i <= 9; i++) {
 		tCell[i] = document.createElement("td");
	}
	tCellText[0] = document.createTextNode("Parts1");
	tCellText[1] = document.createTextNode("Parts2");
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

	function displayChart2() {
			
		var row = document.createElement("tr");
		var cell = [];
		var partValues = [];
		for (var i = 0; i <= 9; i++) {
			cell[i] = document.createElement("td");
		}
	    partValues[0] = document.createTextNode(a - 1);
	    partValues[1] = document.createTextNode(y);
	    partValues[2] = document.createTextNode(combinedEffect);
	    partValues[3] = document.createTextNode(combinedWeight);
	    partValues[4] = document.createTextNode(combinedSr);
	    partValues[5] = document.createTextNode(combinedBr);
	    partValues[6] = document.createTextNode(combinedO);
	    partValues[7] = document.createTextNode(combinedE);
	    partValues[8] = document.createTextNode(combinedT);
	    partValues[9] = document.createTextNode(combinedPower);
	    for (var i = 0; i <= 9; i++) {
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
			typeArray1[a] = y;
		}
	y = y+1;
	partTotalWeight = 0;
	x = 0;
	}
	x = 0;
	a = 0;
	partTotalWeight = 0;

	while (partTotalWeight2 < subFrame.maxWeight && z <= torpedoArray.length && x <= 12) {
		x = x + 1;
		if (torpedoArray[z].type == 3) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x)) * 1.5;
		}
		else if (part2.type == 0) {
			partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;
			partTotalWeight2 = (part2.weight + (part2.uWeight * x));
		} else {partTotalEffect2 = part2.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * subFrame.cMulti;}
		partTotalPower2 = (part2.power + (part2.sPower * frame.size) + (part2.uPower * x));
		partEff2 = (partTotalEffect / partTotalWeight);
		partSrTotal2 = part2.sr * partTotalWeight *  (frame.srMod*subFrame.srMod);
		partBrTotal2 = partTotalWeight / 10;
		oTotal2 = part2.o * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.oMod * subFrame.oMod);
		eTotal2 = part2.e * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.eMod * subFrame.eMod);
		tTotal2 = part2.t * (1+Math.log10(x)*2) * (Math.pow(frame.size, 0.7) / 2) * (frame.tMod * subFrame.tMod);
		effectArray2[x] = partTotalEffect2;
		weightArray2[x] = partTotalWeight2;
		powerArray2[x] = partTotalPower2;
		effArray2[x] = partEff2;
		srArray2[x] = partSrTotal2;
		brArray2[x] = partBrTotal2;
		oArray2[x] = oTotal2;
		eArray2[x] = eTotal2;
		tArray2[x] = tTotal2;
	}

	partTotalWeight2 = 0;
	x = 0;
	a = 0;
	b = 0;
	var varKey = 1;
	var workingParts = [];
	console.log(effectArray1);
	console.log(effectArray2);
	console.log(typeArray1);
	console.log(varKey);
	while (x < effectArray1.length) {
		if (typeArray1[x] == 1 && varKey == 1) {a = 0; varKey = varKey + 1;}
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
		y = 1;
		while (combinedWeight < subFrame.maxWeight && combinedEffect <= userInput.highCutOff) {
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
			cycles = cycles + 1;
		}
	}
	console.log(cycles);
}