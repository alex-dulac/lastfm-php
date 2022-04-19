<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LastfmController;

Route::get('/Lastfm/testing', [LastfmController::class, 'testing']);
Route::get('/Lastfm/getArtist', [LastfmController::class, 'getArtist']);
