<?php

namespace App\Libraries\Ioc;

use Illuminate\Container\Container as IlluminateContainer;
// use App\Providers\GuzzleClientProvider;


class Container extends IlluminateContainer
{
    public const PROVIDERS = [
        // GuzzleClientProvider::class
    ];

    public function __construct()
    {
        $this->instance('Ioc', $this);
        $this->makeDefaultBindings();

        if (!isset(static::$instance)) {
            static::$instance = &$this;
        }
    }

    private function makeDefaultBindings()
    {
        foreach (self::PROVIDERS as $provider) {
            $provider = new $provider($this);
            $provider->register();
        }
    }
}
