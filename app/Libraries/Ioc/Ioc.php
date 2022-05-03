<?php

namespace App\Libraries\Ioc;

use Illuminate\Container\Container;

class Ioc
{
    /**
     * Resolve the given type from the container.
     */
    public static function make(string $abstract, array $parameters = []): mixed
    {
        return call_user_func_array([Container::getInstance(), 'make'], func_get_args());
    }
}
