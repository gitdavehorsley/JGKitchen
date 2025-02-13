// src/RegisterPhoneNumber.js
import React, { useState } from 'react';
import { Auth } from '@aws-amplify/ui-react';

const RegisterPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await Auth.multiFactorSignIn({
        username: phoneNumber,
        password: 'password123', // Replace with a secure method for generating passwords
        mfaType: 'SMS_CODE',
        code: ''
      });
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <Authenticator
        components={{
          SignIn: () => (
            <form onSubmit={handleRegister}>
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button type="submit">Register</button>
            </form>
          )
        }}
      />
    </div>
  );
};

export default RegisterPhoneNumber;
