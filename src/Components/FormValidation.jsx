import React, { useState } from 'react';
import _ from 'lodash';

const FormExample = () => {
  const [formData, setFormData] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Form submitted: ', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange} />
      <br />
      <label htmlFor="mobileNumber">MobileNo:</label>
      <input type="value" id="phoneno" name="phoneNo" onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
      <h3>Submitted Data:</h3>
      {_.map(formData, (value, key) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
    </form>
  );
};

export default FormExample;
