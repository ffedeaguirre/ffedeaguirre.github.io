
let producto=prompt("Ingresa el nombre de nuestro producto y te diré su precio:\nBOMBASTIC\nLA BESTIA\nCHAMPI\nQUEICH CHICKEN\nDOBLE BACON\nDOBLE CUARTO\nBIG QUEICH\nFULL ONION\nGUACAMOLE\nLA SCALONETA\n(presiona la tecla -s- ir a la pagina)");
let precio=0;

while(producto!="s"){
    switch(producto){
        case "bombastic":
        case "BOMBASTIC":
            console.log("la BOMBASTIC sale $850");
            precio=precio+850;
            break;
        case "la bestia":
        case "LA BESTIA":    
            console.log("LA BESTIA sale $850");
            precio=precio+850;
            break;
        case "CHAMPI":
        case "champi":
            console.log("la CHAMPI sale $800");
            precio=precio+800;
            break;
        case "queich chicken":
        case "QUEICH CHICKEN":
            console.log("la QUEICH CHICKEN sale $700");
            precio=precio+700;
            break;
        case "doble bacon":
        case "DOBLE BACON":
            console.log("la DOBLE BACON sale $890");
            precio=precio+890;
            break;
        case "doble cuarto":
        case "DOBLE CUARTO":
            console.log("la DOBLE CUARTO sale $750");
            precio=precio+750;
            break;
        case "big queich":
        case "BIG QUEICH":
            console.log("la BIG QUEICH sale $850");
            precio=precio+850;
            break;
        case "full onion":
        case "FULL ONION":
            console.log("la FULL ONION sale $750");
            precio=precio+750;
            break;
        case "guacamole":
        case "GUACAMOLE":
            console.log("la GUACAMOLE sale $800");
            precio=precio+800;
            break;
        case "la sclaoneta":
        case "LA SCALONETA":
            console.log("LA SCALONETA sale $850");
            precio=precio+850;
            break;    
        default:
            console.log("Ese producto no existe en nuetra lista");
            break;
    }
    producto=prompt("Ingresa el nombre de nuestro producto y te diré su precio:\nBOMBASTIC\nLA BESTIA\nCHAMPI\nQUEICH CHICKEN\nDOBLE BACON\nDOBLE CUARTO\nBIG QUEICH\nFULL ONION\nGUACAMOLE\nLA SCALONETA\n(presiona la tecla -s- ir a la pagina)");


    console.log("Total a pagar $"+precio);
}
