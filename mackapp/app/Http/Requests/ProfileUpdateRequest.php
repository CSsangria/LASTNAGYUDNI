<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        // Allow all authenticated users to make this request.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'term' => ['required', 'string', 'max:255'],
            'applicationType' => ['required', 'string', 'max:255'],
            'course' => ['required', 'string', 'max:255'],
            'department' => ['required', 'string', 'max:255'],
            'year' => ['required', 'string', 'max:40'],
        ];
    }
}

