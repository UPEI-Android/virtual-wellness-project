<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function path() {

        return "/treatments/{$this->id}";
    }

    public function patient() {

        return $this->belongsTo(User::class);
    }

    public function treatments() {

        return $this->hasMany(Treatment::class, 'patient_id');
    }
}
