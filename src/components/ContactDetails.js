import React from 'react';
import { Link } from 'react-router-dom';
const ContactDetails = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{email}</p>
          <Link to='/'>
            <a href='#' className='btn btn-primary'>
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
