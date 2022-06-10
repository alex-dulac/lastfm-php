<?php

namespace App\Services\Encyclopedia\Model;

class GetArtistRequest
{
    private string $artistId;

    public function __construct($artistId)
    {
        $this->artistId = $artistId;
    }

    public function getArtistId(): string
    {
        return $this->artistId;
    }
}
