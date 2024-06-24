import React from 'react';

const Sidebar = () => {
  return (
    <div className="span3" id="sidebar">
      <center>
        <ul className="nav nav-list bs-docs-sidenav nav-collapse collapse">
          <li><a href="dashboard.php"><i className="icon-chevron-right icon-large"></i><i className="icon-home icon-large"></i> Statistics</a></li>
          <li className="active"><a href="students.php"><i className="icon-chevron-right icon-large"></i><i className="icon-group icon-large"></i> Students</a></li>
          <li><a href="add_class.php"><i className="icon-chevron-right icon-large"></i><i className="icon-th-list icon-large"></i> Class</a></li>
          <li><a href="fees.php"><i className="icon-chevron-right icon-large"></i><i className="icon-money icon-large"></i> Fees Payment</a></li>
          <li><a href="payment_report.php"><i className="icon-chevron-right icon-large"></i><i className="icon-table icon-large"></i> Payment Report</a></li>
          <li><a href="users.php"><i className="icon-chevron-right icon-large"></i><i className="icon-group icon-large"></i> Users</a></li>
          <li><a href="student_report.php"><i className="icon-chevron-right icon-large"></i><i className="icon-file icon-large"></i> Reports</a></li>
        </ul>
      </center>
    </div>
  );
};

export default Sidebar;
