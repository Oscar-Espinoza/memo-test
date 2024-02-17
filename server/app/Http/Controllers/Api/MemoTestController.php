<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MemoTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MemoTestController extends Controller
{
  public function index()
  {
    $memoTests = MemoTest::all();
    $data = [
      'status' => 200,
      'memoTests' => $memoTests
    ];
    return response()->json($data, 200);
  }

  public function addMemo(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|max191',
      'images' => 'array:images'
    ]);

    if ($validator->fails()) {
      return response()->json([
        'status' => 422,
        'errors' => $validator->messages()
      ], 422);
    } else {
      $memo = MemoTest::create([
        'name' => $request->name,
        'images' => $request->images
      ]);

      if ($memo) {
        return response()->json([
          'status' => 200,
          'message' => "MemoTest created successfully"
        ], 200);
      } else {
        return response()->json([
          'status' => 500,
          'message' => "Something went wrong"
        ], 500);
      }
    }
  }
}
