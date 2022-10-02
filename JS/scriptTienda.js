//para no tener que actualizar el precio de los productos cada mes solo actualizo el precio del dollar


let precio_dolar_oficial = 150

let nombre_producto_1 = "mate"
let precio_producto_1 = 4 * precio_dolar_oficial
let stock_producto_1 = 50

let nombre_producto_2 = "cuadro"
let precio_producto_2 = 6 * precio_dolar_oficial
let stock_producto_2 = 50

let nombre_producto_3 = "retrato"
let precio_producto_3 = 10 * precio_dolar_oficial
let stock_producto_3 = 50

let cantidad_de_productos = 3

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




alert("Estos son nuestros productos:\n- " + nombre_producto_1 + " a $" + precio_producto_1 + "\n- " + nombre_producto_2 + " a $" + precio_producto_2 + "\n- " + nombre_producto_3 + " a $" + precio_producto_3)


let cantidadCompra = prompt("¿Que cantidad de distintos productos desea comprar? Actualmente contamos con " + cantidad_de_productos + " distintos productos en stock")

if(cantidadCompra <= cantidad_de_productos)
{
    for(let i=0; i< cantidadCompra; i= i+1)
    {

        let productoCompra= prompt("Ingrese que producto quiere comprar:\n- " + nombre_producto_1 + "\n- " + nombre_producto_2 + "\n- " + nombre_producto_3)

        if(productoCompra.toLowerCase()  == nombre_producto_1)
        {
            let cantidad_producto_1 = prompt("Ingrese la cantidad de " + nombre_producto_1 + "s que desea comprar:")
                
       calculo_stock(cantidad_producto_1, stock_producto_1, precio_producto_1)

        }

        else if(productoCompra.toLowerCase() == nombre_producto_2)
        {
            let cantidad_producto_2 = prompt("Ingrese la cantidad de " + nombre_producto_2 + "s que desea comprar:")
                
       calculo_stock (cantidad_producto_2, stock_producto_2, precio_producto_2)
        }
        
        else if(productoCompra.toLowerCase() == nombre_producto_3)
        {
            let cantidad_producto_3 = prompt("Ingrese la cantidad de " + nombre_producto_3 + "s que desea comprar:")
            
          calculo_stock(cantidad_producto_3, stock_producto_3, precio_producto_3)
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
alert("Solo tenemos un total de " + cantidad_de_productos + " productos a la venta")
}

