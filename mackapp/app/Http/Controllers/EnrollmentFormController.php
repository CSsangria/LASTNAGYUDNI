<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentFormController extends Controller
{
    public function store(Request $request)
    {
        // Validation
        $request->validate([
            'term' => 'required|string',
            'application_type' => 'required|string',
            'year' => 'required|string',
            'department' => 'required|string',
            'course' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'date_of_birth' => 'required|date',
            'nationality' => 'required|string',
            'civil_status' => 'required|string',
            'gender' => 'required|string',
            'address' => 'required|string',
            'province' => 'required|string',
            'region' => 'required|string',
            'barangay' => 'required|string',
            'religion' => 'required|string',
            'mobile_number' => 'required|string',
            'email' => 'required|string|email',
            'totalfees' => 'numeric', // Add this line
        ]);

        // Create Enrollment
        Enrollment::create([
            'term' => $request->term,
            'application_type' => $request->application_type,
            'year' => $request->year,
            'department' => $request->department,
            'course' => $request->course,
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'date_of_birth' => $request->date_of_birth,
            'nationality' => $request->nationality,
            'civil_status' => $request->civil_status,
            'gender' => $request->gender,
            'address' => $request->address,
            'province' => $request->province,
            'region' => $request->region,
            'barangay' => $request->barangay,
            'religion' => $request->religion,
            'mobile_number' => $request->mobile_number,
            'email' => $request->email,
            'totalfees' => $request->totalfees, // Add this line
        ]);

        return response()->json(['message' => 'Enrollment successfully saved']);
    }
}
