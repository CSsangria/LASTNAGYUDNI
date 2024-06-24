import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
    return (
        <div className="courses-container p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Courses Overview</h1>
            <p className="mb-6 text-gray-700">Welcome to the Courses page. Here you can explore various courses offered and their details.</p>
            
            {/* Courses Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                    style={{ backgroundImage: 'url(https://universalcollegeofengineering.edu.in/wp-content/uploads/2019/07/IT-800x480.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative flex items-center">
                        <FontAwesomeIcon icon={faBook} className="text-3xl text-yellow-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-white">Introduction to Programming</h2>
                            <p className="text-white">1500 Students</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4 relative">↑ 10% new enrollments this month</p>
                </div>
                <div 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                    style={{ backgroundImage: 'url(https://www.cmrit.ac.in/wp-content/uploads/2022/07/how-to-get-into-a-good-engineering-college-in-india.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative flex items-center">
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="text-3xl text-pink-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-white">Engineering</h2>
                            <p className="text-white">300 Students</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4 relative">↑ 5% new enrollments this month</p>
                </div>
                <div 
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative"
                    style={{ backgroundImage: 'url(https://via.placeholder.com/1500x500)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative flex items-center">
                        <FontAwesomeIcon icon={faGraduationCap} className="text-3xl text-blue-500 mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Mechanical Engineering</h2>
                            <p className="text-gray-600">1200 Students</p>
                        </div>
                    </div>
                    <p className="text-green-500 mt-4 relative">↑ 8% new enrollments this month</p>
                </div>
            </div>

            {/* View Complete Report Button */}
            <div className="text-center mb-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                    View All Courses
                </button>
            </div>

            {/* Dynamic Tables */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Details</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">#</th>
                                <th className="px-4 py-2 border">Course Name</th>
                                <th className="px-4 py-2 border">Instructor</th>
                                <th className="px-4 py-2 border">Duration</th>
                                <th className="px-4 py-2 border">Enrolled Students</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">1</td>
                                <td className="px-4 py-2 border">Architecture</td>
                                <td className="px-4 py-2 border">Dr. John Doe</td>
                                <td className="px-4 py-2 border">3 months</td>
                                <td className="px-4 py-2 border">1500</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">2</td>
                                <td className="px-4 py-2 border">Introduction to Programming</td>
                                <td className="px-4 py-2 border">Prof. Jane Smith</td>
                                <td className="px-4 py-2 border">6 months</td>
                                <td className="px-4 py-2 border">300</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">3</td>
                                <td className="px-4 py-2 border">Mechanical Engineering</td>
                                <td className="px-4 py-2 border">Dr. Michael Brown</td>
                                <td className="px-4 py-2 border">4 months</td>
                                <td className="px-4 py-2 border">1200</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded shadow hover:bg-gray-400 transition duration-300">Previous</button>
                        <button className="bg-gray-300 text-gray-700 py-1 px-3 rounded shadow hover:bg-gray-400 transition duration-300 ml-2">Next</button>
                    </div>
                    <span className="text-gray-600">Items per page</span>
                </div>
            </div>

            {/* Timeline Example */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Course Updates</h2>
                <ul className="timeline">
                    <li className="timeline-item mb-4">
                        <div className="timeline-time text-gray-600 mb-2">10:00 AM</div>
                        <div className="timeline-content bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">New module added to Introduction to Programming</h3>
                        </div>
                    </li>
                    <li className="timeline-item mb-4">
                        <div className="timeline-time text-gray-600 mb-2">11:00 AM</div>
                        <div className="timeline-content bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">Guest lecture in Business Management</h3>
                        </div>
                    </li>
                    <li className="timeline-item mb-4">
                        <div className="timeline-time text-gray-600 mb-2">12:00 PM</div>
                        <div className="timeline-content bg-gray-100 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800">Mechanical Engineering project submission deadline</h3>
                        </div>
                    </li>
                </ul>
                <div className="text-center mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                        View All Updates
                    </button>
                </div>
            </div>

            {/* Tasks List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Tasks List</h2>
                <ul className="task-list">
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text text-gray-700">Prepare next module for Programming course</span>
                        <span className="task-status text-yellow-500">IN PROGRESS</span>
                    </li>
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text text-gray-700">Grade assignments for Business Management</span>
                        <span className="task-status text-green-500">COMPLETED</span>
                    </li>
                    <li className="task-item flex items-center justify-between mb-2">
                        <span className="task-text text-gray-700">Update course material for Mechanical Engineering</span>
                        <span className="task-status text-red-500">PENDING</span>
                    </li>
                </ul>
                <div className="text-right mt-4">
                    <a href={route('dashboard')} className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 inline-block">
                        Back
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Courses;
