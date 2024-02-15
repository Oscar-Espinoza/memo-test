<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MemoTest extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
  ];

  protected $casts = [
    'images' => 'array',
  ];

  public function gameSessions(): HasMany
  {
    return $this->hasMany(GameSession::class);
  }

  protected static function boot()
  {
    parent::boot();

    static::deleting(function ($memoTest) {
      // Delete all related game sessions
      $memoTest->gameSessions()->delete();
    });
  }
}
