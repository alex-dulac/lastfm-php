<?php

namespace App\Json\Serializers;

use App\Services\IocRoutine;

class ArtistSerializer
{
    use IocRoutine;

    public function serialize(array $data): array
    {
        $links = [];

        if (isset($data['musicBrainzData']['relations'])) {
            foreach ($data['musicBrainzData']['relations'] as $relation) {
                switch ($relation['type']) {
                    // only utilize links for images, discogs, and spotify at this time
                    case 'image':
                        $links[] = [
                            'type' => 'image',
                            'source' => $relation['url']['resource']
                        ];
                    case 'discogs':
                        $links[] = [
                            'type' => 'discogs',
                            'source' => $relation['url']['resource']
                        ];
                    case 'free streaming':
                        if (str_contains($relation['url']['resource'], 'spotify')) {
                            $links[] = [
                                'type' => 'spotify',
                                'source' => $relation['url']['resource']
                            ];
                        }
                }
            }
        }

        if (isset($data['musicBrainzData']['country'])) {
            $country = $this->getCountryService()->getCountryNameFromCountryCode($data['musicBrainzData']['country']);
        }

        return [
            'id' => $data['musicBrainzData']['id'],
            'name' => $data['musicBrainzData']['name'],
            'country' => $country ?? '',
            'city' => $data['musicBrainzData']['begin-area']['name'] ?? '',
            'disambiguation' => $data['musicBrainzData']['disambiguation'] ?? '',
            'artistType' => $data['musicBrainzData']['type'],
            'links' => $links,
            'wikiTitle' => $data['wikipediaData']['title'] ?? '',
            'wikiIntro' => $data['wikipediaData']['extract'] ?? '',
            'lastFmUrl' => $data['lastFmData']['url'] ?? '',
            'onTour' => $data['lastFmData']['ontour'] ?? false,
            'lastFmListenerCount' => $data['lastFmData']['stats']['listeners'] ?? '',
            'lastFmPlayCount' => $data['lastFmData']['stats']['playcount'] ?? '',
            'establishedYear' => $data['musicBrainzData']['life-span']['begin'] ?? null,
            'disbandedYear' => $data['musicBrainzData']['life-span']['end'] ?? null,
            'disbanded' => $data['musicBrainzData']['life-span']['ended'] ?? null,
        ];
    }

}
