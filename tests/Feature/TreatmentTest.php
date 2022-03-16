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

    private $treatment;

    public function setUp():void{

        parent::setUp();
        $this->treatment = $this->createTreatment([
            'title' => 'Insulin'
        ]);

    }

    public function createTreatment($args = []) {

        return Treatment::factory()->create($args);

    }


    /**
     * @test void
     */
    public function get_all_treatments() {

        $response = $this->getJson(route('treatments.index'));

        $this->assertEquals(1, count($response->json()));
        $this->assertEquals('Insulin', $response->json()[0]['title']);

    }

    /**
     * @test void
     */
    public function get_single_treatment() {

        $response = $this->getJson(route('treatments.show', $this->treatment->id))
            ->assertOk()
            ->json();

        $this->assertEquals($response['title'], $this->treatment->title);

    }

    /**
     * @test
     */
    public function store_treatment() {

        $treatment = Treatment::factory()->make();

        $response = $this->postJson(route('treatments.store'), [
            'title' => $treatment->title,
            'start_date' => $treatment->start_date,
            'patient_id' => $treatment->patient_id
        ])
            ->assertCreated()
            ->json();


        $this->assertEquals($treatment->title, $response['title']);

        $this->assertDatabaseHas('treatments', ['title' => $treatment->title]);
    }

    /**
     * @test
     */
    public function attributes_required_while_storing_treatment() {

        $this->postJson(route('treatments.store'))
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['title', 'start_date', 'patient_id']);

    }

    /**
     * @test
     */
    public function delete_treatment() {

        $this->deleteJson(route('treatments.destroy', $this->treatment->id))
            ->assertNoContent();

        $this->assertDatabaseMissing('treatments', [
            'title' => $this->treatment->title,
            'start_date' => $this->treatment->start,
            'patient_id' => $this->treatment->patient_id
        ]);
    }

    /**
     * @test
     */
    public function update_treatment() {

        $this->patchJson(route('treatments.update', $this->treatment->id), [
            'title' => 'Title updated',
            'start_date' => '2022_03_15',
            'patient_id' => $this->treatment->patient_id
        ])->assertOk();

        $this->assertDatabaseHas('treatments', [
            'title' => 'Title updated',
            'start_date' => '2022_03_15',
            'patient_id' => $this->treatment->patient_id
        ]);
    }

    /**
     * @test
     */
    public function while_updating_treatment_attributes_are_required() {

        $this->withExceptionHandling();

        $this->patchJson(route('treatments.update', $this->treatment->id))
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['title', 'start_date', 'patient_id']);

    }





}
