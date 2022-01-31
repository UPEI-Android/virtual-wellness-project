<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTreatmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('treatment', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('patient_id');
            $table->foreignId('care_node_id');
            $table->foreignId('daily_schedule_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();
        });
    }

    /*
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('treatment');
    }
}
