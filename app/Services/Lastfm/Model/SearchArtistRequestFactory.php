<?php

namespace App\Services\Lastfm\Model;

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
