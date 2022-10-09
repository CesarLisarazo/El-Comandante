//para no tener que actualizar el precio de los productos cada mes solo actualizo el precio del dollar


let precio_dolar_oficial = 150

function Producto(nombre, precio, stock)
{
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.actualizar_stock = function (cantidad)
    {
        this.stock -= cantidad
    }
}

let producto_1 = new Producto ("mate", 4 * precio_dolar_oficial, 50)

let producto_2 = new Producto ("cuadro", 6 * precio_dolar_oficial, 50)

let producto_3 = new Producto ("retrato", 10 * precio_dolar_oficial, 50)

let lista_de_productos =[producto_1, producto_2, producto_3] 

let lista_de_productos_con_stock = lista_de_productos.filter ((prod)=>prod.stock>0)

let lista_de_nombres = []

for (const nombre of lista_de_productos_con_stock)
{   
   lista_de_nombres.push(nombre.nombre) 
   
}
 

let precio_total = 0

function calculo_precio(cantidad_producto, precio_producto)
{
    precio_total += cantidad_producto * precio_producto
}

function calculo_stock (cantidad_productos, stock_producto, precio_producto)
{
    if(cantidad_productos <= stock_producto)
    {
    calculo_precio (cantidad_productos, precio_producto)
    }

    else
    {
    alert("Actualmente solo contamos con " + stock_producto + " unidades en stock")
    }
}



alert("Estos son nuestros productos:\n- " + lista_de_nombres.join("\n - "))

let cantidadCompra =parseInt(prompt("¿Que cantidad de distintos productos desea comprar? Actualmente contamos con " + lista_de_productos.length  + " distintos productos en stock"))

if(cantidadCompra <= lista_de_productos.length)
{
    for(let i=0; i< cantidadCompra; i= i+1)
    {

        let productoCompra= prompt("Ingrese que producto quiere comprar:\n- " + producto_1.nombre + "\n- " + producto_2.nombre + "\n- " + producto_3.nombre)

        if(productoCompra.toLowerCase()  == producto_1.nombre)
        {
            let cantidad_producto_1 = prompt("Ingrese la cantidad de " + producto_1.nombre + "s que desea comprar:")
                
       calculo_stock(cantidad_producto_1, producto_1.stock, producto_1.precio)
       producto_1.actualizar_stock (cantidad_producto_1)
      
    
        }

        else if(productoCompra.toLowerCase() == producto_2.nombre)
        {
            let cantidad_producto_2 = prompt("Ingrese la cantidad de " + producto_2.nombre + "s que desea comprar:")
                
       calculo_stock (cantidad_producto_2, producto_2.stock, producto_2.precio)
       producto_2.actualizar_stock (cantidad_producto_2)
        }
        
        else if(productoCompra.toLowerCase() == producto_3.nombre)
        {
            let cantidad_producto_3 = prompt("Ingrese la cantidad de " + producto_3.nombre + "s que desea comprar:")
            
          calculo_stock(cantidad_producto_3, producto_3.stock, producto_3.precio)
          producto_3.actualizar_stock (cantidad_producto_3)
        }       

        else
        {
            alert("No contamos con ese producto en nuestro inventario")
        }
               
    }
  
    if (precio_total != 0)
    {
    alert("El precio total es: $" + precio_total)
    }
}

else
{
alert("Solo tenemos un total de " + lista_de_productos.length + " productos a la venta")
}

