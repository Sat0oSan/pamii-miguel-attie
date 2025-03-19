<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class Strgtest extends TestCase
{

    public function testeDoOi(): void
    {
        echo 'digite é Oi ou não .. : ' $x($argv); 
        if($x != 'Oi' ){
            $this->assertTrue('não é Oi');
        };
    };
}
