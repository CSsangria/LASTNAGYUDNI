<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index()
    {
        // You can pass data to the view if needed
        return inertia('Department', [
            'data' => 'This is the department page',
        ]);
    }
}
