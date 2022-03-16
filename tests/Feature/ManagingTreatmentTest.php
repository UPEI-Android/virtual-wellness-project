<?php

namespace Tests\Feature;

use App\Models\Treatment;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

//DEPRECATED ONLY FOR WEB ROUTES : DON'T RUN YET
class ManagingTreatmentTest extends TestCase
{
    use WithFaker, RefreshDatabase;


    /**
     * @test void
     */
    public function a_user_can_create_a_treatment() {

        $this->actingAs(User::factory()->create());

        $attributes = [
            'title' => $this->faker->title,
            'notes' => $this->faker->sentence,
        ];

        $this->post('/treatments', $attributes)->assertRedirect('/treatments');

        $this->assertDatabaseHas('treatments', $attributes);

        $this->get('/treatments')->assertSee($attributes['title']);

    }

    /**
     * @test
     */
    public function a_user_can_view_a_treatment() {

        $treatment = Treatment::factory()->create();

        $this->get($treatment->path())
             ->assertSee($treatment->title)
             ->assertSee($treatment->notes);

    }

    /**
     * @test
     */
    public function a_treatment_requires_a_title() {

        $this->actingAs(User::factory()->create());

        $attributes = Treatment::factory()->raw(['title' => '']);

        $this->post('/treatments', $attributes)->assertSessionHasErrors('title');
    }

    /**
     * @test
     */
    public function a_treatment_requires_a_note() {

        $this->actingAs(User::factory()->create());

        $attributes = Treatment::factory()->raw(['notes' => '']);

        $this->post('/treatments', $attributes)->assertSessionHasErrors('notes');
    }

    /**
     * TODO: Replace this test with the one below this test
     * @test
     */
    public function only_authenticated_users_can_create_treatments() {

        $attributes = Treatment::factory()->raw();

        $this->post('/treatments', $attributes)->assertRedirect('login');
    }

    /**
     * TODO: Give admin or care rights only
     * @test
     */
    public function only_admin_can_create_treatments() {

        $attributes = Treatment::factory()->raw();

        $this->post('/treatments', $attributes)->assertRedirect('login');
    }

}
