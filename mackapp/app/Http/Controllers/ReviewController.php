<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ReviewController extends Controller
{
    public function index()
    {
        return Inertia::render('Review', [
            'auth' => auth()->user(),
        ]);
    }
    
}
