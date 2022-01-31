<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function care_node() {

        return $this->belongsTo(CareNode::class);

    }

    public function daily_schedule() {

        return $this->hasOne(DailySchedule::class);

    }



}
