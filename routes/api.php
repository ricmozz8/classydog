<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;


// Statistics-Only API, only for globally accessible
// to prevent injecting on each component on every route

Route::prefix('api')->group(function () {

    // V1
    Route::prefix('v1')->group(function () {

    });
});
