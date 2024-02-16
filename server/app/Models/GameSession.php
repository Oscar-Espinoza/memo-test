<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\State;

class GameSession extends Model
{
  use HasFactory;

  protected $fillable = [
    'memo_test_id', 'score', 'retries', 'numberOfPairs', 'state'
  ];

  protected $casts = [
    'state' => State::class,
  ];

  public function memoTest(): BelongsTo
  {
    return $this->belongsTo(MemoTest::class);
  }

  public function getStateAttribute($value)
  {
    return $value instanceof \App\Enums\State ? $value->value : $value;
  }
}
