<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rules', function (Blueprint $table) {
            $table->id();
            $table->foreignId(  'treatment_id')->references('id')->on('treatments')->onDelete('cascade');
            $table->string('freq'); // RRULE:freq
            $table->integer('interval')->nullable(); //RRULE:interval
            $table->integer('max_num_of_occurrences')->nullable(); //RRULE:COUNT
            $table->json('day_of_week')->nullable(); //RRULE:BYDAY
            $table->integer('week_of_month')->nullable(); //RRULE:BYWEEKNO
            $table->integer('day_of_month')->nullable(); //RRULE:BYMONTHDAY
            $table->integer('month_of_year')->nullable(); //RRULE:BYMONTH
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
        Schema::dropIfExists('rules');
    }
}
