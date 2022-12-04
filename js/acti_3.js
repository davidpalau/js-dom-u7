/**
 * ACTIVITY 3 – Contador de visitas con aviso de cookies 
− Crear una aplicación que nos muestre el número de veces que hemos entrado. 
− Lo haremos mediante una cookie que caducará después de un año 
− Pero primero avisaremos con un cuadro de confirmación, que grabamos cookies en la página. Si el usuario 
no acepta cookies las borramos y no mostraremos las visitas. Eset mensaje aparecerá al principio. 
− Ese cuadro sale una vez por sesión ;expires=Thu, 01 Jan 1970 00:00:00 UTC";
 */

const fecha = new Date;

let anyo =  fecha.getFullYear() +1
fecha.setFullYear(anyo);

    let caducidad = fecha.toUTCString();
    console.log(caducidad)


if (document.cookie.length == 0) {
    document.cookie = "username=1;expires="+caducidad;
    let confirma = window.confirm("Este sitio utiliza cookie, confirma: ")
    if (confirma) {
        document.write(" Visita 1.")
    } else {
        document.cookie = "username=1;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
} else {
    visitacookie = document.cookie.valueOf();
    
    visitacookie = visitacookie.split("=");
    let confirma = window.confirm("cookie, confirma: ")
    if (confirma) {
        let visita = Number(parseInt(visitacookie[1]))
        visita++;
        document.cookie = "username="+ visita+";expires="+caducidad;
        document.write(" Visita " + visita+ ".")
    } else if(confirma==false){

       document.cookie = "username="+";expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
}

console.log(document.cookie)

