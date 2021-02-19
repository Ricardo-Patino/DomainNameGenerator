let name = ["ibm", "HP", "windows"]
let Tipo = [".com", ".net"]
let lugar = ["CR", "USA", "CA"]

function Generator(arrname, arrtipo, arrlugar) {
    let dominiosGenerados = [];
    //recorro el primer array name
    arrname.forEach((elementName) => {
        //recorro el segundo array tipo
        arrlugar.forEach((elementolugar) => {
            //recorro el segundo array lugar
            arrtipo.forEach((elementoTipo) => {
                //concateno elementos
                let str = elementName + elementoTipo + elementolugar;
                dominiosGenerados.push(str);//adiciono dominios a array
            })
        })
    })
    return dominiosGenerados;
}

console.log("Dominios-->", Generator(name, Tipo, lugar));