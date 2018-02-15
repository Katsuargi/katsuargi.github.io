var inventory = [];
var fInventory = [];
var bCart = [];
var cost = 0;
var sword = {
    name: " Sword",
    price: 50,
    damage: 3,
    id: "sword",
    type: "weapon",
}

var knife = {
    name: " Knife",
    price: 20,
    damage: 1,
    id: "knife",
    type: "weapon",
}

var larmor = {
    name: " Leather Armor",
    price: 100,
    defense: 3,
    id: "larmor",
    type: "armor",
}

var clothes = {
    name: " Clothes",
    price: 100,
    defense: 3,
    id: "clothes",
    type: "armor",
}

var hPotion = {
    name: " Health Potion",
    price: 25,
    effect: 25,
    id: "hPotion",
    type: "consumable",
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
    weapon: " Knife",
    armor: " Clothes",
    weaponDam: 0,
    defense: 0,
    exp: 0,
    level: 1,
    eStats: 0,
}

var levelChart = {
    "1": 10,
    "2": 30,
    "3": 50,
    "4": 80,
    "5": 120,
    "6": 200,
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
        inventory.push(" Knife", " Clothes");
        fInventory.push(knife, clothes);
        player.weaponDam = 1;
        document.getElementById("playern").innerHTML=player.name;
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("dexdisplay").innerHTML=player.baseDex;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("moneydisplay").innerHTML=player.money;
        document.getElementById("expdisplay").innerHTML=player.exp;
        document.getElementById("pointDisplay").innerHTML=player.eStats;
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
    fInventory.push(workingItem);
    shopDisplayUp();
}

function removeItem() {
    const index = bCart.indexOf(workingName);
    const index2 = bCart.indexOf(workingItem);
    
    if (index !== -1) {
        bCart.splice(index, 1);
        cost = cost - workingCost;
        shopDisplayUp();
    }

    if (index2 !== -1) {
    fInventory.splice(index, 1);
    }
}


function addSword() {
    workingName = sword.name;
    workingCost = sword.price;
    workingItem = sword;
    addItem();
}

function removeSword(){
    workingName = sword.name;
    workingCost = sword.price;
    workingItem = sword;
    removeItem();
}

function addLeatherA() {
    workingName = larmor.name;
    workingCost = larmor.price;
    workingItem = larmor;
    addItem();
}

function removeLeatherA(){
    workingName = larmor.name;
    workingCost = larmor.price;
    workingItem = larmor;
    removeItem();
}

function addHPotion() {
    workingName = hPotion.name;
    workingCost = hPotion.price;
    workingItem = hPotion;
    addItem();
}

function removeHPotion() {
    workingName = hPotion.name;
    workingCost = hPotion.cost;
    workingItem = hPotion;
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

function addStre(){
    if(player.eStats > 0) {
        player.baseStr = player.baseStr + 1;
        player.eStats = player.eStats - 1;
        document.getElementById("strdisplay").innerHTML=player.baseStr;
        document.getElementById("pointDisplay").innerHTML=player.ePoints;
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

function addDext(){
    if(player.eStats > 0) {
        player.baseStr = player.baseStr + 1;
        player.eStats = player.eStats - 1;
        document.getElementById("strdisplay").innerHTML=player.baseDex;
        document.getElementById("pointDisplay").innerHTML=player.ePoints;
    }
}

function addSta(){
    if(player.exp >= player.baseSta) {
        player.exp = player.exp - player.baseSta;
        player.baseSta = player.baseSta + 1;
        player.health = player.baseSta*10;
        document.getElementById("stadisplay").innerHTML=player.baseSta;
        document.getElementById("healthdisplay").innerHTML=player.health;

    }
}

function addStam(){
    if(player.eStats > 0) {
        player.baseStr = player.baseSta + 1;
        player.health = player.baseSta * 10;
        player.eStats = player.eStats - 1;
        document.getElementById("strdisplay").innerHTML=player.baseDex;
        document.getElementById("pointDisplay").innerHTML=player.ePoints;
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


// Equipment and Items

function equipment() {
    $('#playarea').load(events.equip);
}

function test2() {
 var x = 0;
 var y = fInventory.length;
 document.getElementById("populate").classList.add('hide');
 while (x < y) {
    var btn = document.createElement("BUTTON");
    var text = document.createTextNode(inventory[x]);
    btn.appendChild(text);
    document.getElementById("equip_screen").appendChild(btn);
    btn.id = (x);
    btn.onclick = equip;
    console.log(btn.id);
    x = x+1;
 }
}

function equip(){
    console.log(this.id);
    x = this.id;
    console.log(x);
    if (fInventory[x].name != player.weapon && (fInventory[x].type == "weapon")) {
        player.weapon = fInventory[x].name;
        document.getElementById("weapon").innerHTML=("Weapon: You currently have a " + fInventory[x].name + " equipped.");
        player.weaponDam = fInventory[x].damage;
        console.log(player.weaponDam);
    } else if (fInventory[x].name != player.armor && (fInventory[x].type == "armor")) {
        player.weapon = fInventory[x].name;
        document.getElementById("armor").innerHTML=("Armor: You currently have a " + fInventory[x].name + " equipped.");
        player.defense = fInventory[x].defense;
    } else if (fInventory[x].type == "consumable" && fInventory[x].id == "hPotion") {
        useHPotion();
        this.classList.add('hide')
    }
} 

function useHPotion(){
        if (player.health < (player.baseSta * 10)){
            const id1 = inventory.indexOf(hPotion.name);
            const id2 = fInventory.indexOf(hPotion);
            
            player.health = (player.health + 25);
            if (player.health > (player.baseSta * 10)) {
                player.health = (player.baseSta * 10);
            }
            
            if (id1 !== -1) {
                inventory.splice(id1, 1);
            }

            if (id2 !== -1) {
            fInventory.splice(id2, 1);
        }
        document.getElementById("healthdisplay").innerHTML=player.health;
        document.getElementById("inventory").innerHTML=inventory;
    }
}

//Experimental functions

//level ups

function levelUpCheck() {
    oLevel = player.level;
    pLevel = oLevel.toString();
    expCheck = levelChart[pLevel];
    
    if (player.exp >= expCheck) {
        player.level = player.level + 1;
        player.eStats = player.eStats + 3;
        document.getElementById("pointDisplay").innerHTML=player.eStats;
        $('#playarea').load(events.levelU);
    }
}