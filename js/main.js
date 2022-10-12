//Carrito-tienda de ropa 
alert("Bienvenido a X tienda de ropa")
let total = 0

const productos = []
const carrito = []
function producto(id, modelo, talla, stock, precio){
    productos.push({id, modelo, talla, stock, precio})
}
//playeras
producto("playera", "amarillo", "XL", 1, 20)
producto("playera", "azul", "M", 9, 20)
producto("playera", "rojo", "L, M, S", 10, 20)
producto("playera", "negro", "XL, L", 13, 20)
//Pantalones
producto("pantalon", "amarillo", "XL, L, M", 12, 40)
producto("pantalon", "azul", "M", 20, 40)
producto("pantalon", "rojo", "L, M, S", 3, 40)
producto("pantalon", "negro", "XL, L", 10, 40)
//abrigo
producto("abrigo", "amarillo", "XL", 12, 50)
producto("abrigo", "azul", "M", 20, 50)
producto("abrigo", "rojo", "", 0, 50)
producto("abrigo", "negro", "XL, L", 10, 50)
//suponiendo que las variaciones de modelos son distintas unas entre otras(incl para el proyecto final)
function Prodcarrito(id, modelo, talla, precio){

}




let precio_total = 0
let modelo = -1
let talla = ""
let flag = false
let flagp = false
let articulo = {}
while (flagp == false){
    let id = parseInt(prompt("Ingrese una opcion: (1)Playera (2)pantalon (3)abrigo"))
    if (id === 1) {
        articulo.id = "playera"
        while (flag == false) {       
            for (let i = 0; i < productos.length; i++){
                modelo = prompt("Ingrese el modelo deseado(amarillo, azul, rojo, negro)").toLowerCase()
                const some = productos.some((el)=>{return el.modelo=== modelo})
                if (some == true){
                    articulo.modelo = modelo
                    flag = true
                    break;
                    }
                else{
                    alert("¡ingrese un modelo válido!")
                }
                }
        }
        flag = false
        while (flag == false){
            talla = prompt("Ingrese talla deseada (XL, L, M, S)").toUpperCase()
            articulo.talla = talla
            flag = true
        }
        flag = false
        const existe = productos.find((el)=>{return (el.id === articulo.id) & (el.modelo === articulo.modelo)})
        precio_total += existe.precio
    }
    if (id === 1) {
        articulo.id = "pantalón"
        while (flag == false) {       
            for (let i = 0; i < productos.length; i++){
                modelo = prompt("Ingrese el modelo deseado(amarillo, azul, rojo, negro)").toLowerCase()
                const some = productos.some((el)=>{return el.modelo=== modelo})
                if (some == true){
                    articulo.modelo = modelo
                    flag = true
                    break;
                    }
                else{
                    alert("¡ingrese un modelo válido!")
                }
                }
        }
        flag = false
        while (flag == false){
            talla = prompt("Ingrese talla deseada (XL, L, M, S)").toUpperCase()
            articulo.talla = talla
            flag = true
        }
        flag = false
        const existe = productos.find((el)=>{return (el.id === articulo.id) & (el.modelo === articulo.modelo)})
        precio_total += existe.precio
    }
    if (id === 3) {
        articulo.id = "abrigo"
        while (flag == false) {       
            for (let i = 0; i < productos.length; i++){
                modelo = prompt("Ingrese el modelo deseado(amarillo, azul, rojo, negro)").toLowerCase()
                const some = productos.some((el)=>{return el.modelo=== modelo})
                if (some == true){
                    articulo.modelo = modelo
                    flag = true
                    break;
                    }
                else{
                    alert("¡ingrese un modelo válido!")
                }
                }
        }
        flag = false
        while (flag == false){
            talla = prompt("Ingrese talla deseada (XL, L, M, S)").toUpperCase()
            articulo.talla = talla
            flag = true
        }
        flag = false
        const existe = productos.find((el)=>{return (el.id === articulo.id) & (el.modelo === articulo.modelo)})
        precio_total += existe.precio
    }
let pregunta = prompt("quieres agregar otra cosa al carrito (si o no)")
if (pregunta === "si"){
    flagp = false
}
else if (pregunta === "no"){
    flagp = true
}
else{
    alert("ingrese una respuesta valida")
}
}

alert("El valor total dentro del carrito es de $"+precio_total)