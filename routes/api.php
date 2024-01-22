<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EncyclopediaController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(["middleware" => ["api"]], function () {
    Route::get('/Encyclopedia/searchArtist', [EncyclopediaController::class, 'searchArtist']);
    Route::get('/Encyclopedia/getArtist', [EncyclopediaController::class, 'getArtist']);
    Route::get('/Encyclopedia/searchReleaseGroup', [EncyclopediaController::class, 'searchReleaseGroup']);
    Route::get('/Encyclopedia/getReleaseGroup', [EncyclopediaController::class, 'getReleaseGroup']);
});
