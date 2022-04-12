<?php

namespace App\Models;

use App\Traits\SelfReferenceTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Testing\RefreshDatabase;

class Treatment extends Model
{
    use HasFactory, RefreshDatabase, SelfReferenceTrait;

    protected $guarded = [];

    public function path() {

        return "/treatments/{$this->id}";
    }

    public function patient() {

        return $this->belongsTo(User::class);
    }

    public function rule(): HasOne
    {
        return $this->hasOne(Rule::class);
    }

}
