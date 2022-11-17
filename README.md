# Proyecto CIPHER "Share Safe"

## 1. Presentación de proyecto Cipher

Share Safe es un cifrador de mensajes basado en la técnica del Cifrado César, éste es un tipo de cifrado por sustitución, lo que quiere decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento, aquí llamado `Clave`) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (`Clave`) de 3 posiciones:

    La letra A se cifra como D.
    La palabra CASA se cifra como FDVD.
    Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Esta aplicación web está pensada para compartir información privada entre amigos y/o familiares, ya sea por redes sociales, correo electrónico o apps de mensajería, para cuidar la seguridad de los datos compartidos. 

Un ejemplo de su utilidad es compartir datos de usuarios y contraseñas asociadas a cuentas de plataformas de streaming como lo son Netflix, Hbo Max, Youtube Premium, entre otras. También en el caso de necesitar compartir credenciales para loguearse en páginas de bancos, correos electrónicos e incluso datos para realizar pagos. Ya que es muy usual que se compartan este tipo de datos sin ningún filtro de seguridad para resguardarlos.

Los usuarios pueden compartir de forma segura datos sensibles con familiares y amigos, ya que los mensajes estarán codificados de modo tal qué no serán legibles, a menos que utilices Share Safe para obtener el mensaje original nuevamente.

Share Safe es una aplicación web fácil e intuitiva en su uso, con instrucciones claras y pocas opciones para realizar el cifrado o descifrado de mensajes.

## Modo de uso:
### Para Cifrar un Mensaje
* El usuario debe ingresar a la página web de la aplicación https://tianitol.github.io/DEV002-cipher/src/.
* Debe escribir dentro del cuadro `Escribe tu Mensaje` donde se indica `Ingrese su mensaje`.
* Debe elegir una clave de cifrado donde dice `Clave`, aquí puede ingresar cualquier número que desee, incluso números negativos.
* Finalmente debe dar click sobre el botón `Cifrar`.
* Obtendrá el mensaje cifrado en el cuadro inferior `Mensaje Obtenido`.

### Para Descifrar un Mensaje
* El usuario debe pegar, el mensaje encriptado que ha recibido, dentro del cuadro `Escribe tu Mensaje`, donde se indica `Ingrese su mensaje`.
* Debe elegir la clave de descifrado dada por quién le envía el mensaje, donde dice `Clave`.
* Finalmente debe dar click sobre el botón `Descifrar`.
* Obtendrá el mensaje descifrado en el cuadro inferior `Mensaje Obtenido`.

## 2. Definición del Producto - Diseño y UX

Share Safe fue pensado para compartir datos de forma segura en el cotidiano, ya sea entre amigos y/o familiares principalmente. Por ello era necesario un diseño simple, con una interfaz intuitiva y fácil de seguir por cualquier persona que sepa leer y escribir.

La idea era desplegar todo en una sola pantalla, donde además de estar el cifrador/descifrador, estuviera una breve introducción a la app y su uso.

### Prototipo de Baja fidelidad (Wideframe)
![image](/src/Images/wf.jpeg)

la elección de colores se basó principalmente en una paleta de colores que transmitiera por sobre todo confianza y tranquilidad y no saturara la pantalla.
También se utilizaron tamaños de letra medio-grande tanto en los cuadros de ingreso como de salida de texto, así como en los textos de los botones. Todo esto para asegurar la correcta visualización de las opciones por un público mayor incluso.

Se disminuyó la cantidad de cuadros de entrada y salida de texto para llevar la idea al prototipo (bosquejo) de alta fidelidad mostrado a continuación.

### Prototipo de Alta fidelidad (Mockup)
![image](/src/Images/mockup.jpeg)

## 3. Funcionalidades extras para una actualización

Pensando en la experiencia del usuario con la app desplegada, incluso como fue plasmado en el `Mockup`, es necesario un botón que copie el texto obtenido para ser facilmente extraido y posteriormente enviado vía cualquier plataforma que acepte texto.
Por otro lado se da la necesidad de un botón que limpie el campo `Ingrese su mensaje`. Además del botón `Enviar al correo` que compile además del mensaje cifrado, la clave de cifrado para compartirla via correo electrónico.

Funcionalidades a desarrollar:

* Botón `Copiar` el texto obtenido.
* Botón `Limpiar` el campo de ingreso de texto.
* Botón `Enviar al correo` el mensaje cifrado junto a la clave de cifrado.
