<?php

namespace App\Services\Encyclopedia\Model;

class GetReleaseGroupRequest
{
    private string $releaseGroupId;

    public function __construct($releaseGroupId)
    {
        $this->releaseGroupId = $releaseGroupId;
    }

    public function getReleaseGroupId(): string
    {
        return $this->releaseGroupId;
    }
}
