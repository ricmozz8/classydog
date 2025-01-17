<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;


class ProductController extends Controller
{

    public function index()
    {

        // getting all products is an expensive operation, so we cache them
        $products = Cache::remember('products', now()->addMinutes(1), function () {
            return Product::all();
        });

        // categories wont change much, storing it into the cache
        $categories = Cache::remember('categories', now()->addMinutes(5), function () {
            return Category::all();
        });



        return Inertia::render('Listing', [
            'products' => $products,
            'categories' => $categories
        ]);
    }


    public function show(Product $product)
    {
        return Inertia::render('SingleProduct', [
            'product' => $product->load(['specifics', 'user']),
        ]);
    }

    public function byCategory(Category $category)
    {
        return Inertia::render('CategoryListing', [
            'listing' => $category->load('products')
        ]);
    }
}
