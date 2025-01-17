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
    ];

    protected $appends = ['country'];

    /**
     * Get the user's country
     *
     * @return array<string, string>
     */
    public function getCountryAttribute(){
        return $this->country();
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
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


    /**
     * Returns the country of the user based on their latest session.
     *
     * Queries the ip-api.com endpoint to get the country and regionName
     * of the user based on their latest known IP address.
     *
     * Returns an array with two keys: 'country' and 'regionName'.
     * If the request fails or the response is invalid, returns an array
     * with 'Unknown' for the values of 'country' and 'regionName'.
     *
     * @return array<string, string>
     */
    public function country()
    {

        $lastSession = Session::where('user_id', $this->id)->latest()->first();

        if ($lastSession) {
            // Hitting the endpoint to find out the user's country
            $response = Http::get('http://ip-api.com/json/' . $lastSession->ip_address);

            if ($response->successful() && $response->json()['status'] === 'success') {
                return [
                    'country' => $response->json()['country'],
                    'regionName' => $response->json()['regionName'],
                ];
            }
        }

        return [
            'country' => 'Unknown',
            'regionName' => 'Unknown',
        ];
    }
}
