function Pokemon (n,v,a)
{
	this.grito = "Rata!";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert(this.grito);
	}
}

function inicio(x)
{
	//Creacion de los pokemon
	var rattata = new Pokemon("Rattata", 40 , 2);
	var squirtle = new Pokemon("Squirtle", 90 , 45);
	squirtle.grito = "Squilo!";
	var charmander = new Pokemon("Charmander", 100 , 50);
	charmander.grito = "Char!";
	//Vector con los pokemon ya creados
	var pokemon = [rattata,squirtle,charmander]
	//Otorgar informacion a los elementos del html
	nombrePokemon.innerText = pokemon[x].nombre;
	imagenPokemon.src = "images/"+pokemon[x].nombre+".png";
	datosPokemon.innerText = "Datos del Pokemon:\n\n Vida= " + pokemon[x].vida + "\nAtaque= " + pokemon[x].ataque +
							 "\n Grito= "+pokemon[x].grito  
}

