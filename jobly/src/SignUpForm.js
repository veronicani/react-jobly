import { useState } from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";
import Alert from "./components/common/Alert/Alert";
import Button from "./components/common/Button/Button";

const DEFAULT_FORM_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/** SignUpForm: Registers user.
 *
 *  Props:
 *  - signUp: function to call in parent
 *  - userData
 *
 *  State:
 *  - formData
 *  - errs: error messages if problems signing up
 *
 *  RoutesList -> SignUpForm -> Alert
 */

function SignUpForm({ signUp, userData = DEFAULT_FORM_DATA }) {
  const [formData, setFormData] = useState(userData);
  const [errs, setErrs] = useState([]);

  const { username, password, firstName, lastName, email } = formData;

  /** Updates form values with user input */
  function handleChange(evt) {
    const field = evt.target;
    setFormData(fData => ({
      ...fData,
      [field.name]: field.value
    }));
  }

  const navigate = useNavigate();

  /** Calls parent function.
   * On success, redirects to homepage.
   * On failure, updates the state with the error messages.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
      navigate("/");
    } catch (err) {
      setErrs(err);
    }
  }

  return (
    <div className="SignUpForm-wrapper row">
      <form 
        className="SignUpForm col-xs-12 col-sm-8 col-md-6 mx-auto my-auto"
        onSubmit={handleSubmit}>
        <div className="card p-2">
          <h3>Signup</h3> 
          <div className="card-body">
            <div className="SignUpForm-username mb-3">
              <label
                className="form-label float-start"
                htmlFor="SignUpForm-input-username"
              >
                Username
              </label>
              <input
                className="form-control"
                id="SignUpForm-input-username"
                name="username"
                placeholder="Choose a username"
                onChange={handleChange}
                value={username}
                aria-label="Username"
                required
              />
            </div>
            <div className="SignUpForm-password mb-3">
              <label 
                className="form-label float-start"
                htmlFor="SignUpForm-input-password"
              >
                Password 
              </label>
              <input
                className="form-control"
                type="password"
                id="SignUpForm-input-password"
                name="password"
                placeholder="Must be at least 5 characters"
                onChange={handleChange}
                value={password}
                aria-label="Password"
                required
              />
            </div>
            <div className="SignUpForm-firstName mb-3">
              <label 
                className="form-label float-start"
                htmlFor="SignUpForm-input-firstName"
              >
                First Name
              </label>
              <input
                className="form-control"
                id="SignUpForm-input-firstName"
                name="firstName"
                placeholder="Phoebe"
                onChange={handleChange}
                value={firstName}
                aria-label="firstName"
                required
              />
            </div>
            <div className="SignUpForm-lastName mb-3">
              <label 
                className="form-label float-start"
                htmlFor="SignUpForm-input-lastName"
              >
                Last Name
              </label>
              <input
                className="form-control"
                id="SignUpForm-input-lastName"
                name="lastName"
                placeholder="Smith"
                onChange={handleChange}
                value={lastName}
                aria-label="lastName"
                required
              />
            </div>
            <div className="SignUpForm-email mb-3">
              <label 
                className="form-label float-start"
                htmlFor="SignUpForm-input-email"
              >
                Email
              </label>
              <input
                className="form-control"
                id="SignUpForm-input-email"
                name="email"
                placeholder="example@email.com"
                onChange={handleChange}
                value={email}
                aria-label="Email"
                required
              />
            </div>
            
            {errs.map((err, i) => <Alert key={i} message={err} />)}
            
            <div className="d-grid">
              <Button classes="SignUpForm-signup-btn" label="Submit" />
            </div>
            <div className="mt-1">
              <small>💤 Server may take up to a minute to wake up!</small>
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}


export default SignUpForm;