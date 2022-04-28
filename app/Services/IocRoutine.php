<?php

namespace App\Services;

use App\Json\Serializers\ArtistSerializer;
use App\Json\Serializers\SearchArtistSerializer;
use App\Libraries\Ioc\Ioc;
use App\Services\Lastfm\LastfmService;
use App\Services\Lastfm\Model\GetAlbumRequestFactory;
use App\Services\Lastfm\Model\SearchAlbumRequestFactory;
use App\Services\Lastfm\Model\GetArtistRequestFactory;
use App\Services\Lastfm\Model\SearchArtistRequestFactory;

trait IocRoutine
{
    public function getLastfmService(): LastfmService
    {
        return Ioc::make(LastfmService::class);
    }

    public function getSearchArtistRequestFactory(): SearchArtistRequestFactory
    {
        return Ioc::make(SearchArtistRequestFactory::class);
    }

    public function getGetArtistRequestFactory(): GetArtistRequestFactory
    {
        return Ioc::make(GetArtistRequestFactory::class);
    }

    public function getSearchAlbumRequestFactory(): SearchAlbumRequestFactory
    {
        return Ioc::make(SearchAlbumRequestFactory::class);
    }

    public function getGetAlbumRequestFactory(): GetAlbumRequestFactory
    {
        return Ioc::make(GetAlbumRequestFactory::class);
    }

    public function getSearchArtistSerializer(): SearchArtistSerializer
    {
        return Ioc::make(SearchArtistSerializer::class);
    }

    public function getArtistSerializer(): ArtistSerializer
    {
        return Ioc::make(ArtistSerializer::class);
    }
}
