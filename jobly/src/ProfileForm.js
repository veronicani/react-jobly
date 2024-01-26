import { useState } from "react";

import "./ProfileForm.css";


const DEFAULT_FORM_DATA = {
  username: "GET USERNAME FROM CONTEXT",
  firstName: "GET FIRSTNAME FROM CONTEXT",
  lastName: "GET LASTNAME FROM CONTEXT",
  email: "GET EMAIL FROM CONTEXT"
};

/** SignUpForm: Registers user.
 *
 *  Props:
 *  - handleSignUp(): function to call in parent
 *
 *  State:
 *  - formData
 *
 *  RoutesList -> SignUpForm -> Alert
 */

function ProfileForm({ updateUserProfile }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const { username, firstName, lastName, email } = formData;

  /** Updates form values with user input */
  function handleChange(evt) {
    const field = evt.target;
    setFormData(fData => ({
      ...fData,
      [field.name]: field.value
    }));
  }

  /** Calls parent function and clears form */
  function handleSubmit(evt) {
    evt.preventDefault();
    updateUserProfile(formData);
    setFormData(DEFAULT_FORM_DATA);
  }

  return (
    <div className="ProfileForm-wrapper">
      <form className="ProfileForm" onSubmit={handleSubmit}>

        <div className="ProfileForm-username">
          <label htmlFor="ProfileForm-input-username">Username: </label>
          <input
            id="ProfileForm-input-username"
            name="username"
            value={username}
            aria-label="Username"
            disabled
          />
        </div>
        <div className="ProfileForm-firstName">
          <label htmlFor="ProfileForm-input-firstName">First Name: </label>
          <input
            id="ProfileForm-input-firstName"
            name="firstName"
            onChange={handleChange}
            value={firstName}
            aria-label="firstName"
          />
        </div>
        <div className="ProfileForm-lastName">
          <label htmlFor="ProfileForm-input-lastName">Last Name: </label>
          <input
            id="ProfileForm-input-lastName"
            name="lastName"
            onChange={handleChange}
            value={lastName}
            aria-label="lastName"
          />
        </div>
        <div className="ProfileForm-email">
          <label htmlFor="ProfileForm-input-email">Email: </label>
          <input
            id="ProfileForm-input-email"
            name="email"
            onChange={handleChange}
            value={email}
            aria-label="Email"
          />
        </div>

        <button className="ProfileForm-save-btn">Save Changes</button>

      </form>
    </div>

  );
}


export default ProfileForm;