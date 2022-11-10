import cipher from './cipher.js';

//se declara una función cifrar para hacer los respectivos llamados via id
//de los valores que se le entregaran a la función cipher.encode
function encriptar(){
    console.log('Hola Mundo');
   let mensajeEncriptado = cipher.encode(
        document.getElementById('mensaje').value.toUpperCase(),
        parseInt(document.getElementById('clave').value)
    );
console.log(mensajeEncriptado);

    //se imprime el resultado obtenido de cipher.encode() atrapado en mensajeEncriptado al hmtl
    //en el input con id mensaje2
    document.getElementById('mensaje2').value = mensajeEncriptado;

}

//escuchar el evento del click sobre el botón cifrar para que se ejecute la funcion cifrar()
document.getElementById('cifrar').addEventListener('click', encriptar);


function desencriptar(){
    let mensajeDesencriptado = cipher.decode(
         document.getElementById('mensaje').value.toUpperCase(),
         parseInt(document.getElementById('clave').value)
     );
 
     document.getElementById('mensaje2').value = mensajeDesencriptado;
 
 
 }
//escuchar el evento del click sobre el botón descifrar
document.getElementById('descifrar').addEventListener('click', desencriptar);
 

   

