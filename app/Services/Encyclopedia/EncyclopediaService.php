<?php

namespace App\Services\Encyclopedia;

use App\Libraries\MediaWiki\WikipediaApi;
use App\Libraries\Musicbrainz\MusicBrainzApi;
use App\Services\Encyclopedia\Model\GetReleaseGroupRequest;
use App\Services\Encyclopedia\Model\SearchReleaseGroupRequest;
use App\Services\Encyclopedia\Model\GetArtistRequest;
use App\Services\Encyclopedia\Model\SearchArtistRequest;

class EncyclopediaService
{
    private MusicBrainzApi $musicBrainzApi;
    private WikipediaApi $wikipediaApi;

    public function __construct(MusicBrainzApi $lastfmApi, WikipediaApi $wikipediaApi)
    {
        $this->musicBrainzApi = $lastfmApi;
        $this->wikipediaApi = $wikipediaApi;
    }

    public function searchArtist(SearchArtistRequest $request)
    {
        $searchTerm = $request->getSearchTerm();
        return $this->musicBrainzApi->searchArtist($searchTerm);
    }

    public function getArtistInfo(GetArtistRequest $request)
    {
        $artistId = $request->getArtistId();
        return $this->musicBrainzApi->getArtistInfo($artistId);
    }

    public function searchReleaseGroup(SearchReleaseGroupRequest $request)
    {
        $searchTerm = $request->getSearchTerm();
        return $this->musicBrainzApi->searchReleaseGroup($searchTerm);
    }

    public function getReleaseGroup(GetReleaseGroupRequest $request)
    {
        $releaseGroupId = $request->getReleaseGroupId();
        return $this->musicBrainzApi->getReleaseGroup($releaseGroupId);
    }
}
