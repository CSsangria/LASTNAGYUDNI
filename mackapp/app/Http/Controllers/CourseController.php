<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        // You can pass data to the view if needed
        return inertia('Courses', [
            'data' => 'This is the enrollment page',
        ]);
    }
}
