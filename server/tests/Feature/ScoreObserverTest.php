<?php

namespace Tests\Feature;

use App\Models\GameSession;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\MemoTest;

class ScoreObserverTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_calculates_score_correctly_on_saving()
    {
        $mockMemo = MemoTest::factory()->create(['name' => 'Unique memo']);
        
        $gameSession = GameSession::create([
            'numberOfPairs' => 10,
            'retries' => 5,
            'memo_test_id' => $mockMemo->id,
        ]);

        $gameSession->numberOfPairs = 20;
        $gameSession->retries = 10;
        $gameSession->save();

        $this->assertEquals(200, $gameSession->fresh()->score);
    }
}
