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

// Route::get('/fakeuser', function(){
//     User::factory()->create();

//     return response()->json(['result' => 200]);
// });


Route::get('/active_ad', function() {
   $image = public_path('/active_ads/promotional.png');
   return response()->file($image);
})->name('ad.active');


Route::get('/flush' , function() {
    Cache::flush();
    return response()->json(['result' => 200, 'message' => 'Cache flushed']);
});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/p/{product}', [ProductController::class, 'show'])->name('products.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
