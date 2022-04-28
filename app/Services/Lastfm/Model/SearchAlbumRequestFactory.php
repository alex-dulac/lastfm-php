<?php

namespace App\Services\Lastfm\Model;

use Illuminate\Http\Request;

class SearchAlbumRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): SearchAlbumRequest
    {
        $searchTerm = $request->searchTerm;

        return new SearchAlbumRequest($searchTerm);
    }
}
