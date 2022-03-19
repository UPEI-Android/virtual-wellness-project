<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rule extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'day_of_week' => 'array'
    ];

    public function treatment(): BelongsTo
    {


        return $this->belongsTo(Treatment::class);

    }
}
