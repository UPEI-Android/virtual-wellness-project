<?php

namespace Tests\Unit;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserTest extends TestCase
{

    use RefreshDatabase;

    public function setUp():void{

        parent::setUp();
        $user = User::factory()->create();
        Sanctum::actingAs($user);
        $this->treatment = $this->createTreatment([
            'title' => 'Insulin',
            'patient_id' => $user->id
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
    public function test_user_has_many_treatments()
    {

        $user = User::factory()->create();
        Sanctum::actingAs($user);
        $treatments = $this->createTreatment([
            'patient_id' => $user->id
        ]);

        $this->assertInstanceOf(Treatment::class, $user->treatments->first());
    }
}
