<?php

namespace App\Services\Encyclopedia\Model;

use Illuminate\Http\Request;

class SearchReleaseGroupRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): SearchReleaseGroupRequest
    {
        $searchTerm = $request->searchTerm;

        return new SearchReleaseGroupRequest($searchTerm);
    }
}
