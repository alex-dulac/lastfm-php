<?php

namespace App\Services\Encyclopedia\Model;

use Illuminate\Http\Request;

class GetArtistRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): GetArtistRequest
    {
        $artistId = $request->artistId;

        return new GetArtistRequest($artistId);
    }
}
