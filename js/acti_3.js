/**
 * ACTIVITY 3 – Contador de visitas con aviso de cookies 
− Crear una aplicación que nos muestre el número de veces que hemos entrado. 
− Lo haremos mediante una cookie que caducará después de un año 
− Pero primero avisaremos con un cuadro de confirmación, que grabamos cookies en la página. Si el usuario 
no acepta cookies las borramos y no mostraremos las visitas. Eset mensaje aparecerá al principio. 
− Ese cuadro sale una vez por sesión 
 */

document.cookie = "gema=valido"

console.log(document.cookie)

