<?php

namespace App\Http\Controllers;

use App\Libraries\Ioc\Ioc;
use App\Services\Lastfm\LastfmService;
use App\Services\Lastfm\Model\GetArtistRequestFactory;
use Illuminate\Http\Request;

class LastfmController extends Controller
{
    public function testing()
    {
        echo json_encode(array('get' => "Testing"));
    }

    public function getArtist(Request $request)
    {
        $parameters = $this->getGetArtistRequestFactory()->parseRequest($request);
        $data = $this->getLastfmService()->getArtistInfo($parameters);
        return $data['artist'];
    }

    public function getLastfmService(): LastfmService
    {
        return Ioc::make(LastfmService::class);
    }

    public function getGetArtistRequestFactory(): GetArtistRequestFactory
    {
        return Ioc::make(GetArtistRequestFactory::class);
    }
}
