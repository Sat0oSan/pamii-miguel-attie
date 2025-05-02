<?php

//Pam-II Miguel Attie e Heitor Leal 3DA
//Prof. João Siles

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class atv_03_Asserts // Funções
{
        public function TrueOrFalse ($y, $x)
    {
        return $y === 1 && $x === 2;
    }
        public function Frase ($string1, $string2)
    {
        return $string1 . $string2;
    }

        public function Comparar ($y, $x)
    {
        if ($y === $x){
            return 'COMPARADO';
        } else {
            return 'NAO COMPARADO';
        }
    }
}

class atv_03_AssertsTests extends TestCase // Testes
{
    public function testBollean()
    {
        $assert = new atv_03_Asserts();// atribuir a classe
        $this->assertTrue($assert->TrueOrFalse(1, 2)); // Teste tem de dar true
    }

    public function testConcFrase()
    {
        $assert2 = new atv_03_Asserts(); // atribuir a classe
        $result = $assert2->Frase('Joao Siles ', 'Maravilhoso');
        $this->assertEquals('Joao Siles Maravilhoso', $result); //Teste ira dar certo
    }

    public function testComparacao()
    {
        $assert3 = new atv_03_Asserts(); // atribuir a classe
        $result = $assert3->Comparar('1234', '1235'); //Atribuindo valor
        $this->assertSame('COMPARADO', $result); // Teste ira dar errado ('esperado' , resultado)
    }
}


// Rodar o código ' .\vendor\bin\phpunit tests/Unit/atv_03_AssertsTests.php '
