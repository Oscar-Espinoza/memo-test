<?php

namespace App\GraphQL\Mutations;

use App\Models\MemoTest;

class AddImageMemoTest
{
  public function __invoke($_, array $args)
  {
    $memoTest = MemoTest::findOrFail($args['id']);
    $currentImages = $memoTest->images;
    $newImages = array_merge($currentImages, $args['newImages']);
    $memoTest->images = $newImages;
    $memoTest->save();

    return $memoTest;
  }
}
