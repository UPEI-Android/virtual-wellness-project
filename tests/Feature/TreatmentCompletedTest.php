<?php

namespace Tests\Feature;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TreatmentCompletedTest extends TestCase
{
    use RefreshDatabase;

    public function setUp():void{

        parent::setUp();
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        $this->treatment = $this->createTreatment([
            'title' => 'Insulin'
        ]);

    }

    public function createTreatment($args = []) {

        return Treatment::factory()->create($args);

    }
    /**
     *
     * @test
     */
    public function treatment_status_can_be_updated()
    {
        $treatment = $this->createTreatment();

        $this->patchJson(route('treatments.update', $treatment->id), [
            'id' => $treatment->id,
            'title' => 'Insulin',
            'start_date' => '2022_05_28',
            'is_completed' => 1
        ]);

        $this->assertDatabaseHas('treatments', [
            'id' => $treatment->id,
            'title' => 'Insulin',
            'start_date' => '2022_05_28',
            'is_completed' => 1
        ]);
    }
}
