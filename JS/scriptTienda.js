
//mostrar dos productos
//preguntar si quiere comprar
//que cantidad
//precio de compra


let precio_dolar_oficial = 150

let nombre_producto_1 = "MATE"
let precio_producto_1 = 4 * precio_dolar_oficial
let stock_producto_1 = 50

let nombre_producto_2 = "CUADRO"
let precio_producto_2 = 6 * precio_dolar_oficial
let stock_producto_2 = 50

let nombre_producto_3 = "RETRATO"
let precio_producto_3 = 10 * precio_dolar_oficial
let stock_producto_3 = 50


let precioTotal = 0


alert("Estos son nuestros productos:\n- " + nombre_producto_1 + " a $" + precio_producto_1 + "\n- " + nombre_producto_2 + " a $" + precio_producto_2 + "\n- " + nombre_producto_3 + " a $" + precio_producto_3)


let cantidadCompra = prompt("¿Que cantidad de distintos productos desea comprar? (ingrese 1, 2 o 3)")

if(cantidadCompra <=3)
{
    for(let i=0; i< cantidadCompra; i= i+1)
    {

        let productoCompra= prompt("Ingrese que producto quiere comprar:\n- " + nombre_producto_1 + "\n- " + nombre_producto_2 + "\n- " + nombre_producto_3)


        if(productoCompra.toUpperCase()  == nombre_producto_1)
        {
                let cantidad_producto_1 = prompt("Ingrese la cantidad de " + nombre_producto_1 + " que desea comprar:")
                
                if(cantidad_producto_1 <= stock_producto_1)
                {
                precioTotal = precioTotal + (cantidad_producto_1 * precio_producto_1)
                }

                else
                {
                    alert("Actualmente solo contamos con " + stock_producto_1 + " unidades en stock")
                }

        }

            else if(productoCompra.toUpperCase() == nombre_producto_2)
        {
                let cantidad_producto_2 = prompt("Ingrese la cantidad de " + nombre_producto_2 + " que desea comprar:")
                
                if(cantidad_producto_2 <= stock_producto_2)
                {
                precioTotal = precioTotal + (cantidad_producto_2 * precio_producto_2)
                }


                else
                {
                    alert("Actualmente solo contamos con " + stock_producto_2 + " unidades en stock")
                }
        }

            



                else if(productoCompra.toUpperCase() == nombre_producto_3)
        {
                    let cantidad_producto_3 = prompt("Ingrese la cantidad de " + nombre_producto_3 + " que desea comprar:")
                    
                    if(cantidad_producto_3 <= stock_producto_3)
                    {
                    precioTotal = precioTotal + (cantidad_producto_3 * precio_producto_3)
                    }

                
                else
                {
                    alert("Actualmente solo contamos con " + stock_producto_3 + " unidades en stock")
        
                }
        }       

        else
        {
            alert("No contamos con ese producto en nuestro inventario")
        }
        

       
    }

   


    if (precioTotal != 0)
    {
        alert("El precio total es: " + precioTotal)
    }
}

else
{
    alert("Solo tenemos estos 3 productos a la venta \n - " + nombre_producto_1 + "\n- " + nombre_producto_2 + "\n- " + nombre_producto_3)
}

