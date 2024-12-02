<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CatalogsSeeder extends Seeder
{
    public function run()
    {
        // Roles
        DB::table('roles')->insert([
            ['name' => 'Admin'],
            ['name' => 'Employee'],
            ['name' => 'Customer'],
        ]);

        // Room Types
        DB::table('room_types')->insert([
            ['name' => 'Single'],
            ['name' => 'Double'],
            ['name' => 'Suite'],
        ]);

        // Payment Types
        DB::table('payment_types')->insert([
            ['name' => 'Cash'],
            ['name' => 'Credit Card'],
            ['name' => 'Bank Transfer'],
            ['name' => 'Sinpe Mobile'],
        ]);

        // Room Statuses
        DB::table('room_statuses')->insert([
            ['name' => 'Available'],
            ['name' => 'Occupied'],
            ['name' => 'Maintenance'],
            ['name' => 'Reserved'],
        ]);

        // Reservation Statuses
        DB::table('reservation_statuses')->insert([
            ['name' => 'Pending'],
            ['name' => 'Confirmed'],
            ['name' => 'Cancelled'],
        ]);
    }
}
