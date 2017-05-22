// Generacion de Mapa Aleatorio

function Generar_General() {
	// body...
	if(document.getElementById("tipo").value=="general"){
		Generar();
	}
	if(document.getElementById("tipo").value=="bloques"){
		Generar_Bloques();
	}
	if(document.getElementById("tipo").value=="realista"){
		Generar_Realista();
	}
}

function Generar(){
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
			var nombre="p"+numeros2digitos(i)+numeros2digitos(j);
			if(numero_random=="0"){
				document.getElementById(nombre).className="terreno_basico";
			}
			if(numero_random=="1"){
				document.getElementById(nombre).className="agua_basica";
			}
			if(numero_random=="2"){
				document.getElementById(nombre).className="roca_basica";
			}
			if(numero_random=="3"){
				document.getElementById(nombre).className="grama_basica";
			}
			if(numero_random=="4"){
				document.getElementById(nombre).className="suelo_basica";
			}

		}
	}
}

function Inicializar() {
	// body...
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
			var nombre="p"+numeros2digitos(i)+numeros2digitos(j);
			document.getElementById(nombre).className="terreno_basico";
		}
	}
}

function Generar_Bloques(){
	Blokes(0,8,0,8);
	Blokes(8,15,0,8);
	Blokes(0,8,8,15);
	Blokes(8,15,8,15);
}

function Blokes(minx,maxx,miny,maxy){
	var numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
	for(var i=miny;i<maxy;i++){
		for(var j=minx;j<maxx;j++){
			var nombre="p"+numeros2digitos(i)+numeros2digitos(j);	
			//console.log(nombre+" "+numero_random);	
			if(numero_random=="0"){
				document.getElementById(nombre).className="terreno_basico";
			}
			if(numero_random=="1"){
				document.getElementById(nombre).className="agua_basica";
			}
			if(numero_random=="2"){
				document.getElementById(nombre).className="roca_basica";
			}
			if(numero_random=="3"){
				document.getElementById(nombre).className="grama_basica";
			}

		}
	}
}

function numeros2digitos(valor){
	if(valor<10){
		return "0"+valor;
	}else{
		return valor;
	}

}

// Este es el mapa con solo agua.
var mapa=[
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]




function Generar_Realista(){
	var x=Math.floor(Math.random() * (10 - 0)) + 0;
	var y=Math.floor(Math.random() * (10 - 0)) + 0;
	var isla_tamano=8;
	Generar_Mar();
	Generar_Isla(x,y,isla_tamano);
	Display_Mapa();
}

function Generar_Mar(){
	for(var i=0;i<15;i++){
		for(var j=0;j<15;j++){
			mapa[i][j]=1;
		}
	}
}

function Generar_Isla(x,y,tam){
	xmax=x+tam;
	ymax=y+tam;
	if(xmax>15)
		xmax=15;
	if(ymax>15)
		ymax=15;
	for(var i=y;i<y+tam;i++){
		for(var j=x;j<x+tam;j++){
			mapa[i][j]=0;	
		}
	}
	Generar_verde(x+1,y+1,tam-2);

}

function Generar_verde(x,y,tam){
	xmax=x+tam;
	ymax=y+tam;
	for(var i=y;i<ymax;i++){
		for(var j=x;j<xmax;j++){
			mapa[i][j]=3;	
		}
	}
	Castillito(x+1,y+1,tam-2);	
}

function Castillito(x,y,tam){
	xmax=x+tam;
	ymax=y+tam;
	for(var i=y;i<ymax;i++){
		for(var j=x;j<xmax;j++){
			mapa[i][j]=2;	
		}
	}
	Puerta(x,y,tam);
	Suelo_Castillo(x+1,y+1,tam-2);


}

function Puerta(x,y,tam){
	xmax=x+tam;
	ymax=y+tam;
	for(var i=y;i<ymax;i++){
		for(var j=x+1;j<xmax-1;j++){
			if(y==i || j==x || i==ymax-1 || j==xmax-1){
				numero_random=Math.floor(Math.random() * (4 - 0)) + 0;
				if(numero_random==3){
					mapa[i][j]=4;
					return "";	
				}
			}
		}
	}
	mapa[ymax-1][x+2]=4;

}

function Suelo_Castillo(x,y,tam){
	xmax=x+tam;
	ymax=y+tam;
	for(var i=y;i<ymax;i++){
		for(var j=x;j<xmax;j++){
			mapa[i][j]=4;	
		}
	}
}

function Display_Mapa(){
	for(var i=0;i<15;i++){
	
	for(var j=0;j<15;j++){
		var numero_random=mapa[i][j];
		var nombre="p"+numeros2digitos(i)+numeros2digitos(j);
		if(numero_random=="0"){
			document.getElementById(nombre).className="terreno_basico";
		}
		if(numero_random=="1"){
			document.getElementById(nombre).className="agua_basica";
		}
		if(numero_random=="2"){
			document.getElementById(nombre).className="roca_basica";
		}
		if(numero_random=="3"){
			document.getElementById(nombre).className="grama_basica";
		}
		if(numero_random=="4"){
			document.getElementById(nombre).className="suelo_basica";
		}
	}
	
	}
}