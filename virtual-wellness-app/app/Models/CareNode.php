<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CareNode extends Model
{
    use HasFactory;

    public function treatments() {

        return $this->hasMany(Treatment::class);

    }
}
