var toke = {
	maxWeight: 3100,
	weight: 550,
	oMod: 0.8,
	eMod: 0.8,
	tMod: 0.75,
	srMod: 1.1,
}

var lets = {
	maxWeight: 775,
	weight: 30,
	oMod: 0.88,
	eMod: 0.78,
	tMod: 0.88,
	srMod: 1,
}

var ttHeavyPhaser = {
	effect: .9,
	weight: 8,
	uWeight: 14,
	sr: .08,
	power: 5,
	sPower: 2.5,
	uPower: 1.75,
	o: .32,
	e: .32,
	t: .01,
}

function partCrunch() {
	var partTotalItem = 0;
	var partTotalEffect;
	var partTotalWeight = 0;
	var partBaseWeight;
	var partSrTotal;
	var partPowerTotal;
	var oTotal;
	var eTotal;
	var tTotal;
	var x = partTotalItem;
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
	var tCellText1 = document.createTextNode("Parts");
	var tCellText2 = document.createTextNode("Effect");
	var tCellText3 = document.createTextNode("Weight");
	var tCellText4 = document.createTextNode("SR");
	var tCellText5 = document.createTextNode("Officers");
	var tCellText6 = document.createTextNode("Enlisted");
	var tCellText7 = document.createTextNode("Technicians");
	tCell1.appendChild(tCellText1);
    tCell2.appendChild(tCellText2);
    tCell3.appendChild(tCellText3);
    tCell4.appendChild(tCellText4);
    tCell5.appendChild(tCellText5);
    tCell6.appendChild(tCellText6);
    tCell7.appendChild(tCellText7);
    tRow.appendChild(tCell1);
    tRow.appendChild(tCell2);
    tRow.appendChild(tCell3);
    tRow.appendChild(tCell4);
    tRow.appendChild(tCell5);
    tRow.appendChild(tCell6);
    tRow.appendChild(tCell7);
    tb.appendChild(tRow);
    t.appendChild(tb);
    document.getElementById("display-area").appendChild(t);
	while (partTotalWeight + lets.weight < lets.maxWeight) {
	x = x +1;
	var row = document.createElement("tr");
	var cell1 = document.createElement("td");
	var cell2 = document.createElement("td");
	var cell3 = document.createElement("td");
	var cell4 = document.createElement("td");
	var cell5 = document.createElement("td");
	var cell6 = document.createElement("td");
	var cell7 = document.createElement("td");
	row.id = (x);
	partTotalEffect = ttHeavyPhaser.effect * 1+3.5*Math.log10(0.7*x+0.3);
	partTotalWeight = (ttHeavyPhaser.uWeight * x) + ttHeavyPhaser.weight;
	partSrTotal = ttHeavyPhaser.sr * x;
	partPowerTotal = (ttHeavyPhaser.uPower * x) + ttHeavyPhaser.power;
	oTotal = ttHeavyPhaser.o * x;
	eTotal = ttHeavyPhaser.e * x;
	tTotal = ttHeavyPhaser.t * x;
	console.log(x, partTotalEffect, partTotalWeight, partSrTotal, oTotal, eTotal, tTotal);
    var tParts = document.createTextNode(x);
    var tEffect = document.createTextNode(partTotalEffect);
    var tWeight = document.createTextNode(partTotalWeight);
    var tSr = document.createTextNode(partSrTotal);
    var tO = document.createTextNode(oTotal);
    var tE = document.createTextNode(eTotal);
    var tT = document.createTextNode(tTotal);
    //t.appendChild(tParts, tEffect, tWeight, tSr, tO, tE, tT);
    //tb.appendChild(tParts, tEffect, tWeight, tSr, tO, tE, tT);
    cell1.appendChild(tParts);
    cell2.appendChild(tEffect);
    cell3.appendChild(tWeight);
    cell4.appendChild(tSr);
    cell5.appendChild(tO);
    cell6.appendChild(tE);
    cell7.appendChild(tT);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    tb.appendChild(row);
    t.appendChild(tb);
    document.getElementById("display-area").appendChild(t);
    t.id = (x);
	}
}