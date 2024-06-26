<?php

// app/Http/Controllers/FetchEnrollmentController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enrollment;

class FetchEnrollmentController extends Controller
{
    public function getNotSavedEnrollments()
    {
        $enrollments = Enrollment::where('status', 'Not Saved')->get();
        return response()->json($enrollments);
    }
}
