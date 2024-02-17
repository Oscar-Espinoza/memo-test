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
          'https://static.wixstatic.com/media/25f0d5_33b529c5633e47f3b7a426079be81939~mv2.jpg/v1/fill/w_256,h_256,fp_0.50_0.50,lg_1,q_80,enc_auto/25f0d5_33b529c5633e47f3b7a426079be81939~mv2.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYDgmP70Fcw5NBB2mlO7F7iXdNzOopxKFPfA&usqp=CAU',
          'https://pawzlove-media.s3.us-east-2.amazonaws.com/images/urlscan/21687/urlscan_image/78e89e6a7686c13f87cf888b4373a0fd.jpg',
          'https://fablepets.com/cdn/shop/files/IG_carousel_artieandbrody_256x256_c0a7306d-7b43-4d6a-ad16-7deef04fdc47.png?v=1652401112',
        ],
      ],
      [
        'name' => 'Cats memo',
        'images' => [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViNtCEnFKsj0jNAdXxwfZwHSppk-thA7qRL6GF_mmEfUHmjOFWD5bZMnkfSNDmPXsAHU&usqp=CAU',
          'https://d2ph5fj80uercy.cloudfront.net/04/cat2972.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEri5asu9JpiEElzD9GZli1EglOccc6WZA&usqp=CAU',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8ny7x-6Za_4e6MsT1dXL8plTV0dmi4GTIg&usqp=CAU',
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
