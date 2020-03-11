var cokeValue = 45;

var pennyValue = 1;
var nickelValue = 5;
var dimeValue = 10;
var quarterValue = 25;

var pennyCoins = 0;
var nickelCoins = 0;
var dimeCoins = 0;
var quarterCoins = 0;

function pennyCount() {
	pennyCoins++;
	var c1 = document.getElementById("penny");
	c1.value = pennyCoins;
	document.getElementById("coinInfo1").innerHTML = allCoinsDollar();
	document.getElementById("coinInfo2").innerHTML = wastedCoin();
}

function nickelCount() {
	nickelCoins++;
	var c2 = document.getElementById("nickel");
	c2.value = nickelCoins;
	document.getElementById("coinInfo1").innerHTML = allCoinsDollar();
	document.getElementById("coinInfo2").innerHTML = wastedCoin();
}

function dimeCount() {
	dimeCoins++;
	var c3 = document.getElementById("dime");
	c3.value = dimeCoins;
	document.getElementById("coinInfo1").innerHTML = allCoinsDollar();
	document.getElementById("coinInfo2").innerHTML = wastedCoin();
	document.getElementById("coinInfo3").innerHTML = totalCokeValue();
	document.getElementById("cokeAmount").innerHTML = acceptedCoin();
}

function quarterCount() {
	quarterCoins++;
	var c4 = document.getElementById("quarter");
	c4.value = quarterCoins;
	document.getElementById("coinInfo1").innerHTML = allCoinsDollar();
	document.getElementById("coinInfo2").innerHTML = wastedCoin();
	document.getElementById("coinInfo3").innerHTML = totalCokeValue();
	document.getElementById("cokeAmount").innerHTML = acceptedCoin();
}

function resetCoins() {
	var c1 = document.getElementById("penny");
	c1.value = 0;
	pennyCoins = 0;
	var c2 = document.getElementById("nickel");
	c2.value = 0;
	nickelCoins = 0;
	var c3 = document.getElementById("dime");
	c3.value = 0;
	dimeCoins = 0;
	var c4 = document.getElementById("quarter");
	c4.value = 0;   
	quarterCoins = 0;
	document.getElementById("coinInfo1").innerHTML = allCoinsDollar();
	document.getElementById("coinInfo2").innerHTML = wastedCoin();
	document.getElementById("coinInfo3").innerHTML = totalCokeValue();
	document.getElementById("cokeAmount").innerHTML = acceptedCoin();
}

function allCoinsCent() {
	a = (pennyCoins * pennyValue) + (nickelCoins * nickelValue) + (dimeCoins * dimeValue) + (quarterCoins * quarterValue);
	return a;
}

function allCoinsDollar() {
	a = ((pennyCoins * pennyValue) + (nickelCoins * nickelValue) + (dimeCoins * dimeValue) + (quarterCoins * quarterValue)) / 100;
	return a;
}

function acceptedCoin() {
	return Math.floor(((dimeCoins * dimeValue) + (quarterCoins * quarterValue)) / cokeValue);
}

function wastedCoin() {
	return Math.round((allCoinsDollar() - acceptedCoin() * cokeValue / 100) * 100) / 100;
}

Math.round((allCoinsDollar() - wastedCoin()) * 100) / 100;

function totalCokeValue() {
	return Math.round((allCoinsDollar() - wastedCoin()) * 100) / 100;
}

function playSfx1() {
	var sfx = document.getElementById("sfx1");
	sfx.play()
}

function playSfx2() {
	var sfx = document.getElementById("sfx2");
	sfx.play()
}
