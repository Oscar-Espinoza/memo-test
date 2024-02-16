<?php

namespace App\Observers;

use App\Models\GameSession;

class GameSessionObserver
{
  public function saving(GameSession $gameSession)
  {
    // Check if the attributes that affect the score are actually changing.
    // This prevents the calculation from running if it's not necessary.
    if ($gameSession->isDirty(['numberOfPairs', 'retries'])) {
      // Ensure retries is not zero to avoid division by zero error
      if (isset($gameSession->numberOfPairs, $gameSession->retries) && $gameSession->retries > 0) {
        $gameSession->score = ($gameSession->numberOfPairs / $gameSession->retries) * 100;
      } else {
        // Handle cases where retries is zero or other invalid data
        $gameSession->score = 0; // or use null, or keep the previous score, depending on your application logic
      }
    }
  }
}
