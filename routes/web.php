<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Database\Factories\UserFactory;
use Illuminate\Support\Facades\Cache;

Route::get('/', function () {
    return Inertia::render('Landing', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/active_ad', function() {
   $image = public_path('/active_ads/promotional.png');
   return response()->file($image);
})->name('ad.active');


Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/p/{product}', [ProductController::class, 'show'])->name('products.show');

Route::middleware(['auth'])->prefix('sell')->group(function () {

    Route::get('/', [ProductController::class, 'create'])->name('products.create');


});


Route::get('/listing/{category}', [ProductController::class, 'byCategory'])->name('listing');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
require __DIR__.'/api.php';
