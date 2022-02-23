<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecurringType extends Model
{
    use HasFactory;

    public function recurring_pattern() {

        return $this->hasMany(RecurringType::class);

    }

}
