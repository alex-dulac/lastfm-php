<?php

namespace App;

class Controller
{
    public function __construct() {}

    /**
     * @return string
     */
    protected function getRawInputString(): string
    {
        return file_get_contents('php://input');
    }

    protected function loadJson($data = null): bool
    {
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode($data);

        return true;
    }
}
