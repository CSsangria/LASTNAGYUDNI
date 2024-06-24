<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $fillable = [
        'user_id', 'term', 'application_type', 'year', 'department', 'course', 'first_name',
        'last_name', 'date_of_birth', 'nationality', 'civil_status', 'gender', 'address',
        'province', 'region', 'barangay', 'religion', 'mobile_number', 'email','status','section',
    ];

     public function tuitionFees()
    {
        return $this->hasMany(TuitionFee::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
