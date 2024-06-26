import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const AdmissionStatus = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [selectedEnrollmentId, setSelectedEnrollmentId] = useState(null);
    const [totalTuition, setTotalTuition] = useState(0);

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

    const navigateToSeeTuition = () => {
        window.location.href = '/generate-pdf';
    };

    const navigateToReview = () => {
        window.location.href = '/dashboard';
      };

    const getStatusClass = (status) => {
        switch (status) {
            case 'For Approval':
                return 'text-orange-500';
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

    const saveTuitionFee = () => {
        if (window.confirm("Proceed with enrollment?")) {
            axios.post('/tuition-fees', { tuition_fee: totalTuition })
                .then(response => {
                    console.log(response.data.message);
                })
                .catch(error => {
                    console.error(error);
                });
            window.location.href = '/status';
        }
    };

    const cancelEnrollment = () => {
        if (window.confirm("Are you sure you want to cancel this enrollment? This action cannot be undone.")) {
            axios.delete(`/enrollments/${selectedEnrollmentId}`)
                .then(response => {
                    console.log(response.data.message);
                    setSelectedEnrollmentId(null);
                    setSubjects([]);
                    setTotalTuition(0);
                })
                .catch(error => {
                    console.error(error);
                });
            window.location.href = '/dashboard';
        }
    };

    if (loading) {
        return <div className="text-center text-lg mt-6">Loading enrollments...</div>;
    }

    if (error) {
        return <div className="text-center text-lg text-red-500 mt-6">{error}</div>;
    }

    return (
        <AuthenticatedLayout>
            <div 
                className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D)' }}
            >
                <div className="w-full max-w-7xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg font-sans">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Application Status</h1>
    
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
                                        
                                        <td className={`py-2 px-4 border-b ${getStatusClass(enrollment.status)}`}>{enrollment.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between">
                        {/* Your Back button */}
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 ml-auto"
                            onClick={navigateToReview} // Call navigateToReview function on click
                        >
                            Go to Dashboard
                        </button>
                        </div>
                </div>  
            </div>
        </AuthenticatedLayout>
    );
};

export default AdmissionStatus;
