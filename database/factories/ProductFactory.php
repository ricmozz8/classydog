<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'description' => fake()->text(),
            'price' => fake()->randomFloat(2, 0, 100),
            'shipping_cost' => fake()->randomFloat(2, 0, 100),
            'images_path' => 'https://picsum.photos/seed/' . fake()->numberBetween(200, 300) . '/200/300',
            'category_id' => fake()->numberBetween(1, Category::count()),
            'user_id' => fake()->numberBetween(1, User::count()),
            'condition' => fake()->randomElement(['new', 'used', 'refurbished']),
        ];
    }
}
