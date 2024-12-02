<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Customer;
use App\Models\Room;
use App\Models\ReservationStatus;


class ReservationFactory extends Factory
{
    public function definition(): array
    {
        $startDate = $this->faker->dateTimeBetween('-1 months', '+1 months');
        $endDate = $this->faker->dateTimeBetween($startDate, $startDate->format('Y-m-d').' +7 days');

        return [
            'customer_id' => Customer::inRandomOrder()->first()->id,
            'room_id' => Room::inRandomOrder()->first()->id,
            'reservation_status_id' => ReservationStatus::inRandomOrder()->first()->id,
            'start_date' => $startDate->format('Y-m-d'),
            'end_date' => $endDate->format('Y-m-d'),
        ];
    }
}
