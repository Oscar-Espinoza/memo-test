<?php

namespace App\GraphQL\Mutations;

use App\Models\MemoTest;
use App\Models\GameSession;

class UpdateGameSession
{
  public function __invoke($_, array $args)
  {
    $gameSession = GameSession::find($args['id']);

    $gameSession->retries = $args['retries'];
    $gameSession->state = $args['state'];

    if ($args['state'] === 'Completed') {
      $score = $gameSession->calculateScore();
      $memoTest = $gameSession->memoTest;
      if ($score > $memoTest->highestScore) {
          $memoTest->highestScore = $score;
          $memoTest->save();
      }
    }
    $gameSession->save();
    return $gameSession;
  }
}
