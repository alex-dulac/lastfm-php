<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EncyclopediaController;

Route::get('/Encyclopedia/searchArtist', [EncyclopediaController::class, 'searchArtist']);
Route::get('/Encyclopedia/getArtist', [EncyclopediaController::class, 'getArtist']);
Route::get('/Encyclopedia/searchReleaseGroup', [EncyclopediaController::class, 'searchReleaseGroup']);
Route::get('/Encyclopedia/getReleaseGroup', [EncyclopediaController::class, 'getReleaseGroup']);
