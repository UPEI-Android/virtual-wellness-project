<?php

namespace Tests\Feature;

use App\Models\Rule;
use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class RulesTest extends TestCase
{
    use RefreshDatabase;

    protected $user;
    private $treatment;

    public function setUp():void{

        parent::setUp();
        $this->user = User::factory()->create();

        Sanctum::actingAs($this->user);
        $this->treatment = $this->createTreatment([
            'title' => 'Insulin',
            'patient_id' => $this->user->id,
            'start_date' => '2022-03-28',
            //'end_date' => '2022-06-28',
            'start_time' => '12:02:50',
        ]);

    }

    public function createTreatment($args = []) {

        return Treatment::factory()->create($args);

    }

    /**
     * A basic feature test example.
     *
     * @test void
     */
    public function get_all_rules_of_a_yearly_treatment()
    {
        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create([
            'treatment_id' => $treatment->id
        ]);

        $response = $this->getJson(route('treatments.rules.index', $treatment->id))
            ->assertOk()
            ->json();

        $this->assertEquals(1, count($response));
        $this->assertEquals($rule->freq, $response[0]['freq']);
        $this->assertEquals($rule->month_of_year, $response[0]['month_of_year']);
        $this->assertEquals($rule->day_of_month, $response[0]['day_of_month']);
    }

    /**
     * A basic feature test example.
     *
     * @test void
     */
    public function get_all_rules_of_weekly_treatments()
    {
        $treatment = $this->createTreatment();
        $rule = Rule::factory()->weekly()->create([
            'treatment_id' => $treatment->id
        ]);

        $response = $this->getJson(route('treatments.rules.index', $treatment->id))
            ->assertOk()
            ->json();

        $this->assertEquals(1, count($response));
        $this->assertEquals($rule->freq, $response[0]['freq']);
        $this->assertEquals($rule->day_of_week, $response[0]['day_of_week']);
    }

    /**
     * A basic feature test example.
     *
     * @test void
     */
    public function get_all_rules_of_monthly_treatments()
    {
        $treatment = $this->createTreatment();
        $rule = Rule::factory()->monthly()->create([
            'treatment_id' => $treatment->id
        ]);

        $response = $this->getJson(route('treatments.rules.index', $treatment->id))
            ->assertOk()
            ->json();

        //dd($response);

        $this->assertEquals(1, count($response));
        $this->assertEquals($rule->freq, $response[0]['freq']);
        $this->assertEquals($rule->day_of_week, $response[0]['day_of_week']);
        $this->assertEquals($rule->week_of_month, $response[0]['week_of_month']);
    }

    /**
     * @test
     */
    public function store_rules_for_a_treatment()
    {
        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create();

        $this->postJson(route('treatments.rules.store', $treatment->id), [
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> $rule->month_of_year,
        ])->assertCreated();

        $this->assertDatabaseHas('rules', [
            'treatment_id' => $treatment->id,
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> $rule->month_of_year,
            'max_num_of_occurrences' => '5'
        ]);

    }

    /**
     * @test
     */
    public function store_yearly_rules_for_a_treatment()
    {
        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create();

        $this->postJson(route('treatments.rules.store', $treatment->id), [
            'treatment_id' => $rule->treatment_id,
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> $rule->month_of_year,
        ])->assertCreated();

        $this->assertDatabaseHas('rules', [
            'treatment_id' => $treatment->id,
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> $rule->month_of_year,
            'max_num_of_occurrences' => '5'
        ]);

    }

    /**
     * @test
     */
    public function delete_a_rule() {

        $rule = Rule::factory()->create();

        $this->deleteJson(route('rules.destroy', $rule->id))->assertNoContent();

        $this->assertDatabaseMissing('rules', ['id' => $rule->id]);

    }

    /**
     * @test
     */
    public function update_a_rule_of_a_treatment() {


        $rule = Rule::factory()->yearly()->create();

        $this->patchJson(route('rules.update', $rule->id), [
            'treatment_id' => $rule->treatment_id,
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> 3,
        ])->assertOk();



        $this->assertDatabaseHas('rules', [
            'treatment_id' => $rule->treatment_id,
            'freq' => $rule->freq,
            'interval' => $rule->interval,
            'day_of_month' => $rule->day_of_month,
            'month_of_year'=> 3,
        ]);

    }
}
