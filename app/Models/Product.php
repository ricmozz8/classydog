<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Product extends Model
{
    use HasFactory;

    public function specifics() {
        return $this->hasMany(Specific::class);
    }


    // appends

    protected $appends = ['category', 'specifics', 'sold_by' , 'last_edited'];


    public function getSpecificsAttribute() {
        return Specific::where('product_id', $this->id)->get();
    }

    public function getCategoryAttribute() {
        return Category::find($this->category_id)->name;
    }

    public function getSoldByAttribute() {
        return User::find($this->user_id)->name;
    }

    public function getLastEditedAttribute() {
        return $this->updated_at->diffForHumans();
    }

    // Relationships
    public function user() {
        return $this->belongsTo(User::class);
    }


}
