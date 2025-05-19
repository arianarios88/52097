# ¿Qué debo tener instalado antes de empezar?

Antes de ejecutar este proyecto, asegurate de tener instalado:

- Visual Studio Code  
- Node.js  
- Java JDK  
- Git  
- ANTLR 4.13.2 (que lo instalaremos desde el mismo Visual Studio Code).

Si ya tenemos todo esto instalado, podemos proceder a ejecutar el programa. 

---

## ¿Qué hace este programa?

Este proyecto es un intérprete de un lenguaje personalizado en español usando ANTLR4 y JavaScript.  
Permite declarar variables, hacer operaciones, imprimir por consola y usar estructuras de repetición (`variar`).

---

## Cómo abrir el repositorio

Abrí una terminal (puede ser CMD, PowerShell o Git Bash) en tu ordenador. Preferentemente utiliza "Símbolo del Sistema".

Elegí una carpeta donde querés guardar el proyecto (por ejemplo: Documentos).
Para crear esta carpeta en la terminal que hayaselegido, escribimos el comando "md (nombre que le quieras poner al archivo) y luego de esto para cambiar al archivo creado pondremos: "cd (nombre del archivo creado", que nos posicionar en dicha carpeta.

Despues cloná el repositorio del siguiente modo, en la misma terminal donde hemos realizado todo escribe:
git clone https://github.com/arianarios88/52097.git
Luego:
cd 52097
Finalmente ponemos "code ."

Esto nos abrira el Visual Estudio con todo nuestro repositorio clonado. Nos iremos al archivo input donde pegaremos el input correcto 1 (previamente copiado), dicho archivo nos aparece en el repositorio que hemos abierto:

variar x desde 1 hasta 5 con paso 1 hacer
    x <- x + 1
    escribir x
fin_variar

---

## Resultado esperado

Y corremos el programa con F5.Presionamos ctrl + ñ que nos abrira la terminal del VS,en  este apartado se nos mostrará la tabla de lexemas y tokens, arbol de derivación y resultado esperado de la gramatica, para esto pondremos el comando "node index.js" y presionamos enter, esta entrada deberia mostrarnos el siguiente resultado:

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
