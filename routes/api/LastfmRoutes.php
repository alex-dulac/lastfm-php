<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LastfmController;

Route::get('/Lastfm/getArtist', [LastfmController::class, 'getArtist']);
Route::get('/Lastfm/getAlbum', [LastfmController::class, 'getAlbum']);
