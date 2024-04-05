import userContext from "./userContext";
import { useState, useContext } from "react";
import "./ProfileForm.css";
import Alert from "./Alert";

/** SignUpForm: Registers user.
 *
 *  Props:
 *  - handleSignUp(): function to call in parent
 *
 *  State:
 *  - formData
 *  - errs: errors if problems updating profile.
 *
 *  RoutesList -> SignUpForm -> Alert
 */

function ProfileForm({ updateUserProfile }) {
  const [errs, setErrs] = useState([]);
  const { user } = useContext(userContext);

  const initialFormData = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  const [formData, setFormData] = useState(initialFormData);

  const { username, firstName, lastName, email } = formData;

  /** Updates form values with user input */
  function handleChange(evt) {
    const field = evt.target;
    setFormData(fData => ({
      ...fData,
      [field.name]: field.value
    }));
  }

  /** Calls parent function */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("TODO: implement updateUserProfile!");
  //   try {
  //     await updateUserProfile(formData);
  //   } catch (errs) {
  //     console.log(errs);
  //     setErrs(errs);
    // }
  }

  return (
    <div className="ProfileForm-wrapper row">
      <form
        className="ProfileForm col-xs-12 col-sm-8 col-md-6 mx-auto my-auto"
        onSubmit={handleSubmit}>
        <div className="card p-2">
          <h3>Update Profile</h3>
          <div className="card-body">
            <div className="ProfileForm-username mb-3">
              <label
                className="form-label float-start"
                htmlFor="ProfileForm-input-username">
                  Username
            </label>
              
              <input
                className="form-control"
                id="ProfileForm-input-username"
                name="username"
                value={username}
                aria-label="Username"
                disabled
              />
            </div>
            <div className="ProfileForm-firstName mb-3">
              <label
                className="form-label float-start"
                htmlFor="ProfileForm-input-firstName">
                  First Name
              </label>
              <input
                className="form-control"
                id="ProfileForm-input-firstName"
                name="firstName"
                onChange={handleChange}
                value={firstName}
                aria-label="firstName"
              />
            </div>
            <div className="ProfileForm-lastName mb-3">
              <label
                className="form-label float-start"
                htmlFor="ProfileForm-input-lastName">
                  Last Name
              </label>
              <input
                className="form-control"
                id="ProfileForm-input-lastName"
                name="lastName"
                onChange={handleChange}
                value={lastName}
                aria-label="lastName"
              />
            </div>
            <div className="ProfileForm-email mb-3">
              <label
                className="form-label float-start"
                htmlFor="ProfileForm-input-email">
                  Email
              </label>
              <input
                className="form-control"
                id="ProfileForm-input-email"
                name="email"
                onChange={handleChange}
                value={email}
                aria-label="Email"
              />
            </div>

            {errs && errs.map((err, i) => <Alert key={i} message={err} />)}
            
            <div className="d-grid">
              <button
                className="ProfileForm-save-btn btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>


  );
}


export default ProfileForm;