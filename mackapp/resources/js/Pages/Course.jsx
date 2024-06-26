import React from 'react';
import './Course.css';  // Assuming you have CSS styling in Course.css

const courses = {
  firstYear: [
    { name: 'Introduction to Information Technology IT101', fee: 545.00 },
    { name: 'Fundamentals of Programming IT102', fee: 620.00 },
    { name: 'Digital Logic Design IT103', fee: 550.00 },
    { name: 'Discrete Mathematics IT104', fee: 525.00 },
    { name: 'Computer Networks IT105', fee: 585.00 },
    { name: 'Database Management Systems IT106', fee: 600.00 },
    { name: 'Web Technologies IT107', fee: 575.00 },
    { name: 'Introduction to Data Science IT108', fee: 653.00 },
  ],
  secondYear: [
    { name: 'Object-Oriented Programming IT201', fee: 554.00 },
    { name: 'Data Structures and Algorithms IT202', fee: 755.00 },
    { name: 'Software Engineering IT203', fee: 722.00 },
    { name: 'Operating Systems IT204', fee: 747.00 },
    { name: 'Computer Architecture IT205', fee: 717.00 },
    { name: 'Human-Computer Interaction IT206', fee: 769.00 },
  ],
  thirdYear: [
    { name: 'Machine Learning IT301', fee: 801.00 },
    { name: 'Artificial Intelligence IT302', fee: 821.00 },
    { name: 'Cyber Security IT303', fee: 991.00 },
    { name: 'Cloud Computing IT304', fee: 831.00 },
    { name: 'Internet of Things IT305', fee: 810.00 },
    { name: 'Data Analytics IT306', fee: 851.00 },
    { name: 'Big Data Technologies IT307', fee: 860.00 },
  ],
  fourthYear: [
    { name: 'Advanced Database Systems IT401', fee: 992.00 },
    { name: 'Blockchain Technology IT402', fee: 930.00 },
    { name: 'Quantum Computing IT403', fee: 944.00 },
    { name: 'Natural Language Processing IT404', fee: 950.00 },
    { name: 'Computer Vision IT405', fee: 930.00 },
    { name: 'Ethical Hacking IT406', fee: 960.00 },
    { name: 'Capstone Project IT407', fee: 1000.00 },
  ],
};

const Course = () => {
  return (
    <div className="course-prospectus">
      <h1>Information Technology Course Prospectus</h1>
      {Object.keys(courses).map((year, idx) => (
        <div key={idx} className="course-year">
          <h2>{year.replace(/([a-z])([A-Z])/g, '$1 $2')} Courses</h2>
          <table>
            <thead>
              <tr>
                <th>Subject Name</th>
                <th>Tuition Fee</th>
              </tr>
            </thead>
            <tbody>
              {courses[year].map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>${course.fee.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Course;
