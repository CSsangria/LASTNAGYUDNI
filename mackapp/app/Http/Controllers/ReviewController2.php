<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enrollment;
use App\Models\Subject;
use App\Models\SubjectEnrolled;
use Illuminate\Support\Facades\Auth;

class ReviewController2 extends Controller
{
    public function index()
    {
        $userId = Auth::id();
        $enrollments = Enrollment::where('user_id', $userId)->get();

        foreach ($enrollments as $enrollment) {
            $subjects = [];

            if ($enrollment->course === 'Nursing') {
                $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, 'Nursing');
            } elseif ($enrollment->course === 'Architecture') {
                $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, 'Architecture');
            } elseif ($enrollment->course === 'Engineering') {
                $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, 'Engineering');
            } elseif ($enrollment->course === 'Information Technology') {
                $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, 'Information Technology');
            } elseif ($enrollment->course === 'Computer Science') {
                $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, 'Computer Science');
            }

            $enrollment->subjects = $subjects;

            // Append the fetched data into SubjectEnrolled table
            foreach ($subjects as $subject) {
                SubjectEnrolled::updateOrCreate(
                    ['enrollment_id' => $enrollment->id, 'subject_id' => $subject->id],
                    ['user_id' => $userId]
                );
            }
        }

        return response()->json($enrollments);
    }

    private function getSubjectsByYearAndCourse($year, $course)
    {
        switch ($year) {
            case '1st year - Baccalaureate':
                return Subject::where('course', $course)
                              ->where('year', '1st year')
                              ->get();
            case '2nd year - Baccalaureate':
                return Subject::where('course', $course)
                              ->where('year', '2nd year')
                              ->get();
            case '3rd year - Baccalaureate':
                return Subject::where('course', $course)
                              ->where('year', '3rd year')
                              ->get();
            case '4th year - Baccalaureate':
                return Subject::where('course', $course)
                              ->where('year', '4th year')
                              ->get();
            default:
                return collect();
        }
    }

    public function showEnrollmentSubjects($enrollmentId)
    {
        // Fetch the specific enrollment
        $enrollment = Enrollment::find($enrollmentId);

        if (!$enrollment) {
            return response()->json(['error' => 'Enrollment not found.'], 404);
        }

        // Fetch the subjects related to this enrollment
        $subjects = $this->getSubjectsByYearAndCourse($enrollment->year, $enrollment->course);

        return response()->json(['subjects' => $subjects]);
    }
}
