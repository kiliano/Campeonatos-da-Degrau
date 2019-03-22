var campeonatos = window.localStorage.getItem('campeonatos');

if (campeonatos == null) {
	campeonatos = {};
}

// teste


var mk64;

mk64 = window.localStorage.getItem('localMK64');

var mk64 = JSON.parse(mk64);

if (mk64 == null || mk64 == undefined) {
	mk64 = {
		"corridas" : [{
			"a" : "a",
			"b" : "a",
			"c" : "a",
			"d" : "a"
		}]
	};
} 


console.log(mk64.corridas);


function refreshMK64() {
	$(".jsListagem").addClass("dg-loading").html("");
	$(".pontos > li > span").html("");

	var pontosKiliano = 0;
	var pontosRoger = 0;
	var pontosMurilo = 0;
	var pontosRafael = 0;
	var pontosTony = 0;
	var pontosOutro = 0;

	for(var i = 0; i < mk64.corridas.length; i++ ) {
		if (mk64.corridas[i].a == "Kiliano") {pontosKiliano += 9;}
		if (mk64.corridas[i].a == "Roger") {pontosRoger += 9;}
		if (mk64.corridas[i].a == "Murilo") {pontosMurilo += 9;}
		if (mk64.corridas[i].a == "Rafael") {pontosRafael += 9;}
		if (mk64.corridas[i].a == "Tony") {pontosTony += 9;}
		if (mk64.corridas[i].a == "Outro") {pontosOutro += 9;}


		if (mk64.corridas[i].b == "Kiliano") {pontosKiliano += 6;}
		if (mk64.corridas[i].b == "Roger") {pontosRoger += 6;}
		if (mk64.corridas[i].b == "Murilo") {pontosMurilo += 6;}
		if (mk64.corridas[i].b == "Rafael") {pontosRafael += 6;}
		if (mk64.corridas[i].b == "Tony") {pontosTony += 6;}
		if (mk64.corridas[i].b == "Outro") {pontosOutro += 6;}

		if (mk64.corridas[i].c == "Kiliano") {pontosKiliano += 3;}
		if (mk64.corridas[i].c == "Roger") {pontosRoger += 3;}
		if (mk64.corridas[i].c == "Murilo") {pontosMurilo += 3;}
		if (mk64.corridas[i].c == "Rafael") {pontosRafael += 3;}
		if (mk64.corridas[i].c == "Tony") {pontosTony += 3;}
		if (mk64.corridas[i].c == "Outro") {pontosOutro += 3;}

		if (mk64.corridas[i].d == "Kiliano") {pontosKiliano += 1;}
		if (mk64.corridas[i].d == "Roger") {pontosRoger += 1;}
		if (mk64.corridas[i].d == "Murilo") {pontosMurilo += 1;}
		if (mk64.corridas[i].d == "Rafael") {pontosRafael += 1;}
		if (mk64.corridas[i].d == "Tony") {pontosTony += 1;}
		if (mk64.corridas[i].d == "Outro") {pontosOutro += 1;}

		if (mk64.corridas[i].a != "a") {
			$(".jsListagem").prepend('<li class="item-listagem-item"> <span>1º <strong>'+mk64.corridas[i].a+'</strong></span> <span>2º <strong>'+mk64.corridas[i].b+'</strong></span> <span>3º <strong>'+mk64.corridas[i].c+'</strong></span> <span>4º <strong>'+mk64.corridas[i].d+'</strong></span></li>');
		}

	}

	$(".pontos-Kiliano").html(pontosKiliano);
	$(".pontos-Roger").html(pontosRoger);
	$(".pontos-Murilo").html(pontosMurilo);
	$(".pontos-Rafael").html(pontosRafael);
	$(".pontos-Tony").html(pontosTony);
	$(".pontos-Outro").html(pontosOutro);

	$(".jsListagem").removeClass("dg-loading");
}


function inserirMK64() {
	var a = $("#primeirolugar").val();
	var b = $("#segundolugar").val();
	var c = $("#terceirolugar").val();
	var d = $("#quartolugar").val();

	if (a == "") {
		alert("Não pode estar em branco");
	} else {
		var atualizacao = {
			"a" : a,
			"b" : b,
			"c" : c,
			"d" : d
		};

		mk64.corridas.push(atualizacao);

		refreshMK64();

		window.localStorage.setItem('localMK64', JSON.stringify(mk64));

		$("#primeirolugar").val("");
		$("#segundolugar").val("");
		$("#terceirolugar").val("");
		$("#quartolugar").val("");
	}



	
}

function apagarUltimoMK64() {

	mk64.corridas.pop();

	refreshMK64();

	window.localStorage.setItem('localMK64', JSON.stringify(mk64));
}


function zerarMK64() {

	mk64 = {
		"corridas" : [{
			"a" : "a",
			"b" : "a",
			"c" : "a",
			"d" : "a"
		}]
	};


	refreshMK64();

	window.localStorage.setItem('localMK64', JSON.stringify(mk64));
}



jQuery(document).ready(function(){

	console.log(mk64.corridas);
	if (mk64.corridas != undefined) {
		refreshMK64();
	}

})