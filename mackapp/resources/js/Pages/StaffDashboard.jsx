import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

const StaffDashboard = () => {
    const { enrollments2, errors, message, auth } = usePage().props;
    const [editId, setEditId] = useState(null);
    const [filters, setFilters] = useState({
        id: '',
        application_type: '',
        year: '',
        department: '',
        course: '',
        first_name: '',
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
        email: '',	
        status: '',	
        section: '',
        enrollmentstatus: ''	
    });
    const { data, setData, put, processing } = useForm({
        term: '',
        application_type: '',
        course: '',
        department: '',
        year: '',
        first_name: '',
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
        email: '',	
        status: '',	
        section: '',
        enrollmentstatus: ''	
    });

    const departmentCourses = {
        CITC: ['Computer Science', 'Information Technology'],
        CEA: ['Engineering', 'Architecture'],
        CON: ['Nursing'],
      };

      const departmentSection = {
        'Computer Science': ['TBD','CS1C1', 'CS1C2'],
        'Information Technology': ['TBD','IT1R1', 'IT1R2'],
        Engineering: ['TBD','CE1A1'],
        Architecture: ['TBD','AR1A1', 'AR1A2'],
        Nursing: ['TBD','N1N1', 'N1N2'],
      };
      

      const navigateToSeeTuition = () => {
        window.location.href = '/dashboard/SeeTuition';
      };  
      


    const handleEdit = (enrollment) => {
        setEditId(enrollment.id);
        setData({
            term: enrollment.term,
            application_type: enrollment.application_type,
            course: enrollment.course,
            department: enrollment.department,
            year: enrollment.year,
            first_name: enrollment.first_name,
            last_name: enrollment.last_name,
            email: enrollment.email,
            date_of_birth: enrollment.date_of_birth,		
            nationality: enrollment.nationality,		
            civil_status: enrollment.civil_status,	
            gender: enrollment.gender,	
            address: enrollment.address,	
            province: enrollment.province,	
            region: enrollment.region,	
            barangay: enrollment.barangay,	
            religion: enrollment.religion,	
            mobile_number: enrollment.mobile_number,	
            email: enrollment.email,	
            status: enrollment.status,	
            enrollmentstatus: enrollment.enrollmentstatus,	
            section: enrollment.section ,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const getSectionClass = (section) => {
        switch (section) {
            case 'TBD':
                return 'text-orange-300';
            default:
                return '';
        }
    };

    const getEStatusClass = (enrollmentstatus) => {
        switch (enrollmentstatus) {
            case 'Not Enrolled':
                return 'text-orange-500';
            case 'To pay':
                return 'text-blue-500';
            case 'Enrolled':
                return 'text-green-500';
            case 'To Pay':
                return 'text-red-500';
            default:
                return '';
        }
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

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('enrollments2.update', editId));
        setEditId(null); // Hide the edit form after submission
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this enrollment?')) {
            Inertia.delete(route('enrollments2.destroy', id));
            window.location.href = '/staffdashboard';
        }
    };

    const filteredenrollments2 = enrollments2.filter((enrollment) => {
        return (
            enrollment.status !== 'Not Saved' &&
            (!filters.id || enrollment.id.toString().includes(filters.id)) &&
            (!filters.application_type || enrollment.application_type.includes(filters.application_type)) &&
            (!filters.year || enrollment.year.includes(filters.year)) &&
            (!filters.department || enrollment.department.includes(filters.department)) &&
            (!filters.course || enrollment.course.includes(filters.course)) &&
            (!filters.first_name || enrollment.first_name.includes(filters.first_name)) &&
            (!filters.last_name || enrollment.last_name.includes(filters.last_name))
        );
    });

    if (auth.user.id !== 2) {
        return (
            <AuthenticatedLayout>
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
                    <p>You do not have permission to view this page.</p>
                </div>
            </AuthenticatedLayout>
        );
    }

    

    return (
        <AuthenticatedLayout>
                <div 
                    className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D)' }}
                    >
                      <div className="w-full max-w-7xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg font-sans">
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">Staff Dashboard</h1>
                {errors.access && <div className="text-red-600 font-bold mt-4">{errors.access}</div>}
                {message && <div className="text-green-600 font-bold mt-4">{message}</div>}
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            onClick={() => {
                                window.history.back();
                            }}
                        >
                            Back
                        </button>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="filterId" className="block text-sm font-medium text-gray-700">
                                ID
                            </label>
                            <input
                                type="text"
                                name="id"
                                value={filters.id}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterApplicationType" className="block text-sm font-medium text-gray-700">
                                Application Type
                            </label>
                            <select
                                name="application_type"
                                value={filters.application_type}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">All</option>
                                <option value="new">New</option>
                                <option value="transfer">Transfer</option>
                                <option value="returning">Returning</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterYear" className="block text-sm font-medium text-gray-700">
                                Year
                            </label>
                            <select
                                name="year"
                                value={filters.year}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">All</option>
                                <option value="1st year - Baccalaureate">1st year - Baccalaureate</option>
                                <option value="2nd year - Baccalaureate">2nd year - Baccalaureate</option>
                                <option value="3rd year - Baccalaureate">3rd year - Baccalaureate</option>
                                <option value="4th year - Baccalaureate">4th year - Baccalaureate</option>
                                <option value="5th year - Baccalaureate">5th year - Baccalaureate</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterDepartment" className="block text-sm font-medium text-gray-700">
                                Department
                            </label>
                            <select
                                name="department"
                                value={filters.department}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">All</option>
                                <option value="CITC">CITC</option>
                                <option value="CEA">CEA</option>
                                <option value="CON">CON</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterCourse" className="block text-sm font-medium text-gray-700">
                                Course
                            </label>
                            <select
                                name="course"
                                value={filters.course}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="">All</option>
                                {filters.department === "CITC" && (
                                    <>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Information Technology">Information Technology</option>
                                    </>
                                )}
                                {filters.department === "CEA" && (
                                    <>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Architecture">Architecture</option>
                                    </>
                                )}
                                {filters.department === "CON" && (
                                    <option value="Nursing">Nursing</option>
                                )}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterFirstName" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                value={filters.first_name}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="filterLastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                value={filters.last_name}
                                onChange={handleFilterChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Total enrollments: {filteredenrollments2.length}</h2>
                </div>

                <button
                  className=" text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200"
                  onClick={navigateToSeeTuition}
                >
                  View Tuitions Table
                </button>

                {filteredenrollments2.length > 0 ? (
                    <div className="mt-6 overflow-x-auto">
                        <div className="min-w-full align-middle inline-block shadow overflow-hidden rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 bg-gray-200 w-20">ID</th>
                                        <th className="px-4 py-2 bg-gray-200">Term</th>
                                        <th className="px-4 py-2 bg-gray-200">Application Type</th>
                                        <th className="px-4 py-2 bg-gray-200">Course</th>
                                        <th className="px-4 py-2 bg-gray-200">Department</th>
                                        <th className="px-4 py-2 bg-gray-200">Year</th>
                                        <th className="px-4 py-2 bg-gray-200">First Name</th>
                                        <th className="px-4 py-2 bg-gray-200">Last Name</th>
                                        <th className="px-4 py-2 bg-gray-200">Date of Birth</th>
                                        <th className="px-4 py-2 bg-gray-200">Nationality</th>
                                        <th className="px-4 py-2 bg-gray-200">Civil Status</th>
                                        <th className="px-4 py-2 bg-gray-200">Gender</th>
                                        <th className="px-4 py-2 bg-gray-200">Address</th>
                                        <th className="px-4 py-2 bg-gray-200">Province</th>
                                        <th className="px-4 py-2 bg-gray-200">Region</th>
                                        <th className="px-4 py-2 bg-gray-200">Barangay</th>
                                        <th className="px-4 py-2 bg-gray-200">Religion</th>
                                        <th className="px-4 py-2 bg-gray-200">Mobile #</th>
                                        <th className="px-4 py-2 bg-gray-200">Application Status</th>
                                        <th className="px-4 py-2 bg-gray-200">Enrollment Status</th>
                                        <th className="px-4 py-2 bg-gray-200">Birth Cert</th>
                                        <th className="px-4 py-2 bg-gray-200">Form 138</th>
                                        <th className="px-4 py-2 bg-gray-200">Good Moral Cert</th>
                                        <th className="px-4 py-2 bg-gray-200">Section</th>
                                        <th className="px-4 py-2 bg-gray-200">Email</th>
                                        <th className="px-4 py-2 bg-gray-200">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredenrollments2.map((enrollment) => (
                                        <tr key={enrollment.id}>
                                            <td className="border px-4 py-2">{enrollment.id}</td>
                                            <td className="border px-4 py-2">{enrollment.term}</td>
                                            <td className="border px-4 py-2">{enrollment.application_type}</td>
                                            <td className="border px-4 py-2">{enrollment.course}</td>
                                            <td className="border px-4 py-2">{enrollment.department}</td>
                                            <td className="border px-4 py-2">{enrollment.year}</td>
                                            <td className="border px-4 py-2">{enrollment.first_name}</td>
                                            <td className="border px-4 py-2">{enrollment.last_name}</td>
                                            <td className="border px-4 py-2">{enrollment.date_of_birth}</td>
                                            <td className="border px-4 py-2">{enrollment.nationality}</td>
                                            <td className="border px-4 py-2">{enrollment.civil_status}</td>
                                            <td className="border px-4 py-2">{enrollment.gender}</td>
                                            <td className="border px-4 py-2">{enrollment.address}</td>
                                            <td className="border px-4 py-2">{enrollment.province}</td>
                                            <td className="border px-4 py-2">{enrollment.region}</td>
                                            <td className="border px-4 py-2">{enrollment.barangay}</td>
                                            <td className="border px-4 py-2">{enrollment.religion}</td>
                                            <td className="border px-4 py-2">{enrollment.mobile_number}</td>
                                            <td className={`py-2 px-4 border-b ${getStatusClass(enrollment.status)}`}>{enrollment.status}</td>
                                            <td className={`py-2 px-4 border-b ${getEStatusClass(enrollment.enrollmentstatus)}`}>{enrollment.enrollmentstatus}</td>
                                            <td className="border px-4 py-2">{enrollment.regionn}</td>
                                            <td className="border px-4 py-2">{enrollment.regionn}</td>
                                            <td className="border px-4 py-2">{enrollment.regionn}</td>
                                            <td className={`py-2 px-4 border-b ${getSectionClass(enrollment.section)}`}>{enrollment.section}</td>
                                            <td className="border px-4 py-2">{enrollment.email}</td>
                                            <td className="border px-4 py-2">
                                            <button
                                                onClick={() => handleEdit(enrollment)}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                              ‎  Edit   ‎ ‎ ‎ 
                                            </button>
                                            
                                            <button
                                                onClick={() => handleDelete(enrollment.id)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Delete
                                            </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p className="mt-6 text-gray-600">No enrollments found.</p>
                )}
              </div>
             </div>
            </div>

            {editId && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-3/4">
                        <h2 className="text-2xl font-semibold mb-4">Edit Enrollment</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="hidden flex-col">
                                    <label htmlFor="term" className="block text-sm font-medium text-gray-700">
                                        Term
                                    </label>
                                    <input
                                        type="text"
                                        name="term"
                                        value={data.term}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="hidden flex-col">
                                    <label htmlFor="application_type" className="block text-sm font-medium text-gray-700">
                                        Application Type
                                    </label>
                                    <select
                                        name="application_type"
                                        value={data.application_type}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="new">New</option>
                                        <option value="transfer">Transfer</option>
                                        <option value="returning">Returning</option>
                                    </select>
                                </div>
                                <div className="hidden flex-col">
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                        Department
                                    </label>
                                    <select
                                        name="department"
                                        value={data.department}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="CITC">CITC</option>
                                        <option value="CEA">CEA</option>
                                        <option value="CON">CON</option>
                                    </select>
                                </div>
                                <div className="hidden flex-col">
                                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                                        Course
                                    </label>
                                    <select
                                    name="course"
                                    value={data.course}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!data.department} 
                                >
                                    <option value="">- Please select Course -</option>
                                    {data.department && departmentCourses[data.department].map((course, index) => (
                                    <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>
                                </div>
                                <div className="hidden flex-col">
                                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                                        Year
                                    </label>
                                    <select
                                        name="year"
                                        value={data.year}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="1st year - Baccalaureate">1st year - Baccalaureate</option>
                                        <option value="2nd year - Baccalaureate">2nd year - Baccalaureate</option>
                                        <option value="3rd year - Baccalaureate">3rd year - Baccalaureate</option>
                                        <option value="4th year - Baccalaureate">4th year - Baccalaureate</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={data.first_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={data.last_name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>

                                <div className="flex flex-col">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                <input
                                    type="date"
                                    name="date_of_birth"
                                    value={data.date_of_birth}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Nationality
                                    </label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={data.nationality}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Civil status
                                    </label>
                                    <select
                                        name="civil_status"
                                        value={data.civil_status}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Separated">Separated</option>
                                        <option value="Widow">Widow</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Gender
                                    </label>
                                    <select
                                        name="gender"
                                        value={data.gender}
                                        onChange={handleChange}
                                        className="block w-full mt-1 border-gray-300 rounded-md"
                                    >
        
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Abasssss">Abasssss</option>
                                        <option value="Prefer not to say">Prefer not to say</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={data.address}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Province
                                    </label>
                                    <input
                                        type="text"
                                        name="province"
                                        value={data.province}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Barangay
                                    </label>
                                    <input
                                        type="text"
                                        name="barangay"
                                        value={data.barangay}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        religion
                                    </label>
                                    <select
                                        name="religion"
                                        value={data.religion}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="RomanCatholic">Roman Catholic</option>
                                        <option value="Islam">Islam</option>
                                        <option value="INC">INC</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Mobile #
                                    </label>
                                    <input
                                        type="text"
                                        name="mobile_number"
                                        value={data.mobile_number}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        name="status"
                                        value={data.status}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="For Approval">For Approval</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Rejected">Rejected</option>
                                      
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Enrollment Status
                                    </label>
                                    <select
                                        name="enrollmentstatus"
                                        value={data.enrollmentstatus}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="To Pay">To Pay</option>
                                        <option value="Paid">Paid</option>
                                        <option value="Not Enrolled">Not Enrolled</option>
                                      
                                    </select>
                                </div>
                                
                                <div className="flex flex-col">
                                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                        Section
                                    </label>
                                    <select
                                    name="section"
                                    value={data.section}
                                    onChange={handleChange}
                                    className="block w-full mt-1 border-gray-300 rounded-md"
                                    disabled={!data.course} 
                                >
                                    <option value="">- Please select a section -</option>
                                    {data.course && departmentSection[data.course].map((section, index) => (
                                    <option key={index} value={section}>{section}</option>
                                    ))}
                                </select>
                                </div>
                            
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setEditId(null)}
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                            
                        </form>
                        
                    </div>
                    
                </div>
                
                
            )}
        </AuthenticatedLayout>
    );
};

export default StaffDashboard;
