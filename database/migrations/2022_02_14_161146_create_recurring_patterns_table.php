<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecurringPatternsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recurring_patterns', function (Blueprint $table) {
            $table->id();
            $table->foreignId('treatment_task_id');
            $table->foreignId('recurring_type_id');
            $table->integer('max_num_of_occurrences');
            $table->integer('day_of_week');
            $table->integer('week_of_month');
            $table->integer('day_of_month');
            $table->integer('month_of_year');
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
        Schema::dropIfExists('recurring_patterns');
    }
}
