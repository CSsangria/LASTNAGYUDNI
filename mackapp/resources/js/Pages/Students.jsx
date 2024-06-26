import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../src/styles/style.css';
import '../../src/styles/styles.css';

import Header from '@/Components/Header';
import Session from '@/Components/Session';
import Navbar from '@/Components/Navbar';
import SidebarStudents from '@/Components/SidebarStudents';
import Footer from '@/Components/Footer';
import Script from '@/Components/Script';
import StudentsTable from '@/Components/StudentsTable';

const Students = ({ auth }) => {
    const [students, setStudents] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('/api/students')
            .then(response => {
                setStudents(response.data.students);
                setCount(response.data.count);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <AuthenticatedLayout user={auth.user} header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Students</h2>}>
            <Head title="Students" />
            <Header />
            <Session />
            <Navbar />
            <center><img src="/images/casap.png" alt="CASAP" /></center>
            <div className="container-fluid">
                <div className="row-fluid">
                    <SidebarStudents />
                    <div className="span9">
                        <div className="row-fluid">
                            <div id="block_bg" className="block">
                                <div className="navbar navbar-inner block-header">
                                    <div className="muted pull-left">
                                        <i className="icon-reorder icon-large"></i> Students List
                                    </div>
                                    <div className="muted pull-right">
                                        Number of Students: <span className="badge badge-info">{count}</span>
                                    </div>
                                </div>
                                <div className="block-content collapse in">
                                    <div className="span12" id="studentTableDiv">
                                        <h2 id="noch">Students List</h2>
                                        <StudentsTable students={students} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Script />
        </AuthenticatedLayout>
    );
};

export default Students;
