<?php

namespace Tests\Feature;

use App\Models\Rule;
use App\Models\Treatment;
use App\Services\RulesService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use RRule\RRule;
use Tests\TestCase;

class RulesParsingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * You cannot get all occurrences when the end date is null
     * So you have check if the series is infinite
     * @test
     */
    public function parsing_daily_rules() {

        $treatment = Treatment::factory()->create([
            'start_date' => '2022-03-28',
            'end_date' => '2022-06-28'
        ]);

        $rule = Rule::factory()->daily()->create([
            'treatment_id' => $treatment->id,
            'freq' => 'daily',
            'interval' => 1,
        ]);

        $rule_service = new RulesService($rule);

        //dd($rule_service->allOccurrences());

        //dd($rule_service->nextOccurrence());

        //dd($rule_service->getMaxOccurrence());

        $rrule = $rule_service->get_rrule();
        $this->assertTrue( $rrule->occursAt('2022-03-30'), 'true');


    }

    /**
     * @test
     */
    public function parsing_year_rules() {

        $this->withoutExceptionHandling();

        $treatment = Treatment::factory()->create([
            'start_date' => '2022-03-28',
            'end_date' => '2025-03-28'
        ]);

        $rule = Rule::factory()->yearly()->create([
            'treatment_id' => $treatment->id,
            'freq' => 'YEARLY',
            'interval' => 1,
            'day_of_month' => 28,
            'month_of_year' => 3,
        ]);

        $rule_service = new RulesService($rule);

        //dd($rule_service->allOccurrences());

        //dd($rule_service->nextOccurrence());

        $rrule = $rule_service->get_rrule();
        $this->assertTrue( $rrule->occursAt('2023-03-28'), 'true');

    }

    /**
     * @test
     */
    public function parsing_weekly_rules() {

        $this->withoutExceptionHandling();

        $treatment = Treatment::factory()->create([
            'start_date' => '2022-03-25',
            'end_date' => '2022-09-25'
        ]);

        $rule = Rule::factory()->weekly()->create([
            'treatment_id' => $treatment->id,
            'freq' => 'weekly',
            'interval' => 2,
            'day_of_week' => ['Th'],
        ]);

        $rule_service = new RulesService($rule);

        //dd($rule_service->allOccurrences());

        //dd($rule_service->nextOccurrence());

        $rrule = $rule_service->get_rrule();
        $rrule->clearCache();
        $this->assertTrue( $rrule->occursAt('2022-04-07'), 'true');

    }


    /**
     * @test
     */
    public function parsing_monthly_rules() {

        $this->withoutExceptionHandling();

        //given an id of the treatment get the rule
        $treatment = Treatment::factory()->create([
            'start_date' => '2022-03-25',
            'end_date' => '2022-09-25'
        ]);

        $rule = Rule::factory()->weekly()->create([
            'treatment_id' => $treatment->id,
            'freq' => 'monthly',
            'interval' => 1,
            'day_of_week' => ['Th', 'Fr'],
        ]);

        $rule_service = new RulesService($rule);

        //dd($rule_service->allOccurrences());

        //dd($rule_service->nextOccurrence());

        $rrule = $rule_service->get_rrule();
        $rrule->clearCache();
        $this->assertTrue( $rrule->occursAt('2022-03-25'), 'true');

    }


}
