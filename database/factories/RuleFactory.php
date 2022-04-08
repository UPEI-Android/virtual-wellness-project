<?php

namespace Database\Factories;

use App\Models\Treatment;
use Illuminate\Database\Eloquent\Factories\Factory;
use RRule\RRule;

class RuleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            //
            'treatment_id' => function() {

                return Treatment::factory()->create()->id;
            },
            'freq' => RRule::YEARLY,
            'interval' => 1,
            'day_of_month' => $this->faker->dayOfMonth(),
            'month_of_year'=> $this->faker->month(),
        ];
    }

    /**
     * Indicate that the treatment is yearly.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function yearly()
    {
        return $this->state(function (array $attributes) {
            return [
                'treatment_id' => function() {

                    return Treatment::factory()->create()->id;
                },
                'freq' => RRule::YEARLY,
                'interval' => 1,
                'day_of_month' => $this->faker->dayOfMonth(),
                'month_of_year'=> $this->faker->month(),
            ];
        });
    }

    /**
     * Indicate that the treatment is weekly.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function weekly()
    {
        return $this->state(function (array $attributes) {
            return [
                'treatment_id' => function() {

                    return Treatment::factory()->create()->id;
                },
                'freq' => RRule::WEEKLY,
                'interval' => 1,
                'day_of_week' => function() {

                    return [ $this->faker->dayOfWeek() . ',' . $this->faker->dayOfWeek() ];
                },
            ];
        });
    }

    /**
     * Indicate that the treatment is weekly.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function monthly()
    {
        return $this->state(function (array $attributes) {
            return [
                'treatment_id' => function() {

                    return Treatment::factory()->create()->id;
                },
                'freq' => RRule::WEEKLY,
                'interval' => 1,
                'day_of_week' => function() {

                    return [ $this->faker->dayOfWeek() . ',' . $this->faker->dayOfWeek() ];
                },
                'week_of_month' => rand(1, 4),
            ];
        });
    }


    /**
     * Indicate that the treatment is daily.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function daily() {

        return $this->state(function (array $attributes) {
            return [
                'treatment_id' => function() {

                    return Treatment::factory()->create()->id;
                },
                'freq' => RRule::DAILY,
                'interval' => 1,
                'max_num_of_occurrences' => 5,
            ];
        });

    }


}
