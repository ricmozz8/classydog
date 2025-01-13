<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specific extends Model
{
    protected $hidden = ['id', 'product_id', 'created_at', 'updated_at'];
}
