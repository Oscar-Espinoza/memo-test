<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

  public function up(): void
  {
    Schema::create('game_sessions', function (Blueprint $table) {
      $table->id();
      $table->foreignId('memo_test_id')->constrained('memo_tests');
      $table->integer('score');
      $table->boolean('completed');
      $table->integer('retries')->default(0);
      $table->integer('numberOfPairs');
      $table->string('state')->default('Started');
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('game_sessions');
  }
};
