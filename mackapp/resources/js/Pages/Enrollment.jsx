import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Enrollment = ({ auth }) => {
  const [formData, setFormData] = useState({
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
    status: 'Not Saved',
    section: 'TBD',
  });

  const departmentCourses = {
    CITC: ['Computer Science', 'Information Technology'],
    CEA: ['Engineering', 'Architecture'],
    CON: ['Nursing'],
    // Add more departments and their courses as needed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'department' && { course: '' }), // Reset course if department changes
    });
  };

  const navigateToReview = () => {
    window.location.href = '/dashboard/enrollment/review';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/enroll', formData)
      .then(response => {
        console.log(response.data);
        alert('Data saved successfully');
        navigateToReview();
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          const errorMessages = error.response.data.errors 
            ? Object.values(error.response.data.errors).flat().join(', ') 
            : 'There was an error with the submission';
          alert('There was an error saving the data: ' + errorMessages);
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kindly fill out the following information</h2>}
    >
      <Head title="Enrollment and Personal Info" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Enrollment Process</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Academic Year & Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Application Type</label>
              <select
                name="application_type"
                value={formData.application_type}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Application type -</option>
                <option value="new">New</option>
                <option value="transfer">Transfer</option>
                <option value="returning">Returning</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Grade / Level</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Year Level -</option>
                <option value="1st year - Baccalaureate">1st year - Baccalaureate</option>
                <option value="2nd year - Baccalaureate">2nd year - Baccalaureate</option>
                <option value="3rd year - Baccalaureate">3rd year - Baccalaureate</option>
                <option value="4th year - Baccalaureate">4th year - Baccalaureate</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Department -</option>
                <option value="CITC">CITC</option>
                <option value="CEA">CEA</option>
                <option value="CON">CON</option>
                {/* Add more departments as needed */}
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                disabled={!formData.department} // Disable course selection if no department is selected
              >
                <option value="">- Please select Course -</option>
                {formData.department && departmentCourses[formData.department].map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Nationality</label>
              <input
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Civil Status</label>
              <select
                name="civil_status"
                value={formData.civil_status}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Civil Status -</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Separated">Separated</option>
                <option value="Widow">Widow</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Gender -</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Address</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">House No, Street Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Province</label>
              <input
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <input
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Barangay</label>
              <input
                name="barangay"
                value={formData.barangay}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Religion</label>
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              >
                <option value="">- Please select Religion -</option>
                <option value="Roman Catholic">Roman Catholic</option>
                <option value="Islam">Islam</option>
                <option value="INC">INC</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              onClick={() => {
                window.history.back();
              }}
            >
              Back
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Enrollment;
