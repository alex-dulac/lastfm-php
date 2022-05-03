<?php

namespace App\Json\Serializers;

class ArtistSerializer
{
    public function serialize(array $data): array
    {
        $links = [];

        if (isset($data['relations'])) {
            foreach ($data['relations'] as $relation) {
                switch ($relation['type']) {
                    // only utilize links for images, discogs, and spotify at this time
                    case 'image':
                        $links['type'] = 'image';
                        $links['source'] = $relation['url']['resource'];
                        break;
                    case 'discogs':
                        $links['type'] = 'discogs';
                        $links['source'] = $relation['url']['resource'];
                        break;
                    case 'free streaming':
                        if (str_contains($relation['url']['resource'], 'spotify')) {
                            $links['type'] = 'spotify';
                            $links['source'] = $relation['url']['resource'];
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        return [
            'id' => $data['id'],
            'name' => $data['name'],
            'country' => $data['country'] ?? '',
            'establishedYear' => $data['life-span']['begin'] ?? null,
            'disbandedYear' => $data['life-span']['ended'] ?? null,
            'disambiguation' => $data['disambiguation'] ?? ''
        ];
    }

}
