import React, { useEffect, useState } from 'react';
import $ from 'jquery';

function JQueryAjaxDemo() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:4000/getusers',
      success: function (response) {
        setUsers(response);
      },
      error: function (xhr, status, error) {
        console.error('AJAX Request Error:', status, error);
      }
    });
  }, []);

  return (
    <div className='container-fluid'>
      <h2>User Details</h2>
      <ol>
        {users.map(student => (
          <li key={student.id}>{student.Name}</li>
        ))}
      </ol>
    </div>
  );
}

export default JQueryAjaxDemo;
