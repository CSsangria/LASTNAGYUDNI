<?php

// app/Http/Controllers/StatisticsController.php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Statistics', [
            'auth' => $request->user()
        ]);
    }
}
