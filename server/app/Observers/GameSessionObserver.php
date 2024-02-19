<?php

namespace App\Observers;

use App\Models\GameSession;

class GameSessionObserver
{
  public function saving(GameSession $gameSession)
  {
    if ($gameSession->isDirty(['numberOfPairs', 'retries'])) {

      if (isset($gameSession->numberOfPairs, $gameSession->retries) && $gameSession->retries > 0) {

        $gameSession->score = ($gameSession->numberOfPairs / $gameSession->retries) * 100;
      } else {
        $gameSession->score = 0;
      }
    }
  }
}
