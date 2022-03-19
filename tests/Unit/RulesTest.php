<?php

namespace Tests\Unit;

use App\Models\Rule;
use App\Models\Treatment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RulesTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void {

        parent::setUp();
        $this->treatment = $this->createTreatment([
            'title' => 'Insulin'
        ]);

    }

    public function createTreatment($args = []) {

        return Treatment::factory()->create($args);

    }

    /**
     *
     *
     * @test
     */
    public function rule_belong_to_a_treatment()
    {

        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create([
            'treatment_id' => $treatment->id
        ]);

        $this->assertInstanceOf(Treatment::class, $rule->treatment);

    }


}
