var inventory = [];
var bCart = [];
var cost = 0;
var sword = {
    name: "sword",
    price: 50,
    damage: 3,
}

var knife = {
    name: "knife",
    price: 20,
    damage: 1,
}

var larmor = {
    name: "larmor",
    price: 100,
    defense: 3,
}

var clothes = {
    name: "clothes",
    price: 100,
    defense: 3,
}

var locations = {

}
var player = {
    name: "X",
    baseStr: 0,
    baseDex: 0,
    baseSta: 0,
    health: 0,
    money: 100,
    weapon: "knife",
    armor: "leather armor",
    weaponDam: 0,
    defense: 0,
    exp: 0,  
}

var goblin = {
    baseStr: 3,
    baseDex: 3,
    baseSta: 3,
    health: 30,
    money: 10,
    exp: 1,
}

var wolf = {
    baseStr: 4,
    baseDex: 4,
    baseSta: 4,
    health: 40,
    money: 15,
    exp: 2,
}

var dragon = {
    baseStr: 10,
    baseDex: 6,
    baseSta: 8,
    health: 80,
    money: 50,
    exp: 10,
}

var quests = {
    princess: 1,
}

var locations = {
    "0.0": "locations.html #castle1",
    "0.1": "locations.html #shop",
    "1.0": "locations.html #forestEntrance",
    "2.0": "locations.html #forest2",
    "3.0": "locations.html #forest2",
    "4.0": "locations.html #forest2",
    "5.0": "locations.html #forest3",
    "6.0": "locations.html #dragonCave",
}

var monsters = {
    gob: "monsters.html #goblinFight",
    wolf: "monsters.html #wolfFight",
    dragon: "monsters.html #dragonFight",
}

var events = {
    playerDead: "events.html #dead",
    victory: "events.html #victory",
    equip: "events.html #equip_screen",
}

var areaToCord = "0.0";
var xCord = 0;
var yCord = 0;



//Character generation and display function.

function storeTest() {
    player.name = (document.getElementById("playerin").value);
    player.baseStr = parseInt(document.getElementById("str").value);
    player.baseDex = parseInt(document.getElementById("dex").value);
    player.baseSta = parseInt(document.getElementById("sta").value);
    var totalStats = player.baseStr + player.baseDex + player.baseSta;
    
    if (player.baseStr > 10) {
    	alert("Your strength is above 10. Please enter a value between 1-10");
    }
    else if (player.baseDex > 10) {
    	alert("Your dexterity is above 10. Please enter a value between 1-10");
    }
    else if (player.baseSta > 10) {
    	alert("Your stamina is above 10. Please enter a value between 1-10");
    }
    else if (totalStats > 15) {
    	alert("Your total stats are above 15. Please lower your stats.")
    }
    else if (player.baseStr < 1 || player.baseDex < 1 || player.baseSta  < 1 || totalStats < 15) {
        alert("Please spend all 15 points and make sure all values are between 1-10.")
    }
    else {
        player.health = player.baseSta*10;
        inventory.push("knife", "clothes");
        player.weaponDam = 1;
        document.getElementById("playern").innerHTML=player.name;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("moneydisplay").innerHTML=player.money;
        document.getElementById("expdisplay").innerHTML=player.exp;
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        document.getElementById("secondary-content").classList.remove('hide');
        console.log(areaToCord);
        console.log(inventory[0]);
        console.log(inventory[1]);
        $('#playarea').load(locations[areaToCord]);
        ;
    }

}

//shop functions.



function addItem() {
    cost = cost + workingCost;
    bCart.push(workingName);
    shopDisplayUp();
}

function removeItem() {
    const index = bCart.indexOf(workingName);
    
    if (index !== -1) {
        bCart.splice(index, 1);
        cost = cost - workingCost;
        shopDisplayUp();
    }
}


function addSword() {
    workingName = sword.name;
    workingCost = sword.price;
    var swordY = true;
    addItem();
}

function removeSword(){
    workingName = sword.name;
    workingCost = sword.price;
    var swordY = false;
    removeItem();
}

function addLeatherA() {
    workingName = larmor.name;
    workingCost = larmor.price;
    var leatherY = true;
    addItem();
}

function removeLeatherA(){
    workingName = larmor.name;
    workingCost = larmor.price;
    var leatherY = false;
    removeItem();
}

function buy() {
    if (player.money >= cost && bCart.length > 0) {
        player.money = player.money - cost;
        inventory = inventory.concat(bCart);
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("moneydisplay").innerHTML=player.money;
        bCart.length = 0;
        cost = 0;
        if(swordY = true) {player.weaponDam = 3}
        if(leatherY = true) {player.defense = 3}
        shopDisplayUp();
    }  else {
        alert("Not enough money!")
        }
}

function shopEnd() {
    document.getElementById("playarea").classList.remove('hide');
    document.getElementById("shop").classList.add('hide');
}

function shopDisplayUp(){
    document.getElementById("bcart").innerHTML=bCart;
    document.getElementById("price").innerHTML=cost;  
}

//Area transition functions.

function north() {
    xCord = xCord + 1;
    xString = xCord.toString() + ".";
    areaToCord = xString.concat(yCord);
    if  (xCord >= 1 && xCord <= 6){
        fEncounter()
    } else {$("#playarea").load(locations[areaToCord]);}
}

function south() {
    xCord = xCord + -1;
    xString = xCord.toString() + ".";
    areaToCord = xString.concat(yCord);
    if  (xCord >= 1 && xCord <= 5){
        fEncounter()
    } else {$("#playarea").load(locations[areaToCord]);}

}

function east() {
    yCord = yCord + 1;
    yString = "." + yCord.toString();
    xString = xCord.toString();
    areaToCord = xString.concat(yString);
    console.log(areaToCord);
    $("#playarea").load(locations[areaToCord]);
}

function west() {
    yCord = yCord - 1;
    yString = "." + yCord.toString();
    xString = xCord.toString();
    areaToCord = xString.concat(yString);
    console.log(areaToCord);
    $("#playarea").load(locations[areaToCord]);
}

function goBack() {
    $('#playarea').load(locations[areaToCord]);
}

//Battle functions.


function fEncounter() {
    var r = Math.random();
    console.log(r);
        if  (xCord >= 1 && xCord <= 5) {
        if (r <= .25){ 
            $("#playarea").load(monsters.gob);
            enemyName=goblin;
            enemyHealth = enemyName.health;
        } 
        else if (r >= .26 && r <= .5) {
            $("#playarea").load(monsters.wolf);
            enemyName=wolf;
            enemyHealth = enemyName.health;
        }
        else {
        $("#playarea").load(locations[areaToCord]);
        }
    }

        if (xCord == 6.0 && yCord == 0.0 && quests.princess == 2) {
            $("#playarea").load(monsters.dragon);
            enemyName=dragon;
            enemyHealth = enemyName.health;
            locations["6.0"] = "locations.html #dragonCave2";
        }
        else {
            $("#playarea").load(locations[areaToCord]);
        }
}

function fight(){
    console.log(enemyName);
    var rounds = 0;
    while(player.health > 0 && enemyHealth > 0) {
        rounds = rounds + 1;
        var playerAtt = (Math.random() * 20) + player.baseDex;
        var playerDef = player.baseDex + player.defense + 10;
        var enemyAtt = (Math.random() * 20) + enemyName.baseDex;
        var enemyDef = enemyName.baseDex + 10;
        if(playerAtt > enemyDef) {
            enemyHealth = enemyHealth - (player.baseStr + player.weaponDam);
        }
        if(enemyAtt > playerDef) {
        player.health = player.health - (enemyName.baseStr);
        }
        document.getElementById("healthdisplay").innerHTML=player.health;
    }
    if(player.health <=0) {
        $('#playarea').load(events.playerDead);
    }
    else if(enemyHealth <=0){
         document.getElementById("combat-logs").innerHTML=("Combat won after " + rounds + " rounds.");
         player.exp = player.exp + enemyName.exp;
         player.money = player.money + enemyName.money;
         document.getElementById("moneydisplay").innerHTML=player.money;
         document.getElementById("expdisplay").innerHTML=player.exp;
         $('#playarea').load(events.victory);
    }
}

//Quest functions.

function princessQuest(){
    locations["0.0"] = "locations.html #castle2";
    quests.princess = 2;
    document.getElementById("startingText").innerHTML="You've accepted the quest!";
    document.getElementById("princess-logs").innerHTML="Go north and save the princess from the dragon!";
    document.getElementById("startQuest").classList.add('hide');
}

function savePrincess(){
    quests.princess = 3;
    document.getElementById("princessText").innerHTML="You've saved the princess! Take her home!";
    document.getElementById("princess-logs").innerHTML="Take the princess home!";
    document.getElementById("princessRescue").classList.add('hide');
    locations["6.0"] = "locations.html #dragonCave";
}

function princessComplete(){
    if(quests.princess == 3){
        quests.princess = 4;
        document.getElementById("kingQuestText").innerHTML="The princess returns to the king's side and he hands you your reward.";
        document.getElementById("princess-logs").innerHTML="Princes quest: Complete!";
        document.getElementById("returnPrincess").classList.add('hide');
        locations["0.0"] = "locations.html #castle3";
    }
}


//Level functions.

function addStr(){
    if(player.exp >= player.baseStr) {
        player.exp = player.exp - player.baseStr;
        player.baseStr = player.baseStr + 1;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("expdisplay").innerHTML=player.exp;

    }
}

function addDex(){
    if(player.exp >= player.baseDex) {
        player.exp = player.exp - player.baseDex;
        player.baseDex = player.baseDex + 1;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("expdisplay").innerHTML=player.exp;

    }
}

function addSta(){
    if(player.exp >= player.baseSta) {
        player.exp = player.exp - player.baseSta;
        player.baseSta = player.baseSta + 1;
        player.health = player.baseSta*10;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("expdisplay").innerHTML=player.exp;

    }
}

//Save / Load.

function saveData(){
    localStorage.setItem('inventorys', JSON.stringify(inventory));
    localStorage.setItem('players', JSON.stringify(player));
    localStorage.setItem('questss', JSON.stringify(quests));
}

function loadData() {

        //import data
        player = JSON.parse(localStorage.getItem('players'));
        inventory = JSON.parse(localStorage.getItem('inventorys'));
        quests = JSON.parse(localStorage.getItem('questss'));
        console.log(player);
        //display update
        document.getElementById("playern").innerHTML=player.name;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("moneydisplay").innerHTML=player.money;
        document.getElementById("expdisplay").innerHTML=player.exp;
        document.getElementById("inventory").innerHTML=inventory;
        document.getElementById("stats").classList.remove('hide');
        document.getElementById("inventoryarea").classList.remove('hide');
        document.getElementById("secondary-content").classList.remove('hide');
        //Quest flag update.
        if (quests.princess == 2 || quests.princess == 3){
            locations["0.0"] = "locations.html #castle2";
        }
        else if (quests.princess == 4) {
            locations["0.0"] = "locations.html #castle3";
        }
        //load area
        $("#playarea").load(locations[areaToCord]);
    }


// test functions.

function equipment() {
    $('#playarea').load(events.equip);
}

function test1() {
    document.getElementById("inv1").innerHTML=inventory[0];
    document.getElementById("inv2").innerHTML=inventory[1];
    document.getElementById("inv3").innerHTML=inventory[2];
    document.getElementById("inv4").innerHTML=inventory[3];
    document.getElementById("inv5").innerHTML=inventory[4];
    document.getElementById("inv6").innerHTML=inventory[5];
    document.getElementById("inv7").innerHTML=inventory[6];
    document.getElementById("inv8").innerHTML=inventory[7];
}

function equip1() {
    if (inventory[0] != player.weapon && (inventory[0] == "knife" || inventory[0] == "sword")) {
        player.weapon = inventory[0];
        document.getElementById("weapon").innerHTML=("Weapon: You currently have a " + inventory[0] + " equipped.");
        player.weaponDam = inventory[0].damage;
        console.log(player.weaponDam);
    } else if (inventory[0] != player.armor && (inventory[0] == "clothes" || inventory[0] == "larmor")) {
        player.weapon = inventory[0];
        document.getElementById("armor").innerHTML=("Armor: You currently have a " + inventory[0] + " equipped.");
        player.defense = inventory[0].defense;
    }
}

function equip3() {
    if (inventory[2] != player.weapon && (inventory[2] == "knife" || inventory[2] == "sword")) {
        player.weapon = inventory[2];
        console.log(inventory[2]);
        console.log(player.weapon);
        document.getElementById("weapon").innerHTML=("Weapon: You currently have a " + inventory[2] + " equipped.");
        player.weaponDam = inventory[2].damage;
        console.log(player.weaponDam);
    } else if (inventory[2] != player.armor && (inventory[2] == "clothes" || inventory[2] == "larmor")) {
        player.weapon = inventory[2];
        document.getElementById("armor").innerHTML=("Armor: You currently have a " + inventory[2] + " equipped.");
        player.defense = inventory[2].defense;
    }
}