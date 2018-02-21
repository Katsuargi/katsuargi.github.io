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
	cutOff: 0,
}

function storeCutoff() {
    userInput.cutOff = (document.getElementById("cutOff").value);
}

var part1 = {
	effect: 0,
	weight: 0,
	uWeight: 0,
	sr: 0,
	power: 0,
	sPower: 0,
	uPower: 0,
	o: 0,
	e: 0,
	t: 0,
	type: 0,
}

var maxWeight;
var frameWeight;
var partTotalWeight = 0;
var shipSize = 0;

function submitValues1(){
	maxWeight = parseInt(document.getElementById("maxWeight").value);
	frameWeight = parseInt(document.getElementById("frameWeight").value);
	size = parseInt(document.getElementById("shipSize").value);
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
	if (document.getElementById("phaser").checked == true){
		part1.type = 1;
	} else if (document.getElementById("torpedo").checked == true){
		part1.type = 2;
	} else if (document.getElementById("other").checked == true) {
		part1.type = 0;
	}
}

function simpleCrunch() {
	x = 0;
	var t = document.createElement("table");
	var tb = document.createElement("tbody");
	var tRow = document.createElement("tr");
	var tCell1 = document.createElement("td");
	var tCell2 = document.createElement("td");
	var tCell3 = document.createElement("td");
	var tCell4 = document.createElement("td");
	var tCell5 = document.createElement("td");
	var tCell6 = document.createElement("td");
	var tCell7 = document.createElement("td");
	var tCell8 = document.createElement("td");
	var tCell9 = document.createElement("td");
	var tCellText1 = document.createTextNode("Parts1");
	var tCellText2 = document.createTextNode("Eff");
	var tCellText3 = document.createTextNode("Effect");
	var tCellText4 = document.createTextNode("Weight");
	var tCellText5 = document.createTextNode("SR");
	var tCellText6 = document.createTextNode("Officers");
	var tCellText7 = document.createTextNode("Enlisted");
	var tCellText8 = document.createTextNode("Technicians");
	var tCellText9 = document.createTextNode("Power Cost");
	tCell1.appendChild(tCellText1);
    tCell2.appendChild(tCellText2);
    tCell3.appendChild(tCellText3);
    tCell4.appendChild(tCellText4);
    tCell5.appendChild(tCellText5);
    tCell6.appendChild(tCellText6);
    tCell7.appendChild(tCellText7);
    tCell8.appendChild(tCellText8);
    tCell9.appendChild(tCellText9);
    tRow.appendChild(tCell1);
    tRow.appendChild(tCell2);
    tRow.appendChild(tCell3);
    tRow.appendChild(tCell4);
    tRow.appendChild(tCell5);
    tRow.appendChild(tCell6);
    tRow.appendChild(tCell7);
    tRow.appendChild(tCell8);
    tRow.appendChild(tCell9);
    tb.appendChild(tRow);
    t.appendChild(tb);
    document.getElementById("display-area").appendChild(t);
    console.log(partTotalWeight);
	console.log(maxWeight);

	    function displayChart() {
			console.log(partTotalEffect);
			console.log(userInput.cutOff);
			
				var row = document.createElement("tr");
				var cell1 = document.createElement("td");
				var cell2 = document.createElement("td");
				var cell3 = document.createElement("td");
				var cell4 = document.createElement("td");
				var cell5 = document.createElement("td");
				var cell6 = document.createElement("td");
				var cell7 = document.createElement("td");
				var cell8 = document.createElement("td");
				var cell9 = document.createElement("td");
			    var tParts1 = document.createTextNode(x);
			    var eff = document.createTextNode(partEff);
			    var tEffect = document.createTextNode(partTotalEffect);
			    var tWeight = document.createTextNode(partTotalWeight);
			    var tSr = document.createTextNode(partSrTotal);
			    var tO = document.createTextNode(oTotal);
			    var tE = document.createTextNode(eTotal);
			    var tT = document.createTextNode(tTotal);
			    var tP = document.createTextNode(partTotalPower);
			    cell1.appendChild(tParts1);
			    cell2.appendChild(eff);
			    cell3.appendChild(tEffect);
			    cell4.appendChild(tWeight);
			    cell5.appendChild(tSr);
			    cell6.appendChild(tO);
			    cell7.appendChild(tE);
			    cell8.appendChild(tT);
			    cell9.appendChild(tP);
			    row.appendChild(cell1);
			    row.appendChild(cell2);
			    row.appendChild(cell3);
			    row.appendChild(cell4);
			    row.appendChild(cell5);
			    row.appendChild(cell6);
			    row.appendChild(cell7);
			    row.appendChild(cell8);
			    row.appendChild(cell9);
			    tb.appendChild(row);
			    t.appendChild(tb);
			    document.getElementById("display-area").appendChild(t);
		
		}

	while (partTotalWeight < maxWeight) {
		x = x + 1;
		if (part1.type == 1) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * ((100-size) / 100) * 1.14;
		}
		else if (part1.type == 2) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1.5 * 1.14;
		}
		else if (part1.type == 0) {
			partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * 1.14;
		} else {partTotalEffect = part1.effect * (1+3.5*Math.log10(0.7*x+0.3)) * 1 * 1.14;}

		partTotalPower = (part1.power + (part1.sPower * size) + (part1.uPower * x));
		partTotalWeight = (part1.weight + (part1.uWeight * x));
		partEff = (partTotalEffect / partTotalWeight);
		partSrTotal = part1.sr * x;
		partPowerTotal = part1.uPower * x + part1.power;
		oTotal = part1.o * x;
		eTotal = part1.e * x;
		tTotal = part1.t * x;
		console.log(partTotalPower);
		if (partTotalEffect >= userInput.cutOff) {
			displayChart();
		}
	}
	partTotalWeight = 0;
}
