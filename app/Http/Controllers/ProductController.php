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



        return Inertia::render('Products/Listing', [
            'products' => $products,
            'categories' => $categories
        ]);
    }


    public function show(Product $product)
    {
        // Get up to 4 related products by category_id except the current product
        $related = Product::where('category_id', $product->category_id)
            ->whereNotIn('id', [$product->id])
            ->inRandomOrder() // change this when statistics are implemented to be more relevant
            ->take(4)
            ->get();

        return Inertia::render('Products/SingleProduct', [
            'product' => $product->load(['specifics', 'user', 'user.reviews']),
            'relatedProducts' => $related
        ]);
    }

    public function byCategory(Category $category)
    {
        return Inertia::render('Products/CategoryListing', [
            'listing' => $category->load('products'),
            'categoryTitle' => trans('categories.' . $category->name)
        ]);
    }


    public function create()
    {
        return Inertia::render('Products/Create');
    }
}
