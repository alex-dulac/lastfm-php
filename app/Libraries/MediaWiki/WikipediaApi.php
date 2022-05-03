<?php

namespace App\Libraries\MediaWiki;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 *
 * https://en.wikipedia.org/w/api.php
 */
class WikipediaApi
{
    private string $baseUrl;
    public const EXTRACT_URL = '?format=json&action=query&prop=extracts&explaintext&exintro&redirects=';

    public function __construct()
    {
        $this->baseUrl = getenv('WIKIPEDIA_API_BASE_URL');
    }

    /**
     * @param $title
     * @return mixed
     */
    public function extractWikiIntro($title): mixed
    {
        try {
            $response = Http::get(
                $this->baseUrl . self::EXTRACT_URL
                . '&titles=' . $title
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();
            if (isset($responseContent['query']['pages'])) {
                return $responseContent['query']['pages'];
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }

}
