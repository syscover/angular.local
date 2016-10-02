<?php
// https://phpsblog.wordpress.com/2013/09/07/objetos-y-referencias-en-memoria-en-php/
class myClass {
    public $var;

    function __construct() {
        $this->var = 1;
    }

    function inc() { return ++$this->var; }
}

$a = new myClass(); // $a "referencia" a un objeto Foo
$b = $a; //b también referencia al mismo objeto Foo que a
//($a) == ($b) == <id> del objeto Foo, pero a y b son entradas distintas en la tabla de símbolos

echo "\$a = ";var_dump($a);
echo "\$b = ";var_dump($b);

$c = &$a; //$c es un alias de $a
//($a, $c) == <id> del objeto Foo, c es un alias de a en la tabla de símbolos
echo "\$c = ";var_dump($c);

$a = NULL;
//Se elimina la entrada en la tabla de símbolos donde se relacionaba a "$a" con el objeto Foo
//Al eliminarse esta entrada, $c también deja de estar relacionado con Foo
//A todos los efectos, Foo sigue existiendo en memoria, y sigue estando relacionado con $b
echo "\$a = ";var_dump($a);
echo "\$b = ";var_dump($b);
echo "\$c = ";var_dump($c);
echo "\$b->var: ".$b->inc();
echo "\$b->var: ".$b->inc();

$b = NULL;
//Se elimina la entrada en la tabla de símbolos donde se relacionaba a "$b" con el objeto Foo
//Ya no hay más entradas en la tabla de símbolos que se relacionen con Foo,
//Por lo que Foo ha dejado de estar referenciado y puede ser eliminado por el garbage collector

echo "\$b = ";var_dump($b);