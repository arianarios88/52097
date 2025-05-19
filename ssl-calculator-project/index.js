import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador para obtener el lexer
     let inputStream = CharStreams.fromString(input);
     let lexer = new CalculatorLexer(inputStream);
        
        //Verificar si el lexer está generando tokens 
        console.log("Verificando tokens generados por el lexer...");
        const tokens = lexer.getAllTokens();
        if (tokens.length === 0) {
            console.error("No se generaron tokens. Verifica la entrada y la gramática.");
            return;
        }

        console.log("\nTabla de Tokens y Lexemas:");
        console.log("--------------------------------------------------");
        console.log("| LEXEMA         | TOKEN                          |");
        console.log("--------------------------------------------------");

        // Recorrer todos los tokens generados por el lexer
        for (let token of tokens) {
            // Obtener el nombre simbólico del token
            const tokenType = CalculatorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text; // Obtener el lexema (texto del token)
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
        }
        console.log("--------------------------------------------------"); 
    
        /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
         * Es necesario volver a procesar la entrada porque la función getAllTokens() consume
         * todos los tokens reconocidos y vacía el lexer. */
        inputStream = CharStreams.fromString(input);
        lexer = new CalculatorLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new CalculatorParser(tokenStream);
        
        const tree = parser.programa();

    
    
    // Verifico si se produjeron errores
    if (parser._syntaxErrors > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        return;
    }

        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`); 
        const visitor = new CustomCalculatorVisitor();
        const codigoTraducido = visitor.visit(tree);

        console.log("\nCódigo traducido a JavaScript:\n");
        console.log(codigoTraducido);

        console.log("\nEjecutando resultado:");
    try {
      eval(codigoTraducido);
    } catch (e) {
    console.error("Error al ejecutar el código traducido:", e.message);
    }
  
    
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();