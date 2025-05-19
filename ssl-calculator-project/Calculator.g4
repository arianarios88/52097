grammar Calculator ;

programa
: instruccion+ 
;

instruccion
 : 
 variar | asignacion | salida 
 ;

variar
 : VARIAR variable DESDE expresion HASTA expresion (CON PASO expresion)? HACER bloque FIN_VARIAR
 ;

variable
 : 
 IDENTIFICADOR
 ;

expresion 
  : 
  termino ((ADD | SUB | MUL | DIV ) termino)*
  ;

termino 
  : 
  NUMERO | variable | LPAREN expresion RPAREN  
  ;

bloque
 : 
 (instruccion)+
 ;

asignacion 
  : variable FLECHA expresion 
  ;

salida 
  :
  ESCRIBIR expresion 
  ;

/// *** LEXER RULES *** ///

  VARIAR: 'variar';

  DESDE: 'desde';
 
  HASTA: 'hasta';

  CON: 'con';
 
  PASO: 'paso';
 
  HACER: 'hacer';
 
  FIN_VARIAR: 'fin_variar';
 
  ESCRIBIR: 'escribir';

  FLECHA : '<-' ;

  ADD : '+' ;
  SUB : '-' ;
  MUL : '*' ;
  DIV : '/' ;

  LPAREN : '(' ;
  RPAREN : ')' ;

  IDENTIFICADOR : [a-zA-Z] [a-zA-Z0-9_]* ;

  NUMERO : [0-9]+;

  WS: [ \t\n\r\f]+ -> skip;