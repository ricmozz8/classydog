<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //

    public function specifics() {
        return $this->hasMany(Specific::class);
    }

    protected $appends = ['category', 'specifics'];


    public function getSpecificsAttribute() {
        return Specific::where('product_id', $this->id)->get();
    }

    public function getCategoryAttribute() {
        return Category::find($this->category_id)->name;
    }
}
