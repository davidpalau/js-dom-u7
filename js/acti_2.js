/**
 * ACTIVITY 2 – Salto a Google en 5 segundos 
− Muestra una página que diga Nos vamos y que
 tras 5 segundos nos redirija a la página del buscador Google.
 */

 document.write("Nos vamos")
 var goo = ()=> location.href = 'https://code.tutsplus.com';
 setTimeout( goo, 5000);

