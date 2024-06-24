import React from "react";

const Modal = ({ id, title, message }) => (
  <div id={id} className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">x</button>
      <h3 id="myModalLabel">{title}</h3>
    </div>
    <div className="modal-body">
      <div className="alert alert-danger">
        <p>{message}</p>
      </div>
    </div>
    <div className="modal-footer">
      <button className="btn" data-dismiss="modal" aria-hidden="true"><i className="icon-remove icon-large"></i> Close</button>
      <button className="btn btn-danger"><i className="icon-check icon-large"></i> Yes</button>
    </div>
  </div>
);

const DeleteModals = () => (
  <>
    <Modal id="student_delete" title="Delete Student ?" message="Are you sure you want to delete the student?" />
    <Modal id="class_delete" title="Delete Class ?" message="Are you sure you want to delete the class?" />
    <Modal id="user_delete" title="Delete User ?" message="Are you sure you want to delete the user?" />
  </>
);

export default DeleteModals;
