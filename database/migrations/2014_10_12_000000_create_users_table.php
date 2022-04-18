<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->integer('user_type')->nullable(); //Thinking something like 1=admin 2=technician/careprovider 3=normal user
            $table->DATE('birthday')->nullable();
            $table->datetime('last_login_at')->nullable();
            $table->string('last_login_ip')->nullable();
            $table->foreignId('treatment_group')->nullable();
            $table->foreignId('account_creator_id')->nullable();
            $table->string('phone')->nullable();
            $table->integer('initial_weight')->nullable();
            $table->integer('current_weight')->nullable();
            $table->integer('rest_heart_rate')->nullable();
            $table->integer('age')->nullable();
            $table->string('gender')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
