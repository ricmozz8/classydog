<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

enum Currencies:string{
    case USD = '$'; // USD available for now
    // case DOP = '$';
    // case CUP = '$';
    // case EUR = '€';
    // case BRL = 'R$';
    // case CAD = '$';
    // case GBP = '£';
    // case DKK = 'kr';
}


class Product extends Model
{
    use HasFactory;

    public function specifics() {
        return $this->hasMany(Specific::class);
    }

    // appends

    protected $appends = ['category', 'specifics' , 'last_edited', 'sold_by'];


    public static function currencies()
    {
        $currencies =  array_column(Currencies::cases(), 'name');
        $currencyDescriptionList = [];

        foreach($currencies as $currency){
            $currencyDescriptionList[]= [
                'id' => $currency,
                'name' => trans('currencies.' . $currency)
            ];
        }

        return $currencyDescriptionList;
    }

    public function getSpecificsAttribute() {
        return Specific::where('product_id', $this->id)->get();
    }

    public function getCategoryAttribute() {
        return Category::find($this->category_id)->name;
    }


    public function getLastEditedAttribute() {
        return $this->updated_at->diffForHumans();
    }

    public function getSoldByAttribute() {
        return User::find($this->user_id)->name;
    }


    // Relationships

    public function user() {
        return $this->belongsTo(User::class);
    }


}
