<?php

namespace App\Http\Controllers;

use App\Models\Enrollment; // Make sure to import your Enrollment model
use Illuminate\Http\Request;

class StatusEditController extends Controller
{
    public function updateStatus(Request $request, Enrollment $enrollment)
    {
        $enrollment->status = 'Pending';
        $enrollment->save();

        return response()->json(['message' => 'Enrollment status updated successfully'], 200);
    }
}
