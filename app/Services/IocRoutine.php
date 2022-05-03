<?php

namespace App\Services;

use App\Json\Serializers\ArtistSerializer;
use App\Json\Serializers\SearchReleaseGroupSerializer;
use App\Libraries\Ioc\Ioc;
use App\Services\Encyclopedia\EncyclopediaService;
use App\Services\Encyclopedia\Model\GetReleaseGroupRequestFactory;
use App\Services\Encyclopedia\Model\SearchReleaseGroupRequestFactory;
use App\Services\Encyclopedia\Model\GetArtistRequestFactory;
use App\Services\Encyclopedia\Model\SearchArtistRequestFactory;

trait IocRoutine
{
    // services
    public function getEncyclopediaService(): EncyclopediaService
    {
        return Ioc::make(EncyclopediaService::class);
    }

    // request factories
    public function getSearchArtistRequestFactory(): SearchArtistRequestFactory
    {
        return Ioc::make(SearchArtistRequestFactory::class);
    }

    public function getGetArtistRequestFactory(): GetArtistRequestFactory
    {
        return Ioc::make(GetArtistRequestFactory::class);
    }

    public function getSearchReleaseGroupRequestFactory(): SearchReleaseGroupRequestFactory
    {
        return Ioc::make(SearchReleaseGroupRequestFactory::class);
    }

    public function getGetReleaseGroupRequestFactory(): GetReleaseGroupRequestFactory
    {
        return Ioc::make(GetReleaseGroupRequestFactory::class);
    }

    // serializers
    public function getSearchArtistSerializer(): SearchReleaseGroupSerializer
    {
        return Ioc::make(SearchReleaseGroupSerializer::class);
    }

    public function getArtistSerializer(): ArtistSerializer
    {
        return Ioc::make(ArtistSerializer::class);
    }

    public function getSearchReleaseGroupSerializer(): SearchReleaseGroupSerializer
    {
        return Ioc::make(SearchReleaseGroupSerializer::class);
    }
}
