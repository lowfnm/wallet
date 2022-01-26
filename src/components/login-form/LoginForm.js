import { NavLink } from "react-router-dom";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import {
    FormContainer,
    FormButton,
    FormWrapper,
    InputWrapper,
    InputLabel,
} from "./style/loginform";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

const loginSchema = Yup.object().shape({
    email: Yup.string("Enter e-mail")
        .email("Please enter a valid e-mail")
        .required("This field is required"),
    password: Yup.string("Enter password")
        .min(6, "Password must be at least 6 characters long")
        .max(12, "The password must be a maximum of 12 characters")
        .required("This field is required"),
});

const handleLogin = () => {};

const LoginForm = () => {
    return (
        <FormContainer>
            <FormWrapper>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginSchema}
                    onSubmit={handleLogin}
                >
                    {({ values, handleChange, handleBlur, isSubmitting }) => (
                        <Form>
                            <InputWrapper>
                                <InputLabel>
                                    <MailIcon />
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="E-mail"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <InputLabel>
                                    <LockIcon />
                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>

                            <FormButton type="submit" disabled={isSubmitting}>
                                Log in
                            </FormButton>

                            <NavLink to="/register">Registration</NavLink>

                            <NavLink to="/home">DashBoard</NavLink>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
        </FormContainer>
    );
};

export default LoginForm;
