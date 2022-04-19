<?php

namespace App\Json\Serializers;

use App\Entities\Artist;

class ArtistSerializer
{
    public function serialize(Artist $artist): array
    {
        return [
            'name' => $artist->getName()
        ];
    }

}
