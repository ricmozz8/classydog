<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all(Request $request)
    {

        // Allow only asynchronous requests (from useEffect)

        if ($request->ajax()) {
            $categories = Category::all();

            // this will return only the categories as a single list
            if ($request->has('listed'))
                $categories = $categories->pluck('name');

            return response()->json($categories);
        }

        return response()->json(['message' => '404 not found']);
    }
}
