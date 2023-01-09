import React, { useEffect, useState } from "react";

import Validation from "../Validation";

export default function SignupForm(submitForm) {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [dataIsCorrect, errors, submitForm]);
  return (
    <div className="contain mb-5">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create An Account</h2>

          <form className="form-wrapper">
            <div className="name">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                name="first name"
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p className="error">{errors.firstname}</p>}
            </div>
            <div className="name">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="last name"
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p className="error">{errors.lastname}</p>}
            </div>
            <div className="email">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Create my account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
