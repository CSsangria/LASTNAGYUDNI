import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const Review = () => {
    const [enrollments, setEnrollments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subjects, setSubjects] = useState([]);
    const [selectedEnrollmentId, setSelectedEnrollmentId] = useState(null);
    const [totalTuition, setTotalTuition] = useState(0);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get('/enrollments')
            .then(response => {
                const enrollmentsData = response.data;
                setEnrollments(enrollmentsData);
                setLoading(false);
                const firstEnrollment = enrollmentsData[0];
                if (firstEnrollment && firstEnrollment.enrollmentstatus !== 'Not Enrolled') {
                    fetchSubjects(firstEnrollment.id); // Automatically fetch subjects for the first enrollment if not "Not Enrolled"
                }
                const paidEnrollment = enrollmentsData.find(enrollment => enrollment.enrollmentstatus === 'Paid');
                if (paidEnrollment) {
                    setMessage('You are Now enrolled');
                    setShowModal(true);
                }
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
                    window.location.href = '/status'; // Redirect after saving
                })
                .catch(error => {
                    console.error(error);
                });
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
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-xl font-bold mb-4">Notification</h2>
                            <p className="text-lg">{message}</p>
                            <button
                                type="button"
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-full max-w-7xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg font-sans">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Enrollment Review</h1>
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            Back
                        </button>
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
                                        <td className={`py-2 px-4 border-b ${getStatusClass(enrollment.status)}`}>{enrollment.enrollmentstatus}</td>
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
        </AuthenticatedLayout>
    );
};

export default Review;
