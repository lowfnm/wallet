import { NavLink } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const handleRegister = (e) => {
    e.preventDefault();
};

const registrationSchema = Yup.object({
    email: Yup.string()
        .email("Enter correct e-mail")
        .required("This field is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .max(12, "The password must be a maximum of 12 characters")
        .required("This field is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password mismatch")
        .required("Password confirmation required"),
    username: Yup.string()
        .typeError()
        .min(1, "Name must be at least 1 character")
        .max(12, "The name must be a maximum of 12 characters")
        .required("This field is required"),
});

const RegistrationForm = () => {
    return (
        <>
            <div>
                <h1> Registration Form </h1>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        name: "",
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={handleRegister}
                >
                    {({ values, handleChange, handleBlur, isSubmitting }) => (
                        <Form>
                            <Field
                                name="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="E-mail"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />

                            <Field
                                name="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />

                            <Field
                                name="confirmPassword"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Confirm password"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />

                            <Field
                                name="name"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder="Name"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />

                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>

                <button>
                    <NavLink to="/login">Log in</NavLink>
                </button>
            </div>
        </>
    );
};

export default RegistrationForm;
