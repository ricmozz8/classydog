<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;


class ProductController extends Controller
{

    public function index() {

        // getting all products is an expensive operation, so we cache them
        $products = Cache::remember('products', 60, function () {

            return Product::all();
        });



        return Inertia::render('Listing', [
            'products' => $products,
            'categories' => Category::all()
        ]);
    }


    public function show(Product $product) {
        return Inertia::render('SingleProduct', [
            'product' => $product
        ]);
    }
}
