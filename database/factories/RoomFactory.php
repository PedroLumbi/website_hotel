<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\RoomType;
use App\Models\RoomStatus;

class RoomFactory extends Factory
{
    public function definition()
    {
        return [
            'number' => $this->faker->unique()->numberBetween(1, 500),
            'room_type_id' => RoomType::inRandomOrder()->first()->id,
            'price' => $this->faker->randomFloat(2, 50, 500),
            'description' => $this->faker->sentence(),
            'room_status_id' => RoomStatus::inRandomOrder()->first()->id,
        ];
    }
}

