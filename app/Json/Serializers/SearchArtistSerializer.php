<?php

namespace App\Json\Serializers;

class SearchArtistSerializer
{
    public function serialize(array $searchResults): array
    {
        return [
            'name' => $searchResults
        ];
    }

}
