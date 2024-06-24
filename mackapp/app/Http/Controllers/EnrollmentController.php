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
    $enrollment->status = 'Pending'; 
    $enrollment->save();

    return response()->json(['message' => 'Enrollment saved successfully.']);
}

    

}
