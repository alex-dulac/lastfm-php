<?php

namespace App\Services\Lastfm;

use App\Libraries\Lastfm\LastfmApi;
use App\Services\Lastfm\Model\GetArtistRequest;

class LastfmService
{
    /** @var LastfmApi */
    private $lastfmApi;

    public function __construct(LastfmApi $lastfmApi)
    {
        $this->lastfmApi = $lastfmApi;
    }

    public function getArtistInfo(GetArtistRequest $request)
    {
        $artistName = $request->getName();
        return $this->lastfmApi->getArtistInfo($artistName);
    }
}
