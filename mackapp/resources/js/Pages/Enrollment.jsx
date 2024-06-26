import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Enrollment = ({ auth }) => {
  const [enrollment, setEnrollment] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [step, setStep] = useState(1);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [selectedEnrollmentId, setSelectedEnrollmentId] = useState(null);
  const [totalTuition, setTotalTuition] = useState(0);



  useEffect(() => {
    axios.get('/user-enrollment')
      .then(response => {
        if (response.data.status === 'Accepted' && response.data.enrollmentstatus === 'Not Enrolled') {
          setEnrollment(response.data.enrollment);
        } else {
          setStatus(response.data.status);
          setMessage(response.data.message);
        }
      })
      .catch(error => {
        setMessage(error.response ? error.response.data.message : 'Error fetching enrollment data');
      });
  }, []);
  

  useEffect(() => {
    axios.get('/enrollments')
        .then(response => {
            setEnrollments(response.data);
            setLoading(false);
        })
        .catch(error => {
            setError('There was an error fetching the enrollments.');
            setLoading(false);
        });
}, []);


const fetchSubjects = (enrollmentId) => {
  axios.get(`/enrollments/${enrollmentId}/subjects`)
      .then(response => {
          const subjectsData = response.data.subjects;
          setSubjects(subjectsData);
          setSelectedEnrollmentId(enrollmentId);
          const total = subjectsData.reduce((sum, subject) => sum + (parseFloat(subject.tuition_fee) || 0), 0);
          setTotalTuition(total);
      })
      .catch(error => {
          console.error(error);
      });
};

const getStatusClass = (status) => {
  switch (status) {
      case 'Pending':
          return 'text-orange-500';
      case 'Not Saved':
          return 'text-blue-500';
      case 'Accepted':
          return 'text-green-500';
      case 'Rejected':
          return 'text-red-500';
      default:
          return '';
  }
};

const getSectionClass = (section) => {
  switch (section) {
      case 'TBD':
          return 'text-orange-300';
      default:
          return '';
  }
};

const saveEnrollment = () => {
  if (window.confirm("Proceed with enrollment?")) {
      axios.post(`/enrollments/${selectedEnrollmentId}/save`, { total_tuition: totalTuition })
          .then(response => {
              console.log(response.data.message);
              window.location.href = '/dashboard/enrollment/review'; // Redirect after saving
          })
          .catch(error => {
              console.error(error);
          });
  }
};

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 1:
        return (
          <div>
            <div>
              <label className="font-semibold">Term:</label>
              <input 
                type="text" 
                value={enrollment.term} 
                readOnly 
                className="w-full border-gray-300 rounded-md shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">Application Type:</label>
              <input 
                type="text" 
                value={enrollment.application_type} 
                readOnly 
                className="w-full border-gray-300 rounded-md shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">Year:</label>
              <input 
                type="text" 
                value={enrollment.year} 
                readOnly 
                className="w-full border-gray-300 rounded-md shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">Department:</label>
              <input 
                type="text" 
                value={enrollment.department} 
                readOnly 
                className="w-full border-gray-300 rounded-md shadow-sm mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">Course:</label>
              <input 
                type="text" 
                value={enrollment.course} 
                readOnly 
                className="w-full border-gray-300 rounded-md shadow-sm mt-1"
              />
            </div>
          </div>
        );
      case 2:
        fetchSubjects(enrollment.id)
        return (
          <div>
            <div className="w-full max-w-7xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg font-sans">
                    <div className="flex justify-between items-center mb-6">
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-3 px-4 border-b">First Name</th>
                                    <th className="py-3 px-4 border-b">Last Name</th>
                                    <th className="py-3 px-4 border-b">Email</th>
                                    <th className="py-3 px-4 border-b">Department</th>
                                    <th className="py-3 px-4 border-b">Course</th>
                                    <th className="py-3 px-4 border-b">Term</th>
                                    <th className="py-3 px-4 border-b">Year</th>
                                    <th className="py-3 px-4 border-b">Status</th>
                                    <th className="py-3 px-4 border-b">Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enrollments.map((enrollment) => (
                                    <tr key={enrollment.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b">{enrollment.first_name}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.last_name}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.email}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.department}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.course}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.term}</td>
                                        <td className="py-2 px-4 border-b">{enrollment.year}</td>
                                        <td className={`py-2 px-4 border-b ${getStatusClass(enrollment.enrollmentstatus)}`}>{enrollment.enrollmentstatus}</td>
                                        <td className={`py-2 px-4 border-b ${getSectionClass(enrollment.section)}`}>{enrollment.section}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {selectedEnrollmentId && (
                            <div className="mt-8">
                                <h2 className="text-xl font-bold mb-4">Subjects :</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {subjects.map(subject => (
                                        <div key={subject.subject_name} className="bg-white p-4 rounded-lg shadow">
                                            <h3 className="font-semibold text-lg mb-2">{subject.subject_name}</h3>
                                            <p>Tuition Fee: ${parseFloat(subject.tuition_fee).toFixed(2)}</p>
                                            <p>Professor: {subject.professor}</p>
                                            <p>Room: {subject.room}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 text-lg font-bold">
                                    Total Tuition Fee: ${totalTuition.toFixed(2)}
                                </div>

                            </div>
                        )}
                    </div>
                </div>
        
          </div>
        );        
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" 
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D)' }}
    >
      <AuthenticatedLayout
        user={auth.user}
        header={<h2 className=" font-semibold text-xl text-gray-800 leading-tight">Enrollment Page </h2>}
      >
        <Head title="Enrollment" />

        <div className=" mx-auto p-6 bg-white rounded-md shadow-md font-sans">

          <h1 className="text-2xl font-bold mb-6">User Details:  </h1>
          {message && <p className="text-red-500 mb-4">{message}</p>}
          {enrollment ? (
            <div className="space-y-4">
              {renderStepContent(step)}
              <div className="flex justify-between mt-4">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="px-4 py-2 bg-gray-300 text-black rounded-md"
                  >
                    Back
                  </button>
                )}
                {step < 2 && (
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Next
                  </button>
                )}
                {step == 2 && (
                  <button
                  onClick={saveEnrollment}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                  Enroll
              </button>
                )}
              </div>
            </div>
          ) : (
            !message && <p className="text-gray-500">Loading enrollment data...</p>
          )}
        </div>
      </AuthenticatedLayout>
    </div>
  );
};

export default Enrollment;
