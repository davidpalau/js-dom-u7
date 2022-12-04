/**
 *ACTIVITY 4 – Buscar una palabra dentro del documento 
− Crea una página que tenga mucho texto como contenido 
− Crea una aplicación que busque una palabra escrita por el usuario en un cuadro dentro del documento 
− La aplicación hará scroll hacia la palabra y esta aparecerá remarcada 
*/
function marcarPalabra(palabra, elemento){
    let texto= elemento.textContent;

    let pos = texto.indexOf(palabra);
    if(pos!=-1){

        let expre = new RegExp(palabra,"g");

        elemento.innerHTML=elemento.innerHTML.replace(
            expre,"<mark>"+palabra+"</mark>"
        );
        return true;

    }else{
        return false;
    }

    
}

let texto = prompt("Escribe palabra:");
if(texto){
    marcarPalabra(texto,document.body)
}




















































































