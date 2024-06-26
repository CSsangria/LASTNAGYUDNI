import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import axios from 'axios';

const SeeTuition = () => {
    const { auth } = usePage().props;
    const [tuitionFees, setTuitionFees] = useState([]);
    const [tuitionFee, setTuitionFee] = useState('');
    const [enrollmentId, setEnrollmentId] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);


    const navigateTostaffdashboard = () => {
        window.location.href = '/staffdashboard';
      };  

    useEffect(() => {
        if (auth.id === 2) {
            axios.get('/tuition-fees')
                .then(response => {
                    setTuitionFees(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('There was an error fetching the tuition fees!', error);
                    setLoading(false);
                });
        }
    }, [auth.id]);

  
    if (auth.id !== 2) {
        return (
            <AuthenticatedLayout>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4 text-red-500">Access Denied</h1>
                    <p>You do not have permission to view this page.</p>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Tuition</h1>
                <p className="mb-6">Welcome to the Tuition page.</p>
                <button
                  className=" text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
                  onClick={navigateTostaffdashboard}
                >
                  Back
                </button>
                {message && <p className="text-green-500 mb-4">{message}</p>}
                
                
                {loading ? (
                    <div className="text-center py-6">
                        <p className="text-gray-500">Loading tuition fees...</p>
                    </div>
                ) : tuitionFees.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">ID</th>
                                    <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">User ID</th>
                                    <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Enrollment ID</th>
                                    <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-600">Tuition Fee</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {tuitionFees.map((fee) => (
                                    <tr key={fee.id}>
                                        <td className="py-3 px-4 border-b border-gray-200">{fee.id}</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{fee.user_id}</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{fee.enrollment_id}</td>
                                        <td className="py-3 px-4 border-b border-gray-200">{fee.tuition_fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <p className="text-gray-500">No tuition fees available.</p>
                    </div>
                )}
            </div>
        </AuthenticatedLayout>
    );
};

export default SeeTuition;
