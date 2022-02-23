<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TreatmentTask extends Model
{
    use HasFactory;

    public function care_node() {

        return $this->belongsTo(CareNode::class);

    }

    public function recurring_pattern() {

        return $this->hasMany(RecurringType::class);

    }


}
