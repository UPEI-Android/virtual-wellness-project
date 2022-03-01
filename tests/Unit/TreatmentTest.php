<?php

namespace Tests\Unit;

use App\Models\Treatment;
use Database\Factories\TreatmentFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\App;
use Tests\TestCase;

class TreatmentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @test
     */
    public function it_has_a_path() {

        $treatment = Treatment::factory()->create();

        $this->assertEquals( '/treatments/' . $treatment->id, $treatment->path());
    }
}
