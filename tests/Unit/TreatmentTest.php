<?php

namespace Tests\Unit;

use App\Models\Rule;
use App\Models\Treatment;
use Database\Factories\TreatmentFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\App;
use Tests\TestCase;

class TreatmentTest extends TestCase
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
     * @test
     */
    public function it_has_a_path() {

        $treatment = Treatment::factory()->create();

        $this->assertEquals( '/treatments/' . $treatment->id, $treatment->path());
    }

    /**
     *
     *
     * @test
     */
    public function test_a_treatment_has_a_rule()
    {

        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create([
            'treatment_id' => $treatment->id
        ]);

        $this->assertInstanceOf(Rule::class, $treatment->rule);
    }

    /**
     * @test
     */
    public function if_treatment_is_deleted_then_rule_is_deleted() {

        $treatment = $this->createTreatment();
        $rule = Rule::factory()->yearly()->create([
            'treatment_id' => $treatment->id
        ]);
        $rule2 = Rule::factory()->yearly()->create();

        $treatment->delete();

        $this->assertDatabaseMissing('treatments', [
            'id' => $treatment->id
        ]);

        $this->assertDatabaseMissing('rules', [
            'id' => $rule->id
        ]);

        $this->assertDatabaseHas('rules', [
            'id' => $rule2->id
        ]);

    }


}
