const cipher = {
//se define la función para cifrar del método cipher (cipher.encode)

// encode(text, offset){
  encode(offset, text){
  if (offset === 0 || text === typeof 0){
    throw new TypeError('esto es un error')
  }
 else if (offset === null || text === null){
    throw new TypeError('esto también es un error')
  }
  else if (offset === undefined || text === undefined){
    throw new TypeError('esto es otro error')
  }

  console.log(text, offset);
//declarar las variables necesarias para implementar la función
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  
//crear la condición para que extraiga letra por letra [i] del texto ingresado (text)
//y pueda hacer la rotación en alphabet según el offset (clave de cifrado)
//se aplica a todas las letras del texto, partiendo del índice 0 hasta el largo del text -1
  if (text){
    for(let i = 0; i<text.length; i++){ 
        if(alphabet.indexOf(text[i]) !=-1){ //indexOf devuelve -1 cuando no encuentra el caracter en la cadena
          let position = ((alphabet.indexOf(text[i]) +offset)%26);
          //A continuación ir sumando las letras cambiadas del text original a la cadena resultado
          result += alphabet[position];

        }
        //en caso que no sea una letra lo que se encuentra, se debe mostrar tal cual
        else 
        result += text[i];

    }
  }
  return result;
},

//decode(text, offset){
  decode(offset, text){
  if (offset === 0 || text === typeof 0){
    throw new TypeError('esto es un error')
  }
  else if (offset === null || text === null){
    throw new TypeError('esto también es un error')
  }
  else if (offset === undefined || text === undefined){
    throw new TypeError('esto es otro error')
  }
  console.log(text, offset);
  //declarar las variables necesarias para implementar la función
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    
  //crear la condición para que extraiga letra por letra [i] del texto ingresado (text)
  //y pueda hacer la rotación en alphabet según el offset (clave de cifrado)
  //se aplica a todas las letras del texto, partiendo del índice 0 hasta el largo del text -1
    if (text){
      for(let i = 0; i<text.length; i++){ 
          if(alphabet.indexOf(text[i]) !=-1){ //indexOf devuelve -1 cuando no encuentra el caracter en la cadena
            let position = alphabet.indexOf(text[i]) - (offset %26 + 26) % 26;
            if (position < 0) {

              position = alphabet.length + position
            }
            //A continuación ir sumando las letras cambiadas del text cifrado a la cadena resultado
            result += alphabet[position];
  
          }
          //en caso que no sea una letra lo que se encuentra, se debe mostrar tal cual
          else 
          result += text[i];
  
      }
    }
    return result;
  },
  


};

export default cipher;