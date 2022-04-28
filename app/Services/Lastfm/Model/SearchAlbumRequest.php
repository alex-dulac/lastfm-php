<?php

namespace App\Services\Lastfm\Model;

class SearchAlbumRequest
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
