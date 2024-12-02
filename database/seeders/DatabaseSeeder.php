<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Employee;
use App\Models\Customer;
use App\Models\Room;
use App\Models\Reservation;
use App\Models\Payment;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Catalog Seeders
        $this->call(CatalogsSeeder::class);

        // Generate Users
        User::factory(10)->create();

        // Generate Employees and Clients
        Employee::factory(5)->create();
        Customer::factory(5)->create();

        // Generate Rooms
        Room::factory(20)->create();

        // Generate Reservations
        Reservation::factory(30)->create();

        // Generate Payments
        Payment::factory(30)->create();
    }
}
