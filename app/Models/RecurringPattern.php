<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecurringPattern extends Model
{
    use HasFactory;

    public function recurring_type() {

        return $this->hasOne(RecurringType::class);

    }

    public function treatment_task() {

        return $this->hasOne(TreatmentTask::class);

    }
}
