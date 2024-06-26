import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';

const EnrollEdit = ({ auth, enrollmentId }) => {
  const [formData, setFormData] = useState({
    term: '',
    applicationType: '',
    year: '',
    department: '',
    course: '',
  });

  const departmentCourses = {
    CITC: ['Computer Science', 'Information Technology'],
    CEA: ['Engineering', 'Architecture'],
    CON: ['Nursing'],
    // Add more departments and their courses as needed
  };

  useEffect(() => {
    // Fetch the existing enrollment data
    axios.get(`/api/enrollment/${enrollmentId}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching enrollment data:', error);
      });
  }, [enrollmentId]);

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

    axios.put(`/api/enrollment/${enrollmentId}`, formData)
      .then(response => {
        console.log(response.data);
        alert('Enrollment data updated successfully');
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          const errorMessages = error.response.data.errors 
            ? Object.values(error.response.data.errors).flat().join(', ') 
            : 'There was an error with the submission';
          alert('There was an error updating the enrollment data: ' + errorMessages);
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
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Enrollment</h2>}
    >
      <Head title="Edit Enrollment" />

      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Enrollment Data</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="mb-4">
              <label className="block text-gray-700">Academic Year & Term</label>
              <input
                type="text"
                name="term"
                value={formData.term}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Application Type</label>
              <select
                name="applicationType"
                value={formData.applicationType}
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
                {/* Add more departments as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="block w-full mt-1 border-gray-300 rounded-md"
                disabled={!formData.department} // Disable course selection if no department is selected
              >
                <option value="">- Please select Course -</option>
                {formData.department && departmentCourses[formData.department].map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
          <Link
            href="/dashboard/enrollment"
            className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
          >
            Back to Enrollment List
          </Link>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default EnrollEdit;