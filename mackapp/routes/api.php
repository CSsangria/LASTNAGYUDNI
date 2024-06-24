<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Models\Enrollment;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->get('/enrollment/review', function (Request $request) {
    // Assuming you want to get the enrollment data for the authenticated user
    $enrollment = Enrollment::where('user_id', $request->user()->id)->first();
    if ($enrollment) {
        return response()->json($enrollment);
    } else {
        return response()->json(['message' => 'Enrollment not found'], 404);
    }
});

