export default function Validation(values) {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "First Name is Required.";
  }
  if (!values.lastname) {
    errors.lastname = "Last Name is Required.";
  }
  if (!values.email) {
    errors.email = "Email is Required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is Invaild.";
  }
  if (!values.password) {
    errors.password = "Password is complusory to Register.";
  } else if (values.pass.length > 4) {
    errors.password = "Password cannot be more than five characters.";
  }
  return errors;
}
