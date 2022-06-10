<?php

namespace App\Services\Encyclopedia;

use App\Libraries\LastFm\LastFmApi;
use App\Libraries\Wikipedia\WikipediaApi;
use App\Libraries\Musicbrainz\MusicBrainzApi;
use App\Services\Encyclopedia\Model\GetReleaseGroupRequest;
use App\Services\Encyclopedia\Model\SearchReleaseGroupRequest;
use App\Services\Encyclopedia\Model\GetArtistRequest;
use App\Services\Encyclopedia\Model\SearchArtistRequest;

class EncyclopediaService
{
    private MusicBrainzApi $musicBrainzApi;
    private WikipediaApi $wikipediaApi;
    private LastFmApi $lastFmApi;

    public function __construct(MusicBrainzApi $musicBrainzApi, WikipediaApi $wikipediaApi, LastFmApi $lastFmApi)
    {
        $this->musicBrainzApi = $musicBrainzApi;
        $this->wikipediaApi = $wikipediaApi;
        $this->lastFmApi = $lastFmApi;
    }

    public function searchArtist(SearchArtistRequest $request)
    {
        $searchTerm = $request->getSearchTerm();
        return $this->musicBrainzApi->searchArtist($searchTerm);
    }

    public function getArtistInfo(GetArtistRequest $request)
    {
        $artistData = [];
        $artistId = $request->getArtistId();
        $artistData['musicBrainzData'] = $this->musicBrainzApi->getArtistInfo($artistId);

        $artistName = str_replace('-', '%2D', $artistData['musicBrainzData']['name']);
        $artistData['wikipediaData'] = $this->wikipediaApi->extractWikiIntro($artistName);
        $artistData['lastFmData'] = $this->lastFmApi->getArtistInfo($artistName);
        return $artistData;
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
