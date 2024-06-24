import React from 'react';
import { useState } from 'react';
import { connection } from './dbcon';
import ModalDelete from './modal_delete';

const StudentsTable = () => {
  const [students, setStudents] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = () => {
    // Handle delete functionality
  };

  return (
    <form action="delete_stud.php" method="post">
      <table className="table" id="example">
        <div className="pull-right">
          <button onClick={handlePrint} className="btn btn-info">
            <i className="icon-print icon-large"></i> Print List
          </button>
          <a href="add_student.php" className="btn btn-inverse">
            <i className="icon-plus-sign icon-large"></i> Add Student
          </a>
        </div>
        <button
          onClick={handleDelete}
          data-toggle="modal"
          href="#student_delete"
          className="btn btn-danger"
          name=""
        >
          <i className="icon-trash icon-large"></i> Delete
        </button>
        <ModalDelete />
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Status</th>
            <th>Transport Route</th>
            <th className="empty"></th>
            <th className="empty"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((row) => (
            <tr key={row.student_id}>
              <td>{`${row.firstname} ${row.middlename} ${row.lastname}`}</td>
              <td>{row.gender}</td>
              <td>{row.class}</td>
              <td>{row.status}</td>
              <td>{row.transport === 'yes' ? row.route : 'no transport'}</td>
              <td className="empty" width="30">
                <input id="optionsCheckbox" className="uniform_on" name="selector[]" type="checkbox" value={row.student_id} />
              </td>
              <td className="empty" width="160">
                <a
                  data-placement="left"
                  title="Click to Edit"
                  id={`edit${row.student_id}`}
                  href={`edit_stud.php?id=${row.student_id}`}
                  className="btn btn-success"
                >
                  <i className="icon-pencil icon-large"></i> Edit
                </a>
                <a
                  data-placement="top"
                  title="Click to View all Details"
                  id={`view${row.student_id}`}
                  href={`view_stud.php?id=${row.student_id}`}
                  className="btn btn-warning"
                >
                  <i className="icon-search icon-large"></i> View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default StudentsTable;
