<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Reservation;
use App\Models\PaymentType;

class PaymentFactory extends Factory
{
    public function definition(): array
    {
        return [
            'reservation_id' => Reservation::inRandomOrder()->first()->id,
            'payment_type_id' => PaymentType::inRandomOrder()->first()->id,
            'amount' => $this->faker->randomFloat(2, 50, 500),
            'payment_date' => $this->faker->dateTimeBetween('-1 months', 'now'),
        ];
    }
}
