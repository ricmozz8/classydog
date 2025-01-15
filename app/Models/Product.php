<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function specifics() {
        return $this->hasMany(Specific::class);
    }

    protected $appends = ['category', 'specifics', 'sold_by'];


    public function getSpecificsAttribute() {
        return Specific::where('product_id', $this->id)->get();
    }

    public function getCategoryAttribute() {
        return Category::find($this->category_id)->name;
    }

    public function getSoldByAttribute() {
        return User::find($this->user_id)->name;
    }
}
