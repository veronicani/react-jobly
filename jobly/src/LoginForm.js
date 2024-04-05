import { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

import Alert from "./Alert";

const DEFAULT_FORM_DATA = {
  username: "",
  password: ""
};

/** LoginForm: Logs in user.
 *
 *  Props:
 *  - login: function to call in parent
 *
 *  State:
 *  - formData
 *  - errs: error messages if problems logging in
 *
 *  RoutesList -> LoginForm -> Alert
 */

function LoginForm({ login }) {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [errs, setErrs] = useState([]);

  const { username, password } = formData;

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
   *
   *  On success, redirects to homepage.
   *  On failure, updates the state with the error messages.
   */
  
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await login(formData);
      navigate("/");
    } catch (err) {
      setErrs(err);
    }
  }

  return (
    <div className="LoginForm-wrapper row">
      <div className="LoginForm-container col-xs-12 col-sm-8 col-md-6 mx-auto my-auto">
        <div className="card p-2">
          <h3>Login</h3>
          <div className="card-body">
            <form className="LoginForm" onSubmit={handleSubmit}>
              <div className="LoginForm-username mb-3">
                <label 
                  className="form-label float-start"
                  htmlFor="LoginForm-input-username"
                >
                  Username
                </label>
                <input
                  className="form-control"
                  id="LoginForm-input-username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={username}
                  aria-label="Username"
                  required
                />
              </div>
              <div className="LoginForm-password mb-3">
                <label 
                  className="form-label float-start"
                  htmlFor="LoginForm-input-password"
                >
                  Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="LoginForm-input-password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={password}
                  aria-label="Password"
                  required
                />
              </div>

              {errs.map((err, i) => <Alert key={i} message={err} />)}

              <div className="d-grid">
                <button className="LoginForm-login-btn btn btn-primary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginForm;