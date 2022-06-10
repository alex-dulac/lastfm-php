<?php

namespace App\Services\Encyclopedia\Model;

use Illuminate\Http\Request;

class GetReleaseGroupRequestFactory
{
    public function __construct() {}

    public function parseRequest(Request $request): GetReleaseGroupRequest
    {
        $releaseGroupId = $request->releaseGroupId;

        return new GetReleaseGroupRequest($releaseGroupId);
    }
}
