var d2 = 0;
var d3 = 0;
var d5 = 0;
var d7 = 0;

function tastoPremuto() {
	var testo = document.getElementById('input').value
	var numero = Number(testo)
	if (testo != "") { // Se c'è del testo nell'input
		
		if (testo.slice(-1) == "0" || testo.slice(-1) == "2" || testo.slice(-1) == "4"  || testo.slice(-1) == "6" || testo.slice(-1) == "8") { 
			divx2(numero)
		} else if  (numero.toString().slice(-1) == "3" || numero.toString().slice(-1) == "9") {
			divx3(numero)
		}  else if (numero.toString().slice(-1) == "5") {
			divx5(numero)
		} else if (numero.toString().slice(-1) == "7") {
			divx7(numero)
		} else if (numero.toString().slice(-1) == "1") {
			finito(numero) 
		}
 		document.getElementById('input').value = "";
	}
}

function divx2 (numero) {
	numero  = numero / 2;
	d2 += 1;
	console.log("Risultato = " + numero);
	if (numero.toString().slice(-1) == "0" || numero.toString().slice(-1) == "2" || numero.toString().slice(-1) == "4" || numero.toString().slice(-1) == "6" || numero.toString().slice(-1) == "8") { 
		divx2(numero)
	} else if (numero.toString().slice(-1) == "3" || numero.toString().slice(-1) == "9") {
		divx3(numero)
	} else if (numero.toString().slice(-1) == "5") {
		divx5(numero)
	} else if (numero.toString().slice(-1) == "7") {
		divx7(numero)
	} else if (numero.toString().slice(-1) == "1") {
		finito(numero) 
	}
}

function divx3(numero) {
	numero = numero / 3;
	d3 += 1;
	console.log("Risultato = " + numero); 
	if (numero.toString().slice(-1) == "0" || numero.toString().slice(-1) == "2" || numero.toString().slice(-1) == "4" || numero.toString().slice(-1) == "6" || numero.toString().slice(-1) == "8") { 
		divx2(numero)
	} else if (numero.toString().slice(-1) == "3" || numero.toString().slice(-1) == "9") {
		divx3(numero)
	} else if (numero.toString().slice(-1) == "5") {
		divx5(numero)
	} else if (numero.toString().slice(-1) == "7") {
		divx7(numero)
	} else if (numero.toString().slice(-1) == "1") {
		finito(numero) 
	}
}

function divx5(numero) {
	numero = numero / 5;
	d5 += 1;
	console.log("Risultato = " + numero);
	if (numero.toString().slice(-1) == "0" || numero.toString().slice(-1) == "2" || numero.toString().slice(-1) == "4" || numero.toString().slice(-1) == "6" || numero.toString().slice(-1) == "8") { 
		divx2(numero)
	} else if (numero.toString().slice(-1) == "3" || numero.toString().slice(-1) == "9") {
		divx3(numero)
	} else if (numero.toString().slice(-1) == "5") {
		divx5(numero)
	} else if (numero.toString().slice(-1) == "7") {
		divx7(numero)
	} else if (numero.toString().slice(-1) == "1") {
		finito(numero) 
	}
}

function divx7(numero) {
	numero = numero / 7;
	d7 += 1;
	console.log("Risultato = " + numero);
	if (numero.toString().slice(-1) == "0" || numero.toString().slice(-1) == "2" || numero.toString().slice(-1) == "4" || numero.toString().slice(-1) == "6" || numero.toString().slice(-1) == "8") { 
		divx2(numero)
	} else if (numero.toString().slice(-1) == "3" || numero.toString().slice(-1) == "9") {
		divx3(numero)
	} else if (numero.toString().slice(-1) == "5") {
		divx5(numero)
	} else if (numero.toString().slice(-1) == "7") {
		divx7(numero)
	} else if (numero.toString().slice(-1) == "1") {
		finito(numero) 
	}
}

function finito(numero) {
	console.log("Fattorizzazione riuscita, risultrato = " + numero)
	
	document.getElementById('ilris').innerHTML = "Il risultato &egrave : "
	document.getElementById('risultato').innerHTML = "2^"+d2+", 3^"+d3+", 5^"+d5+", 7^"+d7
	d2 = 0;
	d3 = 0;
	d5 = 0;
	d7 = 0;
	numero = 0;
}
