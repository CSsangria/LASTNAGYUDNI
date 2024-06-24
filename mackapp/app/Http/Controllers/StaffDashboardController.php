<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class StaffDashboardController extends Controller
{
    public function index()
    {
        if (Auth::check() && Auth::user()->id === 2) {
            return Inertia::render('StaffDashboard');
        }

        return redirect()->back()->withErrors(['access' => 'Unauthorized access to staff dashboard']);
    }
}
