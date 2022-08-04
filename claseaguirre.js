const stockProductos = [
    {id: 1, nombre: "bombastic", tipo: "hamburguesa", precio:  850},
    {id: 2, nombre: "la bestia", tipo: "hamburguesa", precio:  850},
    {id: 3, nombre: "champi", tipo: "hamburguesa", precio:  800},
    {id: 4, nombre: "queich chiken", tipo: "hamburguesa", precio:  700},
    {id: 5, nombre: "doble bacon", tipo: "hamburguesa", precio:  890},
    {id: 6, nombre: "doble cuarto", tipo: "hamburguesa", precio:  750},
    {id: 7, nombre: "big queich", tipo: "hamburguesa", precio:  850},
    {id: 8, nombre: "full onion", tipo: "hamburguesa", precio:  750},
    {id: 9, nombre: "guacamole", tipo: "hamburguesa", precio:  800},
    {id:10, nombre: "la scaloneta", tipo: "hamburguesa", precio:  850},];

let carrito = [];

let seleccion = prompt("Hola, ¿Desea comprar algun producto si o no?")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresar si o no");
    seleccion = prompt("Hola, ¿Desea comprar algun producto si o no?");
} 

if(seleccion== "si"){
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = stockProductos.map((stockProductos) => stockProductos.nombre + " " + stockProductos.precio + "$");
    alert(todosLosProductos.join(" - "));

}else if (seleccion =="no"){
    alert("Gracias por su visita, ¡Hasta pronto! ")
}
while(seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito")
    let plata= 0;

    if(producto == "bombastic" || producto == "la bestia" || producto == "champi" || producto == "queich chiken" || producto == "doble bacon" || producto == "doble cuarto" || producto == "big queich" || producto == "full onion" || producto == "guacamole" || producto == "la scaloneta"){
        switch(producto){
            case "bombastic":
            case "BOMBASTIC":
                platao=850;
                break;
            case "la bestia":
            case "LA BESTIA":    
                plata=850;
                break;
            case "CHAMPI":
            case "champi":
                plata=800;
                break;
            case "queich chicken":
            case "QUEICH CHICKEN":
                plata=700;
                break;
            case "doble bacon":
            case "DOBLE BACON":
                plata=890;
                break;
            case "doble cuarto":
            case "DOBLE CUARTO":
                plata=50;
                break;
            case "big queich":
            case "BIG QUEICH":
                plata=850;
                break;
            case "full onion":
            case "FULL ONION":
                plata=750;
                break;
            case "guacamole":
            case "GUACAMOLE":
                plata=800;
                break;
            case "la sclaoneta":
            case "LA SCALONETA":
                plata=850;
                break;    
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quieres llevar?"))

        carrito.push({producto, unidades, plata})
    }else{
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Deseas seguir agregando productos?")
    while(seleccion === "no"){
        alert("¡Gracias por su compra!, vuelva pronto.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto:${carritoFinal.producto}, cantidad: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.plata}`)
        })
    break;  
    }

}
const total = carrito.reduce((acc, el) => acc + el.plata * el.unidades,0)
console.log (`el total a pagar por su compra es: ${total}`)