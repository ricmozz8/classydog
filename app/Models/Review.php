<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

use function PHPUnit\Framework\isEmpty;

class Review extends Model
{


    protected $fillable = [
        'product_id',
        'user_id',
        'rating',
        'body'
    ];

    protected $hidden = [
        'user_id',
        'created_at',
        'updated_at'
    ];

    protected $appends = [
        'made_on',
        'updated',
        'made_by'
    ];

    public function user(){
        return $this->belongsTo(User::class, 'reviewer_id');
    }

    protected function getMadeOnAttribute() {
        return $this->created_at->diffForHumans();
    }

    protected function getUpdatedAttribute() {
        return $this->updated_at !== $this->created_at;
    }

    protected function getMadeByAttribute() {
        return $this->user->name;
    }

    protected function casts()
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

}
