<?php

namespace App\Services\Lastfm\Model;

class SearchArtistRequest
{
    private string $searchTerm;

    public function __construct($searchTerm)
    {
        $this->searchTerm = $searchTerm;
    }

    public function getSearchTerm(): string
    {
        return $this->searchTerm;
    }
}
