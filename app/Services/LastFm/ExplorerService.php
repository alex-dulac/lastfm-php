<?php

namespace App\Services\Explorer;

use App\Libraries\LastFm\LastFmApi;

class LastFmService
{
    public function __construct(
        private LastFmApi $lastFmApi
    ) {
    }
}
