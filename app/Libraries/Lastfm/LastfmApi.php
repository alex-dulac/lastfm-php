<?php

namespace App\Libraries\Lastfm;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Http;

class LastfmApi
{
    private string $baseUrl;

    private string $apiKey;

    public const ARTIST_INFO_URL = '/2.0/?method=artist.getinfo';

    public const TIMEOUT = 10;

    public function __construct()
    {
        $this->baseUrl = getenv('LASTFM_API_BASE_URL');
        $this->apiKey = getenv('LASTFM_API_KEY');
    }

    /**
     * @param $artistName
     * @return mixed
     */
    public function getArtistInfo($artistName): mixed
    {
        try {

            $response = Http::get(
            $this->baseUrl . self::ARTIST_INFO_URL . '&artist=' . $artistName . '&api_key=' . $this->apiKey . '&format=json'
            );

            return $response->json();

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();

            throw $exception;
        }
    }
}
