<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  public function run(): void
  {
    $memoTests = [
      [
        'name' => 'Dogs memo',
        'images' => [
          'https://static.wikia.nocookie.net/paw-patrol/images/7/71/Chase_PNG.png/revision/latest?cb=20220815044513',
          'https://www.hepper.com/wp-content/uploads/2022/09/Skye-Paw-Patrol-Spin-Master-Ltd.webp',
          'https://static.wikia.nocookie.net/paw-patrol/images/6/64/Marshall_PNG.png/revision/latest?cb=20150520174150',
          'https://www.k9ofmine.com/wp-content/uploads/2018/02/rubble-paw-patrol.png',
        ],
      ],
      [
        'name' => 'Cats memo',
        'images' => [
          'https://static.wikia.nocookie.net/paw-patrol/images/a/aa/Cat_Rubble_%28Transparent%29.png/revision/latest?cb=20230826002943',
          'https://static.wikia.nocookie.net/paw-patrol/images/7/75/Cat_Marshall_%28Transparent%29.png/revision/latest?cb=20230325175807',
          'https://static.wikia.nocookie.net/paw-patrol/images/e/e7/Leo_Official_Art.png/revision/latest?cb=20230310052530',
          'https://i.pinimg.com/originals/9f/76/42/9f764207f376aca826f9781d771427eb.png',
        ],
      ],
    ];

    foreach ($memoTests as $test) {
      // Here, create a new MemoTest instance and set its properties
      $memoTest = new \App\Models\MemoTest();
      $memoTest->name = $test['name'];
      $memoTest->images = $test['images'];
      $memoTest->save();
    }
  }
}
