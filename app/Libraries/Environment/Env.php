<?php

namespace App\Libraries\Environment;

use Dotenv\Dotenv;

/**
 * Provides support for interacting with environment variables
 *
 */
class Env
{
    /**
     * @var Env
     */
    private static $instance;

    protected function __construct()
    {
    }

    public static function get()
    {
        if (self::$instance === null) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    /**
     * Initialize the DotEnv framework using the specified path.
     */
    public function load($path)
    {
        Dotenv::createImmutable($path);

        $this->loadArrayOfKeyValues($_SERVER);
    }

    public function loadArrayOfKeyValues(array $array)
    {
        foreach ($array as $key => $value) {
            if (is_string($value) && preg_match('/^[A-Za-z0-9_]+$/', $key)) {
                $this->define($key, $value);
            }
        }
    }

    /**
     * Define a global variable based on the specified environment variable.  If the environment variable
     * cannot be found, use the default value.  If a default value is not specified, throw an exception.
     */
    public function define($key, $default = null)
    {
        // if the environment variable cannot be found and no default is provided, throw an exception.
        if (!getenv($key) && $default === null) {
            throw new \Exception($key . ' environment variable must be set');
        }

        if (!defined($key)) {
            define($key, getenv($key) ?: $default);
        }
    }
}
