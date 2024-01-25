import { useState } from "react";


const DEFAULT_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/** LoginForm: logs in user
 *
 *  Props:
 *  - handleSignUp
 *
 *  State:
 *  - formData
 *
 *  RoutesList -> SignUpForm -> Alert
 */

function LoginForm({ handleSignUp }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const { username, password, firstName, lastName, email } = formData;

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
    handleSignUp(formData);
    setFormData(DEFAULT_FORM_DATA);
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>

      <div className="LoginForm-username">
        <label htmlFor="username">Username: </label>
        <input
          id="LoginForm-input-username"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
          aria-label="Username"
        />
      </div>
      <div className="LoginForm-password">
        <label htmlFor="password">Password: </label>
        <input
          id="LoginForm-input-password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
          aria-label="Password"
        />
      </div>
      <div className="LoginForm-firstName">
        <label htmlFor="firstName">First Name: </label>
        <input
          id="LoginForm-input-firstName"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={firstName}
          aria-label="firstName"
        />
      </div>
      <div className="LoginForm-lastName">
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="LoginForm-input-lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={lastName}
          aria-label="lastName"
        />
      </div>
      <div className="LoginForm-email">
        <label htmlFor="email">Email: </label>
        <input
          id="LoginForm-input-email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
          aria-label="Email"
        />
      </div>

      <button className="LoginForm-login-btn">SUBMIT</button>

    </form>
  )
}


export default LoginForm;