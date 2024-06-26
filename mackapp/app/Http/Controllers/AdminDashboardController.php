<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AdminDashboardController extends Controller
{
    public function index()
    {
        if (Auth::check() && Auth::user()->id === 1) {
            return Inertia::render('AdminDashboard');
        }

        return redirect()->dashboard()->withErrors(['access' => 'Unauthorized access to admin dashboard']);
    }
}
