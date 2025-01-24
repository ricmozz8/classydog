<?php

namespace App\Http\Middleware;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],


            // Appending shared data from the app
            'availableCategories' => [
                'all' => Cache::remember('categories', now()->addHours(2), function () {
                    return Category::all()->map(function ($category) {
                        $category->name = trans('categories.' . $category->name);
                        return $category;
                    });
                }),
                'popular' => Cache::remember('popular', now()->addHours(2), function () {
                    return Category::all()->take(4)->map(function ($category) {
                        $category->name = trans('categories.' . $category->name);
                        return $category;
                    });
                })
            ],

            'availableCurrencies' => Cache::remember('currencies', now()->addMonth(), function () {
                return Product::currencies();
            })


        ];
    }
}
