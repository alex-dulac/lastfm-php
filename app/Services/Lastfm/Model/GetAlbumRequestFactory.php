<?php

namespace App\Services\Lastfm\Model;

use Illuminate\Http\Request;

class GetAlbumRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): GetAlbumRequest
    {
        $artistName = $request->artistName;
        $albumName = $request->albumName;

        return new GetAlbumRequest($artistName, $albumName);
    }
}
