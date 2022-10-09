/*
let numero = prompt("Ingrese un numero:")

if(numero>5)
{
console.log("Se ejecuto la opercion")

}


let texto = prompt("Ingrese SI para comprar \nIngrese NO para salir")
if (texto=="SI")
{
    alert("Gracias por su respuesta")
}
else
{
    alert("Gracias vuelva prontos!")
}


let precio = prompt("Ingrese un numero:")

if (precio<20)
{
    alert("El precio es menor que 20");
}

else if(precio<50)
{
    alert("El precio es menor que 50")
}

else if(precio<100)
{
    alert("El precio es menor que 100")
}

else
{
    alert("El precio es mayor a 100")
}

console.log("Fin")



//condional de conteo

for(let i=1; i<=10; i=i+1)
{
    alert("El número es " + i)
}



 function calculadora (primerNumero, segundoNumero, operacion)
 {
    switch(operacion)
    {
        case "+":
        return primerNumero + segundoNumero;

        case "-":
        return primerNumero - segundoNumero;

        case "/":
        return primerNumero / segundoNumero;
        
        case "*":
        return primerNumero * segundoNumero;
        
        default:
        return 0;
    }
 }

let primer = parseInt(prompt ("ingrese un numero"))
let operac = prompt ("Ingrese operacion")
let segundo = parseInt(prompt  ("Ingrese otro numero"))


alert (calculadora (primer, segundo, operac)) 
*/



let listaNumeros= [0, 1, 2,]

let nombre = prompt("Ingrese un numero")
listaNumeros.unshift(nombre)
alert (listaNumeros)

