<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\MemoTest;
use Illuminate\Database\QueryException;

class BasicFuncMemoTest extends TestCase
{
  use RefreshDatabase;

  public function test_dogs_memo_was_created(): void
  {
    $this->assertDatabaseHas('memo_tests', ['name' => 'Dogs memo']);
  }

  public function test_cats_memo_was_created(): void
  {
    $this->assertDatabaseHas('memo_tests', ['name' => 'Cats memo']);
  }

  public function test_prevents_duplicate_memo_names()
{
    $firstMemo = MemoTest::factory()->create(['name' => 'Unique memo']);
    $this->expectException(QueryException::class);
    $secondMemo = MemoTest::factory()->create(['name' => 'Unique memo']);
}
}
