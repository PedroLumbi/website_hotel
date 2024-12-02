<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class CustomerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::whereHas('role', function ($query) {
                $query->where('name', 'Customer');
            })->inRandomOrder()->first()->id,
            'dni' => $this->faker->unique()->randomNumber(9, true),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
        ];
    }
}
