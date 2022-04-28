<?php

namespace App\Http\Controllers;

use App\Services\IocRoutine;
use Illuminate\Http\Request;

class LastfmController extends Controller
{
    use IocRoutine;

    public function searchArtist(Request $request)
    {
        $parameters = $this->getSearchArtistRequestFactory()->parseRequest($request);
        $data = $this->getLastfmService()->searchArtist($parameters);
        return $this->getSearchArtistSerializer()->serialize($data);
    }

    public function getArtist(Request $request)
    {
        $parameters = $this->getGetArtistRequestFactory()->parseRequest($request);
        $data = $this->getLastfmService()->getArtistInfo($parameters);
        return $this->getArtistSerializer()->serialize($data);
    }

    public function searchAlbum(Request $request)
    {
        $parameters = $this->getSearchAlbumRequestFactory()->parseRequest($request);
        $data = $this->getLastfmService()->searchAlbum($parameters);
        return $this->getSearchArtistSerializer()->serialize($data);
    }

    public function getAlbum(Request $request)
    {
        $parameters = $this->getGetAlbumRequestFactory()->parseRequest($request);
        return $this->getLastfmService()->getAlbumInfo($parameters);
    }
}
