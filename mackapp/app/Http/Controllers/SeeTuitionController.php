<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class SeeTuitionController extends Controller
{
    public function index()
    {
        return Inertia::render('SeeTuition', [
            'auth' => auth()->user(),
        ]);
    }
}
