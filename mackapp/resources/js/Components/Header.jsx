import React from 'react';
import { connection } from './dbcon'; // Importing the named export

const MyComponent = () => {
    console.log(connection); // Example usage of the connection object

    return (
        <html className="no-js">
            <head>
                {/* Bootstrap */}
                <link href="images/logo.png" rel="icon" type="image" />
                <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen" />
                <link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen" />
                <link href="bootstrap/css/font-awesome.css" rel="stylesheet" media="screen" />
                <link href="bootstrap/css/my_style.css" rel="stylesheet" media="screen" />
                <link href="bootstrap/css/print.css" rel="stylesheet" media="print" />
                <link href="vendors/easypiechart/jquery.easy-pie-chart.css" rel="stylesheet" media="screen" />
                <link href="assets/styles.css" rel="stylesheet" media="screen" />
                <script src="vendors/jquery-1.9.1.min.js"></script>
                {/* data table */}
                <link href="assets/DT_bootstrap.css" rel="stylesheet" media="screen" />
                {/* notification */}
                <link href="vendors/jGrowl/jquery.jgrowl.css" rel="stylesheet" media="screen" />
                <script src="vendors/jGrowl/jquery.jgrowl.js"></script>
                <script src="vendor/easy-pie-chart-master/src/easypiechart.js"></script>
                
                <link href="vendors/fullcalendar/fullcalendar.css" rel="stylesheet" media="screen" />
                
                <script src="vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
                
                {/* wysiwug */}
                <link rel="stylesheet" type="text/css" href="vendors/bootstrap-wysihtml5/src/bootstrap-wysihtml5.css" />
                
                <link href="css/bootstrap.css" rel="stylesheet" />
                <link rel="stylesheet" href="default/style.css" />
                <script src="jquery/jquery-1.10.2.js" type="text/javascript"></script>
                <script src="js/bootstrap.js" type="text/javascript"></script>
            </head>
            <body>
                {/* Example usage of connection object */}
                <div>
                    <h1>Database Connection Information</h1>
                    <p>Host: {connection.host}</p>
                    <p>User: {connection.user}</p>
                    <p>Database: {connection.database}</p>
                </div>
            </body>
        </html>
    );
};

export default MyComponent;
