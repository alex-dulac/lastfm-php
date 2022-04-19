<?php

namespace App\Libraries\Ioc;

use Illuminate\Container\Container;

class Ioc
{
    /**
     * Resolve the given type from the container.
     *
     * @param  string  $abstract
     * @param  array   $parameters
     * @return mixed
     */
    public static function make($abstract, array $parameters = [])
    {
        return call_user_func_array([Container::getInstance(), 'make'], func_get_args());
    }
}
