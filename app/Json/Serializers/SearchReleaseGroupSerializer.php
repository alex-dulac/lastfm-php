<?php

namespace App\Json\Serializers;

class SearchReleaseGroupSerializer
{
    public function serialize(array $searchResults)
    {
        if ($searchResults['count'] === 0) {
            return false;
        }

        $artists = [];
        $releaseGroups = [];

        foreach ($searchResults['artists'] as $searchResult) {
            $tags = [];
            if (isset($searchResult['tags'])) {
                foreach ($searchResult['tags'] as $tag) {
                    $tags[] = $tag['name'];
                }
            }

            $artists[] = [
                'id' => $searchResult['id'],
                'name' => $searchResult['name'],
                'country' => $searchResult['country'] ?? '',
                'establishedYear' => $searchResult['life-span']['begin'] ?? null,
                'disbandedYear' => $searchResult['life-span']['ended'] ?? null,
                'tags' => $tags
            ];
        }

        return $artists;
    }

}
