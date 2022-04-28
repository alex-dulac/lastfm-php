<?php

namespace App\Services\Lastfm\Model;

class GetArtistRequest
{
    private string $artistName;

    public function __construct($name)
    {
        $this->artistName = $name;
    }

    public function getArtistName(): string
    {
        return $this->artistName;
    }
}
