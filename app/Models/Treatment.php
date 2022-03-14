<?php

namespace App\Models;

use App\Traits\SelfReferenceTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treatment extends Model
{
    use HasFactory, SelfReferenceTrait;

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
