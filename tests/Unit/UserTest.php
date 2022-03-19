<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use PHPUnit\Framework\TestCase;
use Tests\TestCase;

//THIS TEST IS DEPRECATED ; WAS ONLY WORKING WITH WEB ROUTES
// THIS NEEDS TO BE UPDATED LATER WHEN AUTH IS IMPLEMENTED
class UserTest extends TestCase
{

    use RefreshDatabase;
    /**
     * @test
     */
    public function a_default_user_is_not_an_admin() {

        $user = User::factory()->create();

        $this->assertFalse($user->isAdmin());

    }

    /**
     * @test
     */
    public function an_admin_user_is_an_admin()
    {
        $admin = User::factory()
            ->adminVerified('admin')
            ->create();

        $this->assertTrue($admin->isAdmin());
    }

    /**
     * @test
     */
    public function a_user_has_treatments() {

        $this->withoutExceptionHandling();

        $user = User::factory()->create();

        $this->assertInstanceOf(Collection::class, $user->treatments);
    }
}
