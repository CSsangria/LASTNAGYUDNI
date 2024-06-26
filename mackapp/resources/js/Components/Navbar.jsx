import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/session');
        if (response.data.user) {
          setUser(response.data.user);
        } else {
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        window.location.href = '/login';
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="navbar navbar-fixed-top navbar-inverse">
      <div className="navbar-inner">
        <div className="container-fluid">
          <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </a>
          <span className="brand">CASAP | ENROLLMENT SYSTEM</span>
          <div id="coll" className="nav-collapse collapse">
            <ul className="nav pull-right">
              {user && (
                <li className="dropdown">
                  <a
                    href="#"
                    id="name123"
                    role="button"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="icon-user icon-large"></i>
                    {`${user.firstname} ${user.lastname}`} <i className="caret"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a tabIndex="-1" href="/change_password" className="jkl">
                        Change Password
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a className="jkl" tabIndex="-1" href="/logout">
                        <i className="icon-signout icon-large"></i>&nbsp;Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          {/* /.nav-collapse */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
