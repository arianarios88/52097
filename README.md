# Aclaraciones ‼️

Ejecutamos el archivo con el comando "node index.js" desde la terminal.
El archivo del analizador ya contiene el input correcto 1 (adicional al archivo pedido). 

---

## ¿Qué hace este programa?

Este proyecto es un intérprete de un lenguaje personalizado en español usando ANTLR4 y JavaScript.  
Permite declarar variables, hacer operaciones, imprimir por consola y usar estructuras de repetición (`variar`).

---

## Cómo abrir el repositorio 

Abrí una terminal (puede ser CMD, PowerShell o Git Bash) en tu ordenador.
Despues cloná el repositorio del siguiente modo, en la terminal escribe:
git clone https://github.com/arianarios88/52097.git

###Nota: veremos si esta bien clonando si en todas las líneas tenemos el mensaje de "done".

Luego cambiamos al archivo con:
cd 52097 
Finalmente ponemos "code ."

###en la terminal, claro esta.

Esto nos abrira el Visual Estudio con todo nuestro repositorio clonado. En el lado izquierdo del programas veremos los archivos y carpetas (las 4 entradas, el readme y la gramatica). La que tiene por nombre "ssl-antlr-calculator" nos mostrará los archivos del analizador. 


 En este caso, si queremos directamente correr el programa, ya deje puesta una entrada, pero si queremos cambiar esta misma por otra nos dirigimos a los archivos de inputs, hacemos copy y pegamos en el input de la carpeta Calculator.
La entrada a probar predeterminada es la correcta número 1:

variar x desde 1 hasta 5 con paso 1 hacer
    x <- x + 1
    escribir x
fin_variar

---

## Resultado esperado

Y corremos el programa con F5.
Presionamos ctrl + ñ que nos abrira la terminal del VS, en  este apartado se nos mostrará la tabla de lexemas y tokens, arbol de derivación y la traduccion a Java con resultado esperado de la gramatica, para ver esto pondremos el comando "node index.js" y presionamos enter, esta entrada deberia mostrarnos el siguiente resultado:

Tabla de Tokens y Lexemas:
--------------------------------------------------
| LEXEMA         | TOKEN                          |
--------------------------------------------------
| variar         | VARIAR                        |
| x              | IDENTIFICADOR                 |
| desde          | DESDE                         |
| 1              | NUMERO                        |
| hasta          | HASTA                         |
| 5              | NUMERO                        |
| con            | CON                           |
| paso           | PASO                          |
| 1              | NUMERO                        |
| hacer          | HACER                         |
| x              | IDENTIFICADOR                 |
| <-             | FLECHA                        |
| x              | IDENTIFICADOR                 |
| +              | ADD                           |
| 1              | NUMERO                        |
| escribir       | ESCRIBIR                      |
| x              | IDENTIFICADOR                 |
| fin_variar     | FIN_VARIAR                    |
--------------------------------------------------

Entrada válida.
Árbol de derivación: (programa (instruccion (variar variar (variable x) desde (expresion (termino 1)) hasta (expresion (termino 5)) con paso (expresion (termino 1)) hacer (bloque (instruccion (asignacion (variable x) <- (expresion (termino (variable x)) + (termino 1)))) (instruccion (salida escribir (expresion (termino (variable x)))))) fin_variar)))

Código traducido a JavaScript:

let x = 1;
while (x <= 5) {
x = x + 1;
console.log(x);
x += 1;
}


Ejecutando resultado:
2
4
6


Si este es el output que la consola muestra, esta todo correctamente ejecutado.

Puedes probar los otros inputs realizando los mismos pasos. 
