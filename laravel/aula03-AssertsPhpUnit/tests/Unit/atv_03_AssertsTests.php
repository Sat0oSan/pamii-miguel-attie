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

}

class atv_03_AssertsTests extends TestCase // Testes
{
    public function testBollean()
    {
        $assert = new atv_03_Asserts();
        $this->assertTrue($assert->TrueOrFalse(1, 2)); // Teste tem de dar true
    }



}

// Rodar o código ' .\vendor\bin\phpunit tests/Unit/atv_03_AssertsTests.php '
