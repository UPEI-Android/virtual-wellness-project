<?php

namespace Tests\Feature;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class TreatmentTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    private $treatment;
    protected $user;

    public function setUp():void{

        parent::setUp();

        $this->user = User::factory()->create();
        Sanctum::actingAs($this->user);

        $this->treatment = $this->createTreatment([
            'title' => 'Insulin',
            'patient_id' => $this->user->id,
            'notes' => 'diabetic',
            'start_date' => '2022-03-28',
            'start_time' => '12:02:50',
            'end_time' => '12:02:50',
        ]);

    }

    public function createTreatment($args = []) {

        return Treatment::factory()->create($args);

    }


    /**
     * @test void
     */
    public function get_all_treatments() {

        $this->createTreatment();

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
        //$treatment = $this->createTreatment();

        $response = $this->postJson(route('treatments.store'), [
            'title' => $treatment->title,
            'notes' => $treatment->notes,
            'start_date' => $treatment->start_date,
            'end_date' => $treatment->end_date,
            'start_time' => $treatment->start_time,
            'end_time' => $treatment->end_time
        ])
            ->assertCreated()
            ->json();


        $this->assertEquals($treatment->title, $response['title']);
        $this->assertEquals($this->user->id, $response['patient_id']);
        $this->assertEquals($treatment->notes, $response['notes']);
        $this->assertEquals($treatment->start_date, $response['start_date']);
        $this->assertEquals($treatment->end_date, $response['end_date']);
        $this->assertEquals($treatment->start_time, $response['start_time']);
        $this->assertEquals($treatment->end_time, $response['end_time']);

        $this->assertDatabaseHas('treatments', [
            'title' => $treatment->title,
            'notes' => $treatment->notes,
            'start_date' => $treatment->start_date,
            'end_date' => $treatment->end_date,
            'start_time' => $treatment->start_time,
            'end_time' => $treatment->end_time
        ]);
    }

    /**
     * @test
     */
    public function attributes_required_while_storing_treatment() {

        $this->postJson(route('treatments.store'))
            ->assertUnprocessable()
            ->assertJsonValidationErrors(['title', 'start_date']);

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
            ->assertJsonValidationErrors(['title', 'start_date']);

    }





}
