<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RevDelController extends Controller
{
    public function destroy($id)
    {
        $enrollment = Enrollment::where('user_id', Auth::id())->findOrFail($id);
        $enrollment->delete();

        return response()->json(['message' => 'Enrollment and associated data deleted successfully!'], 200);
    }
}
