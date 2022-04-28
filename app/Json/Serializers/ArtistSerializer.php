<?php

namespace App\Json\Serializers;

class ArtistSerializer
{
    public function serialize(array $data): array
    {
        $stats = [];
        $stats['listeners'] = $data['stats']['listeners'];
        $stats['playcount'] = $data['stats']['playcount'];

        $similarArtists = [];

        return [
            'name' => $data['name'],
            'url' => $data['url'],
            'onTour' => $data['ontour'],
            'stats' => $stats,

        ];
    }

}
