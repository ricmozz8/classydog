<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Http;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'last_login',
        'ip'
    ];

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    protected $appends = ['geographics', 'rating'];

    /**
     * Get the user's country
     *
     * @return array<string, string>
     */
    public function getGeographicsAttribute(): array
    {

        $this->generateGeographics();

        return $this->geographics()->first()->toArray();
    }

    public function getRatingAttribute(): float
    {
        return $this->reviews()->avg('rating') ?? 0;
    }


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'last_login',
        'ip'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function geographics()
    {
        return $this->hasOne(Geographic::class);
    }

    /**
     * Returns the user's country and region. If the user does not have a
     * geographic record, it will create one by hitting the ip-api.com
     * endpoint.
     *
     * @return \App\Models\Geographic
     */
    public function generateGeographics()
    {

        $geographics = $this->geographics()->first();

        // The API (ip-api.com) values for the country and region are:
        // 'country'
        // 'regionName'

        if (!$geographics) {

            $country = 'Unknown';
            $regionName = 'Unknown';


            // we're making an asynchronous call to the API and giving two callback functions
            $promise = Http::async()
                ->get('http://ip-api.com/json/' . $this->ip) // we're combining the API URI to the users IP
                ->then(
                    // this is the success callback
                    function ($response) use (&$country, &$regionName) {
                        $country = $response->json()['country'];
                        $regionName = $response->json()['regionName'];
                    },

                    // this is the failure callback
                    function () use (&$country, &$regionName) {
                        $country = 'Unknown';
                        $regionName = 'Unknown';

                    }
                );

            // Waiting for the response to be returned
            $promise->wait();


            // Creating the geographic record
            $geographics = Geographic::create([
                'user_id' => $this->id,
                'country' => $country,
                'region' => $regionName,
                'valid' => $country !== 'Unknown' ? true : false
            ]);
        }

        return $geographics;
    }
}
