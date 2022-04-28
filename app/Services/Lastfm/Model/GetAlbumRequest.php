<?php

namespace App\Services\Lastfm\Model;

class GetAlbumRequest
{
    private string $artistName;
    private string $albumName;

    public function __construct($artistName, $albumName)
    {
        $this->artistName = $artistName;
        $this->albumName = $albumName;
    }

    public function getArtistName(): string
    {
        return $this->artistName;
    }

    public function getAlbumName(): string
    {
        return $this->albumName;
    }
}
