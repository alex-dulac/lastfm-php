<?php

namespace App\Http\Controllers;

use App\Services\IocRoutine;
use Illuminate\Http\Request;

class EncyclopediaController extends Controller
{
    use IocRoutine;

    public function searchArtist(Request $request)
    {
        $parameters = $this->getSearchArtistRequestFactory()->parseRequest($request);
        $data = $this->getEncyclopediaService()->searchArtist($parameters);
        return $this->getSearchArtistSerializer()->serialize($data);
    }

    public function getArtist(Request $request)
    {
        $parameters = $this->getGetArtistRequestFactory()->parseRequest($request);
        $data = $this->getEncyclopediaService()->getArtistInfo($parameters);
        return $this->getArtistSerializer()->serialize($data);
    }

    public function searchReleaseGroup(Request $request)
    {
        $parameters = $this->getSearchReleaseGroupRequestFactory()->parseRequest($request);
        $data = $this->getEncyclopediaService()->searchReleaseGroup($parameters);
        return $this->getSearchReleaseGroupSerializer()->serialize($data);
    }

    public function getRelease(Request $request)
    {
        $parameters = $this->getGetReleaseGroupRequestFactory()->parseRequest($request);
        return $this->getEncyclopediaService()->getReleaseGroup($parameters);
    }
}
