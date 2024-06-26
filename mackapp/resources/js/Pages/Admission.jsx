import { Head } from '@inertiajs/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Admission = ({ auth }) => {
  const [step, setStep] = useState(1);


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
    status: 'For Approval',
    section: 'TBD',
    enrollmentstatus: 'Not Enrolled',
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
    window.location.href = '/admissionstatus';
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
            : 'Please fill up the form';
          alert('Save error: ' + errorMessages);
        } else if (error.request) {
          console.error('Error request:', error.request);
          alert('No response received from the server');
        } else {
          console.error('Error message:', error.message);
          alert('Error in request setup: ' + error.message);
        }
      });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D)' }}>
      <Head title="Enrollment and Personal Info" />
      
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-md shadow-md font-sans">
      <h2 className="text-3xl font-bold mb-6">Application Process</h2>
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Kindly fill out the following information</h2>
        <h2 className="text-3xl font-bold mb-6"></h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Applying for</h2>
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
                    <option value="Freshman">Freshman</option>
                    <option value="Transfer   ">Transfer</option>
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
            </div>
          )}

          {step === 2 && (
            <div>
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
                    <option value="Widowed">Widowed</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
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
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
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
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700">Religion</label>
                  <input
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                
                <h2 className="text-2xl font-bold mb-6">Upload Requirements : </h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Birth Certificate</label>
                        <input
                        type="text"
                        value="BerthCert.jpeg"
                        disabled
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        style={{ maxWidth: '200px' }} // Adjust maximum width if needed
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">FORM 138</label>
                        <input
                        type="text"
                        value="Form138.jpeg"
                        disabled
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        style={{ maxWidth: '200px' }} // Adjust maximum width if needed
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700">Good Moral Certificate</label>
                        <input
                        type="text"
                        value="Immoral.png"
                        disabled
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
                        style={{ maxWidth: '200px' }} // Adjust maximum width if needed
                        />
                    </div>
                    </div>

            </div>
          )}

          {step === 3 && (
            <div>
            <h2 className="text-2xl font-bold mb-6">Review Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Applying for</h3>
                <p><strong>Academic Year & Term:</strong> {formData.term}</p>
                <p><strong>Application Type:</strong> {formData.application_type}</p>
                <p><strong>Grade / Level:</strong> {formData.year}</p>
                <p><strong>Department:</strong> {formData.department}</p>
                <p><strong>Course:</strong> {formData.course}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <p><strong>First Name:</strong> {formData.first_name}</p>
                <p><strong>Last Name:</strong> {formData.last_name}</p>
                <p><strong>Date of Birth:</strong> {formData.date_of_birth}</p>
                <p><strong>Nationality:</strong> {formData.nationality}</p>
                <p><strong>Civil Status:</strong> {formData.civil_status}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p><strong>House No, Street Address:</strong> {formData.address}</p>
                <p><strong>Province:</strong> {formData.province}</p>
                <p><strong>Region:</strong> {formData.region}</p>
                <p><strong>Barangay:</strong> {formData.barangay}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p><strong>Religion:</strong> {formData.religion}</p>
                <p><strong>Mobile Number:</strong> {formData.mobile_number}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
            </div>
          </div>
          )}

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-sm"
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm ml-auto"
            >
              Next
            </button>
            
            
            )}
            {step === 3 && (
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
