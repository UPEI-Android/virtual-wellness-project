<?php

namespace Database\Seeders;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $user = User::create([
            'name' => 'Shivangi',
            'first_name' => 'Shivangi',
            'last_name' => 'Sharma',
            'email' => 'ssharma3@upei.ca',
            'email_verified_at' => now(),
            'password' => bcrypt('ssharma3'), // password
            'remember_token' => Str::random(10),
        ]);
        $id = $user->id;

        $user = User::create([
        'name' => 'Nikki',
        'first_name' => 'Nikki',
        'last_name' => 'Babaii',
        'email' => 'nbabaii@upei.ca',
        'email_verified_at' => now(),
        'password' => bcrypt('pUSkCyJffnW6APY'), // password
        'remember_token' => Str::random(10),
        ]);
        $id = $user->id;

        $user = User::create([
        'name' => 'Test',
        'first_name' => 'Test',
        'last_name' => 'Test',
        'email' => 'virtualwellnessapp@gmail.com',
        'email_verified_at' => now(),
        'password' => bcrypt('testtest'), // password
        'remember_token' => Str::random(10),
        ]);
        $id = $user->id;
        

        Treatment::create([
            'title' => 'Insulin',
            'notes' => 'After food 2 times daily',
            'patient_id' => $id
        ]);


        Treatment::create([
            'title' => 'Exercise',
            'notes' => '2 times daily',
            'patient_id' => $id
        ]);
    }
}
