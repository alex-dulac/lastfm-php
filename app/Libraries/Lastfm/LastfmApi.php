<?php

namespace App\Libraries\Lastfm;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class LastfmApi
{
    private string $baseUrl;
    private string $apiKey;

    public const SEARCH_ARTIST_URL = '/2.0/?method=artist.search';
    public const ARTIST_INFO_URL = '/2.0/?method=artist.getinfo';

    public const SEARCH_ALBUM_URL = '/2.0/?method=album.search';
    public const ALBUM_INFO_URL = '/2.0/?method=album.getinfo';

    public function __construct()
    {
        $this->baseUrl = getenv('LASTFM_API_BASE_URL');
        $this->apiKey = getenv('LASTFM_API_KEY');
    }

    /**
     * @param $searchTerm
     * @return mixed
     */
    public function searchArtist($searchTerm): mixed
    {
        try {
            $response = Http::get(
                $this->baseUrl . self::SEARCH_ARTIST_URL
                . '&artist=' . $searchTerm
                . '&api_key=' . $this->apiKey
                . '&format=json'
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();

            if (isset($responseContent['results'])) {
                return $responseContent['results']['artistmatches'];
            }

            if (isset($responseContent['error'])) {
                Log::error('An error occurred searching for artist: "' . $searchTerm . ' ". Error code: ' . $responseContent['error']);
                return false;
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }

    /**
     * @param $artistName
     * @return mixed
     */
    public function getArtistInfo($artistName): mixed
    {
        try {
            $response = Http::get(
                $this->baseUrl . self::ARTIST_INFO_URL
                . '&artist=' . $artistName
                . '&api_key=' . $this->apiKey
                . '&format=json'
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();

            if (isset($responseContent['artist'])) {
                return $responseContent['artist'];
            }

            if (isset($responseContent['error'])) {
                Log::error('An error occurred getting info for artist: " ' . $artistName . ' ". Error code: ' . $responseContent['error']);
                return false;
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }

    /**
     * @param $searchTerm
     * @return mixed
     */
    public function searchAlbum($searchTerm): mixed
    {
        try {
            $response = Http::get(
                $this->baseUrl . self::SEARCH_ALBUM_URL
                . '&album=' . $searchTerm
                . '&api_key=' . $this->apiKey
                . '&format=json'
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();

            if (isset($responseContent['results'])) {
                return $responseContent['results']['albummatches'];
            }

            if (isset($responseContent['error'])) {
                Log::error('An error occurred searching for album: " ' . $searchTerm . ' ". Error code: ' . $responseContent['error']);
                return false;
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }

    /**
     * @param string $artistName
     * @param string $albumName
     * @return mixed
     */
    public function getAlbumInfo(string $artistName, string $albumName): mixed
    {
        try {

            $response = Http::get(
                $this->baseUrl . self::ALBUM_INFO_URL
                . '&api_key=' . $this->apiKey
                . '&artist=' . $artistName
                . '&album=' . $albumName
                . '&format=json'
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();

            if (isset($responseContent['album'])) {
                return $responseContent['album'];
            }

            if (isset($responseContent['error'])) {
                Log::error('An error occurred getting info for album: " ' . $albumName . ' " by artist: " ' . $artistName . ' ". Error code: ' . $responseContent['error']);
                return false;
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }
}
