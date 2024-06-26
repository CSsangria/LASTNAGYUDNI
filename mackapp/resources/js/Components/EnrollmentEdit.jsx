import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const EnrollmentEdit = ({ auth, enrollment }) => {
  const [formData, setFormData] = useState(enrollment || {
    term: '2024-2025 - 1st Semester',
    application_type: '',
    year: '',
    department: '',
    course: '',
    first_name: auth.user.name || '',
    last_name: '',
    date_of_birth: '',
    nationality: '',
    civil_status: '',
    gender: '',
    address: '',
    province: '',
    region: '',
    barangay: '',
    religion: '',
    mobile_number: '',
    email: auth.user.email || '',
  });

  const departmentCourses = {
    CITC: ['Computer Science', 'Information Technology'],
    CEA: ['Engineering', 'Architecture'],
    CON: ['Nursing'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'department' && { course: '' }), // Reset course if department changes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/enroll/${formData.id}`, formData)
      .then(response => {
        console.log(response.data);
        alert('Data updated successfully');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          const errorMessages = error.response.data.errors
            ? Object.values(error.response.data.errors).flat().join(', ')
            : 'There was an error with the submission';
          alert('There was an error updating the data: ' + errorMessages);
        } else if (error.request) {
          console.error('Error request:', error.request);
          alert('No response received from the server');
        } else {
          console.error('Error message:', error.message);
          alert('Error in request setup: ' + error.message);
        }
      });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Update Your Information</h2>}
    >
      <Head title="Update Enrollment and Personal Info" />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Enrollment Process</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">Academic Year & Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Application Type</label>
              <select
                name="application_type"
                value={formData.application_type}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Application type -</option>
                <option value="new">New</option>
                <option value="transfer">Transfer</option>
                <option value="returning">Returning</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Grade / Level </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Year Level -</option>
                <option value="1st year - Baccalaureate">1st year - Baccalaureate</option>
                <option value="2nd year - Baccalaureate">2nd year - Baccalaureate</option>
                <option value="3rd year - Baccalaureate">3rd year - Baccalaureate</option>
                <option value="4th year - Baccalaureate">4th year - Baccalaureate</option>
                <option value="5th year - Baccalaureate">5th year - Baccalaureate</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Department -</option>
                <option value="CITC">CITC</option>
                <option value="CEA">CEA</option>
                <option value="CON">CON</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
                disabled={!formData.department}
              >
                <option value="">- Please select Course -</option>
                {formData.department && departmentCourses[formData.department].map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Nationality</label>
              <input
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Civil Status</label>
              <select
                name="civil_status"
                value={formData.civil_status}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Civil Status -</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Separated">Separated</option>
                <option value="Widow">Widow</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              >
                <option value="">- Please select Gender -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Halata">Halata</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="mb-4">
              <label className="block text-gray-700">House No, Street Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">Province</label>
              <input
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Region</label>
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Barangay</label>
              <input
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">Religion</label>
              <input
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile Number</label>
              <input
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
          <button
            type="button"
            className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default EnrollmentEdit;
