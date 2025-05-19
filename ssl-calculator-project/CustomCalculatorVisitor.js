import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.resultado = ""; // Guarda el código JavaScript traducido
    }

    visitPrograma(ctx) {
        for (const hijo of ctx.children) {
            const linea = this.visit(hijo);
            if (linea) {
                this.resultado += linea + '\n';
            }
        }
        return this.resultado;
    }

    visitAsignacion(ctx) {
        const nombre = ctx.variable().getText();
        const valor = this.visit(ctx.expresion());
        return `${nombre} = ${valor};`;
    }

    visitSalida(ctx) {
        const valor = this.visit(ctx.expresion());
        return `console.log(${valor});`;
    }

    visitExpresion(ctx) {
        let resultado = this.visit(ctx.termino(0));
        const operadores = ctx.children.filter(c => ['+', '-', '*', '/'].includes(c.getText()));
        const terminos = ctx.termino();

        for (let i = 1; i < terminos.length; i++) {
            const operador = operadores[i - 1].getText();
            const valor = this.visit(terminos[i]);
            resultado += ` ${operador} ${valor}`;
        }

        return resultado;
    }

    visitTermino(ctx) {
        if (ctx.NUMERO()) {
            return ctx.NUMERO().getText();
        } else if (ctx.variable()) {
            return this.visit(ctx.variable());
        } else {
            return `(${this.visit(ctx.expresion())})`;
        }
    }

    visitVariable(ctx) {
        return ctx.IDENTIFICADOR().getText();
    }
    
    visitVariar(ctx) {
     const varName = this.visit(ctx.variable());
     const desde = this.visit(ctx.expresion(0));
     const hasta = this.visit(ctx.expresion(1));
     const paso = ctx.expresion(2) ? this.visit(ctx.expresion(2)) : "1";

     const instrucciones = ctx.bloque().instruccion()
        .map(instr => this.visit(instr))
        .join('\n');

     return `let ${varName} = ${desde};\nwhile (${varName} <= ${hasta}) {\n${instrucciones}\n${varName} += ${paso};\n}`;
    }
}
