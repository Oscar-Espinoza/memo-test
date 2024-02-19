<?php

namespace App\GraphQL\Mutations;

use App\Models\MemoTest;

class DeleteImageMemoTest
{
  public function __invoke($_, array $args)
  {
    $memoTest = MemoTest::findOrFail($args['id']);
    $images = $memoTest->images;

    if (isset($images[$args['imageIndex']])) {
      array_splice($images, $args['imageIndex'], 1);
      $memoTest->images = $images;
      $memoTest->save();
    } else {
      throw new \Exception("Image index not valid.");
    }

    return $memoTest;
  }
}
