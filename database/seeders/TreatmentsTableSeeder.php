<?php

namespace database\seeders;
use App\Models\Treatment;
use Illuminate\Database\Seeder;


class TreatmentsTableSeeder extends Seeder
{
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Treatment::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) {
            Treatment::create([
                'title' => $faker->sentence,
                'notes' => $faker->paragraph,
            ]);
        }
    }
}
