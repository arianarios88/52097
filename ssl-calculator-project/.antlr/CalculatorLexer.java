// Generated from c:/Users/Lenovo/Desktop/ssl-calculator-project/Calculator.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CalculatorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VARIAR=1, DESDE=2, HASTA=3, CON=4, PASO=5, HACER=6, FIN_VARIAR=7, ESCRIBIR=8, 
		FLECHA=9, ADD=10, SUB=11, MUL=12, DIV=13, LPAREN=14, RPAREN=15, IDENTIFICADOR=16, 
		NUMERO=17, WS=18;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"VARIAR", "DESDE", "HASTA", "CON", "PASO", "HACER", "FIN_VARIAR", "ESCRIBIR", 
			"FLECHA", "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", "IDENTIFICADOR", 
			"NUMERO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'variar'", "'desde'", "'hasta'", "'con'", "'paso'", "'hacer'", 
			"'fin_variar'", "'escribir'", "'<-'", "'+'", "'-'", "'*'", "'/'", "'('", 
			"')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "VARIAR", "DESDE", "HASTA", "CON", "PASO", "HACER", "FIN_VARIAR", 
			"ESCRIBIR", "FLECHA", "ADD", "SUB", "MUL", "DIV", "LPAREN", "RPAREN", 
			"IDENTIFICADOR", "NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CalculatorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calculator.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0012}\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0005\u000fm\b\u000f\n\u000f\f\u000fp\t\u000f\u0001\u0010\u0004"+
		"\u0010s\b\u0010\u000b\u0010\f\u0010t\u0001\u0011\u0004\u0011x\b\u0011"+
		"\u000b\u0011\f\u0011y\u0001\u0011\u0001\u0011\u0000\u0000\u0012\u0001"+
		"\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007"+
		"\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d"+
		"\u000f\u001f\u0010!\u0011#\u0012\u0001\u0000\u0004\u0002\u0000AZaz\u0004"+
		"\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\f\r  \u007f\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0001%\u0001\u0000\u0000\u0000\u0003,"+
		"\u0001\u0000\u0000\u0000\u00052\u0001\u0000\u0000\u0000\u00078\u0001\u0000"+
		"\u0000\u0000\t<\u0001\u0000\u0000\u0000\u000bA\u0001\u0000\u0000\u0000"+
		"\rG\u0001\u0000\u0000\u0000\u000fR\u0001\u0000\u0000\u0000\u0011[\u0001"+
		"\u0000\u0000\u0000\u0013^\u0001\u0000\u0000\u0000\u0015`\u0001\u0000\u0000"+
		"\u0000\u0017b\u0001\u0000\u0000\u0000\u0019d\u0001\u0000\u0000\u0000\u001b"+
		"f\u0001\u0000\u0000\u0000\u001dh\u0001\u0000\u0000\u0000\u001fj\u0001"+
		"\u0000\u0000\u0000!r\u0001\u0000\u0000\u0000#w\u0001\u0000\u0000\u0000"+
		"%&\u0005v\u0000\u0000&\'\u0005a\u0000\u0000\'(\u0005r\u0000\u0000()\u0005"+
		"i\u0000\u0000)*\u0005a\u0000\u0000*+\u0005r\u0000\u0000+\u0002\u0001\u0000"+
		"\u0000\u0000,-\u0005d\u0000\u0000-.\u0005e\u0000\u0000./\u0005s\u0000"+
		"\u0000/0\u0005d\u0000\u000001\u0005e\u0000\u00001\u0004\u0001\u0000\u0000"+
		"\u000023\u0005h\u0000\u000034\u0005a\u0000\u000045\u0005s\u0000\u0000"+
		"56\u0005t\u0000\u000067\u0005a\u0000\u00007\u0006\u0001\u0000\u0000\u0000"+
		"89\u0005c\u0000\u00009:\u0005o\u0000\u0000:;\u0005n\u0000\u0000;\b\u0001"+
		"\u0000\u0000\u0000<=\u0005p\u0000\u0000=>\u0005a\u0000\u0000>?\u0005s"+
		"\u0000\u0000?@\u0005o\u0000\u0000@\n\u0001\u0000\u0000\u0000AB\u0005h"+
		"\u0000\u0000BC\u0005a\u0000\u0000CD\u0005c\u0000\u0000DE\u0005e\u0000"+
		"\u0000EF\u0005r\u0000\u0000F\f\u0001\u0000\u0000\u0000GH\u0005f\u0000"+
		"\u0000HI\u0005i\u0000\u0000IJ\u0005n\u0000\u0000JK\u0005_\u0000\u0000"+
		"KL\u0005v\u0000\u0000LM\u0005a\u0000\u0000MN\u0005r\u0000\u0000NO\u0005"+
		"i\u0000\u0000OP\u0005a\u0000\u0000PQ\u0005r\u0000\u0000Q\u000e\u0001\u0000"+
		"\u0000\u0000RS\u0005e\u0000\u0000ST\u0005s\u0000\u0000TU\u0005c\u0000"+
		"\u0000UV\u0005r\u0000\u0000VW\u0005i\u0000\u0000WX\u0005b\u0000\u0000"+
		"XY\u0005i\u0000\u0000YZ\u0005r\u0000\u0000Z\u0010\u0001\u0000\u0000\u0000"+
		"[\\\u0005<\u0000\u0000\\]\u0005-\u0000\u0000]\u0012\u0001\u0000\u0000"+
		"\u0000^_\u0005+\u0000\u0000_\u0014\u0001\u0000\u0000\u0000`a\u0005-\u0000"+
		"\u0000a\u0016\u0001\u0000\u0000\u0000bc\u0005*\u0000\u0000c\u0018\u0001"+
		"\u0000\u0000\u0000de\u0005/\u0000\u0000e\u001a\u0001\u0000\u0000\u0000"+
		"fg\u0005(\u0000\u0000g\u001c\u0001\u0000\u0000\u0000hi\u0005)\u0000\u0000"+
		"i\u001e\u0001\u0000\u0000\u0000jn\u0007\u0000\u0000\u0000km\u0007\u0001"+
		"\u0000\u0000lk\u0001\u0000\u0000\u0000mp\u0001\u0000\u0000\u0000nl\u0001"+
		"\u0000\u0000\u0000no\u0001\u0000\u0000\u0000o \u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000qs\u0007\u0002\u0000\u0000rq\u0001\u0000\u0000"+
		"\u0000st\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000\u0000tu\u0001\u0000"+
		"\u0000\u0000u\"\u0001\u0000\u0000\u0000vx\u0007\u0003\u0000\u0000wv\u0001"+
		"\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000"+
		"yz\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0006\u0011\u0000"+
		"\u0000|$\u0001\u0000\u0000\u0000\u0004\u0000nty\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
