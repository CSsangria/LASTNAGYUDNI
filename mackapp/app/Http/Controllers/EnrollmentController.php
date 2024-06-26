<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Enrollment;
use App\Models\TuitionFee;

class EnrollmentController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $enrollment = $user->enrollment; 
        return Inertia::render('Enrollment', [
            'auth' => [
                'user' => $user,
                'enrollment' => $enrollment,
            ],
        ]);
    }

    

    public function store(Request $request)
    {
        $request->validate([
            // Add validation rules here
        ]);

        $user = Auth::user();

        // Ensure the user does not have an existing enrollment
        if ($user->enrollment) {
            return redirect()->route('enrollment.index')->with('error', 'You have already submitted the form.');
        }

        $enrollment = new Enrollment($request->all());
        $enrollment->user_id = $user->id;
        $enrollment->save();

        return redirect()->route('dashboard')->with('success', 'Enrollment saved successfully.');
    }

    public function save(Request $request, $id)
{
    $enrollment = Enrollment::findOrFail($id);
    $tuitionFee = new TuitionFee([
        'user_id' => $enrollment->user_id,
        'enrollment_id' => $enrollment->id,
        'tuition_fee' => $request->input('total_tuition'),
    ]);
    $tuitionFee->save();

    // Update enrollment status to 'Accepted' or another appropriate status
    $enrollment->enrollmentstatus = 'To Pay'; 
    $enrollment->save();

    return response()->json(['message' => 'Enrollment saved successfully.']);
}


public function getUserEnrollment()
{
    $user = Auth::user();
    $enrollment = Enrollment::where('user_id', $user->id)->first();

    if ($enrollment) {
        if ($enrollment->status === 'Accepted' && $enrollment->enrollmentstatus === 'Not Enrolled') {
            return response()->json(['status' => 'Accepted','enrollmentstatus' => 'Not Enrolled', 'enrollment' => $enrollment]);

        } elseif ($enrollment->status === 'Accepted' && $enrollment->enrollmentstatus === 'To Pay') {
            return response()->json(['status' => 'Enrolled', 'message' => 'Please pay your fee for the Current enrollment']);

        } elseif($enrollment->status === 'Accepted' && $enrollment->enrollmentstatus === 'Paid') {
            return response()->json(['status' => 'Enrolled', 'message' => 'You Are now Enrolled <3']);
            
        } elseif ($enrollment->status === 'Rejected') {
            return response()->json(['status' => 'Rejected', 'message' => 'Rejected, Pangita nag lain skwelahan sorry']);
        } else {
            return response()->json(['status' => 'For Approval', 'message' => 'You cannot view this page, Please wait for your application to be accepted']);
        }
 
    } else {
        return response()->json(['status' => 'None', 'message' => 'GTFO'], 404);
    }
}


    public function getEnrollmentStatus()
    {
        $user = Auth::user();
        $enrollment = Enrollment::where('user_id', $user->id)->first();

        if (!$enrollment) {
            return response()->json(['status' => 'Not Found'], 404);
        }

        return response()->json(['status' => $enrollment->status]);
    }


    
}

