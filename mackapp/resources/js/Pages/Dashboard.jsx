import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFile,faRightToBracket,faCheck,faBuildingColumns, faDollarSign, faChevronDown, faChevronRight, faSitemap, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

const Dashboard = ({ auth }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownState, setDropdownState] = useState({});
  const [enrollments, setEnrollments] = useState([]);
  const [editEnrollment, setEditEnrollment] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchEnrollments = async () => {
    try {
      const response = await axios.get('/api/enrollments');
      setEnrollments(response.data);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const toggleDropdown = (dropdownTitle) => {
    setDropdownState(prevState => ({
      ...prevState,
      [dropdownTitle]: !prevState[dropdownTitle]
    }));
  };

  const navigateToEnrollment = () => {
    window.location.href = '/dashboard/enrollment';
  };

  const navigateToSeeTuition = () => {
    window.location.href = '/dashboard/SeeTuition';
  };

  const navigateToStatus = () => {
    window.location.href = '/status';
  };
  const navigateToReview = () => {
    window.location.href = '/dashboard/enrollment/review';
  };

  const handleEditClick = (enrollment) => {
    setEditEnrollment(enrollment);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditEnrollment({
      ...editEnrollment,
      [name]: value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/api/enrollment-forms/${editEnrollment.id}`, editEnrollment);
      alert('Enrollment data updated successfully');
      fetchEnrollments();
      setEditEnrollment(null);
    } catch (error) {
      console.error('Error updating enrollment data:', error);
      alert('There was an error updating the enrollment data');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/enrollment-forms/${id}`);
      alert('Enrollment data deleted successfully');
      fetchEnrollments();
    } catch (error) {
      console.error('Error deleting enrollment data:', error);
      alert('There was an error deleting the enrollment data');
    }
  };

  const items = [
    
    { icon: faRightToBracket, title: 'Enrollment', description: 'Manage student enrollments and registrations effortlessly.', onClick: navigateToEnrollment },
    { icon: faChartLine, title: 'Status', description: 'Efficiently manage your educational programs and curriculum.', onClick: navigateToStatus  },
    { icon: faCheck, title: 'Review Enrollment', description: 'Efficiently manage your educational programs and curriculum.', onClick: navigateToReview  },

    

  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
    >
      <Head title="Dashboard" />

      <div className="flex">
        <div className={`w-64 bg-green-700 min-h-screen text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="sticky top-0 p-6">
            <h2 className="text-2xl font-semibold mb-4">Navigation</h2>
            <nav>
              <ul>
                <button
                  className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200 hidden"
                  onClick={navigateToEnrollment}
                >
                  Enrollment Process
                </button>
                <button
                  className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200 hidden"
                  onClick={navigateToSeeTuition}
                >
                  Enrollment Process2
                </button>
                <button
                  className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200 hidden"
                  onClick={navigateToReview}
                >
                  Process2
                </button>
                <button
                  className="mt-2 ml-8 text-sm text-gray-800 bg-white py-1 px-3 rounded hover:bg-gray-200 hidden"
                  onClick={navigateToStatus}
                >
                  Process
                </button>
                
                
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    <button
                      className={`flex items-center text-lg p-2 rounded hover:bg-green-700 w-full text-left ${activeItem === item.title ? 'bg-green-900' : ''}`}
                      onClick={() => {
                        setActiveItem(item.title);
                        if (item.isDropdown) {
                          toggleDropdown(item.title);
                        } else if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.title}
                      {item.isDropdown && (
                        <span className="ml-auto flex items-center justify-center w-6 h-6 bg-white text-gray-800 rounded-full">
                          <FontAwesomeIcon icon={item.isOpen ? faChevronDown : faChevronRight} />
                        </span>
                      )}
                    </button>
                    {item.isDropdown && item.isOpen && (
                      <ul className="ml-4 mt-2 bg-green-800 rounded-lg shadow-lg">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="mb-1">
                            <Link
                              href={subItem.link}
                              className="text-gray-300 text-sm hover:text-white block py-2 px-4"
                              onClick={() => setActiveItem(subItem.title)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex-1 md:ml-64 p-6">
          <button
            className="block md:hidden text-gray-800 hover:text-gray-600 focus:outline-none mb-4"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
          </button>

          <div className="flex justify-between mb-4">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome to the Dashboard</h2>
            <div className="text-sm text-gray-600">Current Session: 2023-2024</div>
          </div>

          

          {editEnrollment && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Edit Enrollment Form</h3>
              <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Academic Year & Term</label>
                  <input
                    type="text"
                    name="term"
                    value={editEnrollment.term}
                    onChange={handleUpdateChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Application Type</label>
                  <input
                    type="text"
                    name="applicationType"
                    value={editEnrollment.applicationType}
                    onChange={handleUpdateChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">First Choice Academic Program</label>
                  <input
                    type="text"
                    name="course"
                    value={editEnrollment.course}
                    onChange={handleUpdateChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={editEnrollment.department}
                    onChange={handleUpdateChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={editEnrollment.year}
                    onChange={handleUpdateChange}
                    className="block w-full mt-1 border-gray-300 rounded-md"
                  />
                </div>
                
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Update</button>
                <button
                  type="button"
                  className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-md"
                  onClick={() => setEditEnrollment(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Dashboard;
