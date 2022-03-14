<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTreatmentTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('treatment_tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('notes')->nullable();;
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->boolean('is_full_day_event')->nullable();
            $table->boolean('is_recurring')->nullable();
            $table->foreignId('patient_id')->nullable();
            $table->foreignId('care_node_id')->nullable();
            $table->integer('parent_id')->nullable();

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
        Schema::dropIfExists('treatment_tasks');
    }
}
