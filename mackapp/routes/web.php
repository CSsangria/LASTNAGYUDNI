<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeeTuitionController;
use App\Http\Controllers\StudentsController; 
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\EnrollmentFormController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PaymentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Define the route for the welcome page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Define the route for the SeeTuition page
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard/SeeTuition', [SeeTuitionController::class, 'index'])->name('SeeTuition');
});
// Define the route for the Department page
Route::get('/dashboard/department', [DepartmentController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('department');

// Define the route for the students page
Route::get('/dashboard/students_view', [StudentsController::class, 'index'])->name('students_view');
Route::get('/dashboard/students_profile', [StudentsController::class, 'index'])->name('students_profile');


// Define the route for the users page
Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
})->middleware(['auth', 'verified']);

// Define the route for the dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Group routes that require authentication
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Define the route for retrieving payment


// Define the route for the enrollment page
Route::get('/dashboard/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index');



// new era 

Route::get('/enroll', [EnrollmentFormController::class, 'index']);
Route::post('/enroll', [EnrollmentFormController::class, 'store']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware(['auth'])->group(function () {
    Route::get('/enroll', [EnrollmentController::class, 'showEnrollmentForm'])->name('enroll.form');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/enroll', [EnrollmentController::class, 'index'])->name('enrollment.index');
    Route::post('/enroll', [EnrollmentController::class, 'store'])->name('enrollment.store');
    Route::get('/enroll/edit', [EnrollmentController::class, 'edit'])->name('enrollment.edit');
    Route::put('/enroll', [EnrollmentController::class, 'update'])->name('enrollment.update');
});


//rev
use App\Http\Controllers\ReviewController;
Route::get('/dashboard/enrollment/review', [ReviewController::class, 'index'])->name('review.index');

use App\Http\Controllers\ReviewController2;

Route::middleware('auth')->get('/enrollments', [ReviewController2::class, 'index']);


Route::get('/enrollments/{id}/subjects', [ReviewController2::class, 'showEnrollmentSubjects']);
///3333



//44

Route::get('/admindashboard', function () {
    return Inertia::render('AdminDashboard');
})->name('admindashboard')->middleware('auth');

Route::get('/staffdashboard', function () {
    return Inertia::render('StaffDashboard');
})->name('staffdashboard')->middleware('auth');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard')->middleware('auth');

//55


use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\StaffDashboardController;

Route::get('/admindashboard', [AdminDashboardController::class, 'index'])
    ->name('admindashboard')
    ->middleware('auth');

Route::get('/staffdashboard', [StaffDashboardController::class, 'index'])
    ->name('staffdashboard')
    ->middleware('auth');

//66

use App\Http\Controllers\StaffEnrollmentController;

Route::middleware(['auth'])->group(function () {
    Route::get('/staffdashboard', [StaffEnrollmentController::class, 'index'])->name('staffdashboard');
    Route::put('/enrollments2/{id}', [StaffEnrollmentController::class, 'update'])->name('enrollments2.update');
    Route::delete('/enrollments2/{id}', [StaffEnrollmentController::class, 'destroy'])->name('enrollments2.destroy');
});


use App\Http\Controllers\AdminEnrollmentController;

Route::middleware(['auth'])->group(function () {
    Route::get('/admindashboard', [AdminEnrollmentController::class, 'index'])->name('admindashboard');
    Route::put('/enrollments1/{id}', [AdminEnrollmentController::class, 'update'])->name('enrollments1.update');
    Route::delete('/enrollments1/{id}', [AdminEnrollmentController::class, 'destroy'])->name('enrollments1.destroy');
});


///7777

use App\Http\Controllers\TuitionFeeController;

Route::post('/tuition-fees', [TuitionFeeController::class, 'store']);
Route::get('/tuition-fees', [TuitionFeeController::class, 'index']);

////9.2

use App\Http\Controllers\RevDelController;

Route::delete('/enrollments/{id}', [RevDelController::class, 'destroy']);

require __DIR__.'/auth.php';






/////888

// routes/web.php
use App\Http\Controllers\StatusController;

Route::middleware('auth:sanctum')->get('/status', [StatusController::class, 'index']);



use App\Http\Controllers\StatusEditController;

Route::post('/enrollments/{enrollment}/status', [StatusEditController::class, 'updateStatus']);


use App\Http\Controllers\FetchEnrollmentController;

Route::get('/enrollments/not-saved', [FetchEnrollmentController::class, 'getNotSavedEnrollments']);

Route::post('/enrollments/{id}/save', [EnrollmentController::class, 'save']);



//pedofile wop wop wop wop wop dot f'em up
Route::get('generate-pdf', [App\Http\Controllers\PDFController::class, 'generatePDF']);

