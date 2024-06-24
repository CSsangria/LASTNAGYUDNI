<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Enrollment;
use App\Models\TuitionFee;
use Illuminate\Support\Facades\Auth;

class PDFController extends Controller
{
    public function generatePDF()
    {
        $currentUser = Auth::user();

        // Fetch the current user's data
        $users = User::where('id', $currentUser->id)->get();
        $enrollments = Enrollment::where('user_id', $currentUser->id)->get();
        $tuitions = TuitionFee::where('user_id', $currentUser->id)->get();

        $data = [
            'title' => 'Fund The Doors',
            'date' => date('m/d/Y'),
            'users' => $users,
            'enrollments' => $enrollments,
            'tuitions' => $tuitions
        ];

        $pdf = PDF::loadView('pdf.usersPdf', $data);
        return $pdf->download('user-data.pdf');
    }
}
