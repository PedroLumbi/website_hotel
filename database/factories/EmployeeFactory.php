<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class EmployeeFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::whereHas('role', function ($query) {
                $query->where('name', 'Employee');
            })->inRandomOrder()->first()->id,
            'position' => $this->faker->jobTitle(),
        ];
    }
}
