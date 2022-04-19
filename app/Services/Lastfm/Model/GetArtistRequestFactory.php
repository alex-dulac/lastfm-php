<?php

namespace App\Services\Lastfm\Model;

use Illuminate\Http\Request;

class GetArtistRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): GetArtistRequest
    {
        $name = $request->name;

        return new GetArtistRequest($name);
    }
}
