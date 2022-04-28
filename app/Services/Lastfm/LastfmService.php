<?php

namespace App\Services\Lastfm;

use App\Libraries\Lastfm\LastfmApi;
use App\Services\Lastfm\Model\GetAlbumRequest;
use App\Services\Lastfm\Model\SearchAlbumRequest;
use App\Services\Lastfm\Model\GetArtistRequest;
use App\Services\Lastfm\Model\SearchArtistRequest;

class LastfmService
{
    private LastfmApi $lastfmApi;

    public function __construct(LastfmApi $lastfmApi)
    {
        $this->lastfmApi = $lastfmApi;
    }

    public function searchArtist(SearchArtistRequest $request)
    {
        $searchTerm = $request->getSearchTerm();
        return $this->lastfmApi->searchArtist($searchTerm);
    }

    public function getArtistInfo(GetArtistRequest $request)
    {
        $artistName = $request->getArtistName();
        return $this->lastfmApi->getArtistInfo($artistName);
    }

    public function searchAlbum(SearchAlbumRequest $request)
    {
        $searchTerm = $request->getSearchTerm();
        return $this->lastfmApi->searchArtist($searchTerm);
    }

    public function getAlbumInfo(GetAlbumRequest $request)
    {
        $artistName = $request->getArtistName();
        $albumName = $request->getAlbumName();
        return $this->lastfmApi->getAlbumInfo($artistName, $albumName);
    }
}
