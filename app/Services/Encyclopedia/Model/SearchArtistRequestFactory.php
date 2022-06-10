<?php

namespace App\Services\Encyclopedia\Model;

use Illuminate\Http\Request;

class SearchArtistRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): SearchArtistRequest
    {
        $searchTerm = $request->searchTerm;

        return new SearchArtistRequest($searchTerm);
    }
}
