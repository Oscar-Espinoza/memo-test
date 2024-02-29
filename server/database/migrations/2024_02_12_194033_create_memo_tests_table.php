<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

  public function up(): void
  {
    Schema::create('memo_tests', function (Blueprint $table) {
      $table->id();
      $table->string('name')->unique();
      $table->json('images');
      $table->integer('highestScore')->default(0);
      $table->timestamps();
    });
  }

  public function down(): void
  {
    Schema::dropIfExists('memo_tests');
  }
};
