<?php

namespace Tests\Feature;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TreatmentTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_index_api()
    {

        $response = $this->getJson(route('treatments.index'));

        $response->assertStatus(200);
    }

    public function test_database() {

        $this->withoutExceptionHandling();

        $user = User::factory()->create();

        Treatment::factory()->create(['patient_id' => $user->id, 'title' => 'Exercise']);

        $response = $this->getJson(route('treatments.index'));

        $this->assertEquals(1, count($response->json()));

        $this->assertEquals('Exercise', $response->json()[0]['title']);

    }




}
