// Generated from Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,18,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,1,1,1,1,1,
3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,38,8,2,1,2,1,2,1,2,1,
2,1,3,1,3,1,4,1,4,1,4,5,4,49,8,4,10,4,12,4,52,9,4,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,60,8,5,1,6,5,6,63,8,6,10,6,12,6,66,9,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,10,13,73,0,19,1,0,0,0,2,26,1,0,0,
0,4,28,1,0,0,0,6,43,1,0,0,0,8,45,1,0,0,0,10,59,1,0,0,0,12,64,1,0,0,0,14,
67,1,0,0,0,16,71,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,
1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,27,3,4,2,0,24,27,3,14,7,0,25,27,3,
16,8,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,3,1,0,0,0,28,29,5,1,
0,0,29,30,3,6,3,0,30,31,5,2,0,0,31,32,3,8,4,0,32,33,5,3,0,0,33,37,3,8,4,
0,34,35,5,4,0,0,35,36,5,5,0,0,36,38,3,8,4,0,37,34,1,0,0,0,37,38,1,0,0,0,
38,39,1,0,0,0,39,40,5,6,0,0,40,41,3,12,6,0,41,42,5,7,0,0,42,5,1,0,0,0,43,
44,5,16,0,0,44,7,1,0,0,0,45,50,3,10,5,0,46,47,7,0,0,0,47,49,3,10,5,0,48,
46,1,0,0,0,49,52,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,9,1,0,0,0,52,50,
1,0,0,0,53,60,5,17,0,0,54,60,3,6,3,0,55,56,5,14,0,0,56,57,3,8,4,0,57,58,
5,15,0,0,58,60,1,0,0,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,60,11,1,
0,0,0,61,63,3,2,1,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,
0,0,65,13,1,0,0,0,66,64,1,0,0,0,67,68,3,6,3,0,68,69,5,9,0,0,69,70,3,8,4,
0,70,15,1,0,0,0,71,72,5,8,0,0,72,73,3,8,4,0,73,17,1,0,0,0,6,21,26,37,50,
59,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'variar'", "'desde'", "'hasta'", "'con'", 
                            "'paso'", "'hacer'", "'fin_variar'", "'escribir'", 
                            "'<-'", "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, "VARIAR", "DESDE", "HASTA", "CON", "PASO", 
                             "HACER", "FIN_VARIAR", "ESCRIBIR", "FLECHA", 
                             "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", 
                             "IDENTIFICADOR", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variar", "variable", 
                         "expresion", "termino", "bloque", "asignacion", 
                         "salida" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.instruccion();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65794) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_instruccion);
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 23;
	            this.variar();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this.asignacion();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 25;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variar() {
	    let localctx = new VariarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_variar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(CalculatorParser.VARIAR);
	        this.state = 29;
	        this.variable();
	        this.state = 30;
	        this.match(CalculatorParser.DESDE);
	        this.state = 31;
	        this.expresion();
	        this.state = 32;
	        this.match(CalculatorParser.HASTA);
	        this.state = 33;
	        this.expresion();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 34;
	            this.match(CalculatorParser.CON);
	            this.state = 35;
	            this.match(CalculatorParser.PASO);
	            this.state = 36;
	            this.expresion();
	        }

	        this.state = 39;
	        this.match(CalculatorParser.HACER);
	        this.state = 40;
	        this.bloque();
	        this.state = 41;
	        this.match(CalculatorParser.FIN_VARIAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(CalculatorParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalculatorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.termino();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0)) {
	            this.state = 46;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 47;
	            this.termino();
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalculatorParser.RULE_termino);
	    try {
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(CalculatorParser.NUMERO);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.variable();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.match(CalculatorParser.LPAREN);
	            this.state = 56;
	            this.expresion();
	            this.state = 57;
	            this.match(CalculatorParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalculatorParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65794) !== 0)) {
	            this.state = 61;
	            this.instruccion();
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalculatorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.variable();
	        this.state = 68;
	        this.match(CalculatorParser.FLECHA);
	        this.state = 69;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalculatorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(CalculatorParser.ESCRIBIR);
	        this.state = 72;
	        this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.VARIAR = 1;
CalculatorParser.DESDE = 2;
CalculatorParser.HASTA = 3;
CalculatorParser.CON = 4;
CalculatorParser.PASO = 5;
CalculatorParser.HACER = 6;
CalculatorParser.FIN_VARIAR = 7;
CalculatorParser.ESCRIBIR = 8;
CalculatorParser.FLECHA = 9;
CalculatorParser.ADD = 10;
CalculatorParser.SUB = 11;
CalculatorParser.MUL = 12;
CalculatorParser.DIV = 13;
CalculatorParser.LPAREN = 14;
CalculatorParser.RPAREN = 15;
CalculatorParser.IDENTIFICADOR = 16;
CalculatorParser.NUMERO = 17;
CalculatorParser.WS = 18;

CalculatorParser.RULE_programa = 0;
CalculatorParser.RULE_instruccion = 1;
CalculatorParser.RULE_variar = 2;
CalculatorParser.RULE_variable = 3;
CalculatorParser.RULE_expresion = 4;
CalculatorParser.RULE_termino = 5;
CalculatorParser.RULE_bloque = 6;
CalculatorParser.RULE_asignacion = 7;
CalculatorParser.RULE_salida = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_instruccion;
    }

	variar() {
	    return this.getTypedRuleContext(VariarContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variar;
    }

	VARIAR() {
	    return this.getToken(CalculatorParser.VARIAR, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	DESDE() {
	    return this.getToken(CalculatorParser.DESDE, 0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	HASTA() {
	    return this.getToken(CalculatorParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(CalculatorParser.HACER, 0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	FIN_VARIAR() {
	    return this.getToken(CalculatorParser.FIN_VARIAR, 0);
	};

	CON() {
	    return this.getToken(CalculatorParser.CON, 0);
	};

	PASO() {
	    return this.getToken(CalculatorParser.PASO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(CalculatorParser.IDENTIFICADOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.ADD);
	    } else {
	        return this.getToken(CalculatorParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.SUB);
	    } else {
	        return this.getToken(CalculatorParser.SUB, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.MUL);
	    } else {
	        return this.getToken(CalculatorParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalculatorParser.DIV);
	    } else {
	        return this.getToken(CalculatorParser.DIV, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(CalculatorParser.NUMERO, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	FLECHA() {
	    return this.getToken(CalculatorParser.FLECHA, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_salida;
    }

	ESCRIBIR() {
	    return this.getToken(CalculatorParser.ESCRIBIR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalculatorParser.ProgramaContext = ProgramaContext; 
CalculatorParser.InstruccionContext = InstruccionContext; 
CalculatorParser.VariarContext = VariarContext; 
CalculatorParser.VariableContext = VariableContext; 
CalculatorParser.ExpresionContext = ExpresionContext; 
CalculatorParser.TerminoContext = TerminoContext; 
CalculatorParser.BloqueContext = BloqueContext; 
CalculatorParser.AsignacionContext = AsignacionContext; 
CalculatorParser.SalidaContext = SalidaContext; 
