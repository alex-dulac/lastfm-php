<?php

namespace App\Services\Encyclopedia\Model;

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
