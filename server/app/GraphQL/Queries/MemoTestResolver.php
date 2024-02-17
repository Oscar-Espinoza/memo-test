<?php

namespace App\GraphQL\Queries;

use App\Models\MemoTest;

class MemoTestResolver
{
  public function highestScore($rootValue, array $args)
  {
    return $rootValue->gameSessions()->max('score');
  }
}
