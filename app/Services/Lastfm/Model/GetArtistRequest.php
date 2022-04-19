<?php

namespace App\Services\Lastfm\Model;

class GetArtistRequest
{
    /** @var string */
    private $name;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }
}
