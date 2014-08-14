function random (minimo,maximo){
	var numero = Math.floor(Math.random() * (maximo - 1  + minimo) * maximo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = random(0,4);

opcionUsuario = prompt("¿Que eliges? \n Piedra=0, \n Papel=1, \n Tijera=2, \n Lagarto=3, \n Spock=4", 0);

if(opcionUsuario<=4 && opcionUsuario>=0){
	
	alert("Elegiste " + opciones[opcionUsuario] + " \n  Y \n" +"Javascript eligio " + opciones[opcionMaquina]);
	opcionUsuario = opciones[opcionUsuario];
	opcionMaquina = opciones[opcionMaquina];

	if(opcionUsuario == opcionMaquina){
		alert("EMPATE");
	}else{
		if(opcionMaquina == "Lagarto" && opcionUsuario== "Piedra"|| opcionMaquina == "Tijera" && opcionUsuario=="Piedra")
		{
			alert("Ganaste :)");
		}
		else if (opcionMaquina == "Papel"  && opcionUsuario=="Piedra"|| opcionMaquina == "Spock" && opcionUsuario=="Piedra") 
		{
			alert("Perdiste :(")
		}
		else if(opcionMaquina == "Piedra" && opcionUsuario == "Papel" || opcionMaquina == "Spock" && opcionUsuario == "Papel") 
		{	
			alert("Ganaste :)");
		}
		else if (opcionMaquina == "Tijera" && opcionUsuario == "Papel" || opcionMaquina == "Lagarto" && opcionUsuario == "Papel") 
		{
			alert("Perdiste :(")
		}
		else if(opcionMaquina == "Papel" && opcionUsuario == "Tijera" || opcionMaquina == "Lagarto" && opcionUsuario == "Tijera")
		{
			alert("Ganaste :)");
		}	
		else if (opcionMaquina == "Spock" && opcionUsuario == "Tijera"|| opcionMaquina == "Piedra" && opcionUsuario == "Tijera") 
		{
			alert("Perdiste :(");
		}
		else if(opcionMaquina == "Spock" && opcionUsuario == "Lagarto" || opcionMaquina == "Papel" && opcionUsuario == "Lagarto")
		{
			alert("Ganaste :)");
		}
		else if(opcionMaquina == "Piedra" && opcionUsuario == "Lagarto" || opcionMaquina == "Tijera" && opcionUsuario == "Lagarto")
		{
			alert("Perdiste :(");
		}
		else if(opcionMaquina == "Tijera" && opcionUsuario == "Spock" || opcionMaquina == "Piedra" && opcionUsuario == "Spock")
		{
			alert("Ganaste :)");
		}
		else if(opcionMaquina == "Lagarto" && opcionUsuario == "Spock"|| opcionMaquina == "Papel" && opcionUsuario == "Spock")
		{
			alert("Perdiste :(");
		}
	}

}else{
	alert("Opcion no valida!");
}






