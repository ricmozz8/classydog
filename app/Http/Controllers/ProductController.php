<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{

    public function index() {


        return Inertia::render('Listing', [
            'products' => Product::all(),
            'categories' => Category::all()
        ]);
    }

}
