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
    public const EXTRACT_URL = '?format=json&action=query&prop=extracts&explaintext&exintro';

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
                . '&titles=' . urlencode($title) // urlencode() will transform entities so the API behaves correctly
                . '&redirects='
            );

            if ($response->status() != 200) {
                Log::error('Client returned a non-200 status: Status Code: ' . $response->status());
                return false;
            }

            $responseContent = $response->json();
            if (isset($responseContent['query']['pages'])) {
                $responseContent = current($responseContent['query']['pages']);
                if (
                    isset($responseContent['extract'])
                    && $this->keyWordFound($responseContent['extract'])
                ) {
                    return $responseContent;
                }

                // might've grabbed the incorrect wiki article! let's try again
                $title = $title . ' (band)';
                $response = Http::get(
                    $this->baseUrl . self::EXTRACT_URL
                    . '&titles=' . $title
                    . '&redirects='
                );

                $responseContentSecondAttempt = $response->json();

                if (isset($responseContentSecondAttempt['query']['pages'])) {
                    $responseContentSecondAttempt = current($responseContentSecondAttempt['query']['pages']);

                    if (
                        isset($responseContentSecondAttempt['extract'])
                        && $this->keyWordFound($responseContentSecondAttempt['extract'])
                    ) {
                        return $responseContentSecondAttempt;
                    }
                }
            }

            return false;

        } catch (HttpResponseException $exception) {
            $statusCode = $exception->getResponse()->getStatusCode();
            $content = $exception->getResponse()->getContent();
            throw $exception;
        }
    }

    private function keyWordFound($extract): bool
    {
        return str_contains($extract, 'artist')
            || str_contains($extract, 'band')
            || str_contains($extract, 'composer')
            || str_contains($extract, 'singer')
            || str_contains($extract, 'rapper')
            || str_contains($extract, 'guitarist')
            || str_contains($extract, 'singer');
    }

}
