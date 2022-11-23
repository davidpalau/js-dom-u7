/**
 * ACTIVITY 1 –Añadir un párrafo 
− En editores como Visual Studio Code, que tienen el módulo Emmet incorporado, se pueden crear párrafos 
con el texto clásico de pruebas “Lorem ipsum...”. Si estando en el body de una nueva página web escribimos 
ol>li*9>lorem y luego pulsamos el tabulador, se crearán 9 párrafos numerados con el texto en cuestión 
− Una vez creados los párrafos la página consistirá en pedir al usuario un texto y un número (Del 1 al 10) para 
la posición de ese texto. El texto se mostrará en negrita. 
− Se mostrará el párrafo (sin eliminar ninguno de los anteriores) en la posición indicada. Si se indica el 3, se 
dejarán sin cambiar el primer y segundo párrafos inciales, el nuevo se colocará como tercero y el que antes 
era el tercero, ahora será el cuarto y así sucesivamente. 
− Si el número no está en ese rango (o no es un número) se avisa del error y se pide de nuevo. 
− Si el usuario cancela, la aplicación no hace nada.
 */

window.addEventListener("load", inicio, true);

function inicio(){
    var texto = window.prompt("Escribe un texto");
    if(texto!= null){
        do {
            var posi = window.prompt("Del 1 al 10 escribe la posición: ");

            if(posi!=null){
                posi=parseInt(Number(posi));
                if(isNaN(posi) || posi<1 || posi>10){
                    alert("Número no valido.")
                }
            }

        } while (posi != null && (isNaN(posi)||posi<1 ||posi> 10));
        let lista = document.getElementsByTagName("ol")[0];
        let elemento = document.createElement("li");
        elemento.innerHTML=`<strong> ${texto}</strong>`
        if(posi==10){
            lista.appendChild(elemento)
        }else{
            let siguiente = lista.children[posi-1]
            lista.insertBefore(elemento,siguiente);
        }

    }

}