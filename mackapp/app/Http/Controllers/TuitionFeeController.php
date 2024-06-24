<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TuitionFee;
use Illuminate\Support\Facades\Auth;

class TuitionFeeController extends Controller
{
    public function index()
    {
        // Fetch all tuition fees with their related enrollments
        $tuitionFees = TuitionFee::with('enrollment')->get();
        return response()->json($tuitionFees);
    }

    public function store(Request $request)
    {
        $request->validate([
            'tuition_fee' => 'required|numeric',
        ]);

        $tuitionFee = TuitionFee::create([
            'user_id' => Auth::id(),
            'tuition_fee' => $request->tuition_fee,
            'enrollment_id' => $request->enrollment_id, // Assuming enrollment_id is also passed
        ]);

        return response()->json(['message' => 'Tuition fee saved successfully!', 'tuition_fee' => $tuitionFee], 201);
    }
}
