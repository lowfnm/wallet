import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
    FormContainer,
    FormButton,
    FormWrapper,
    InputWrapper,
    InputLabel,
    LogoWrapper,
} from "./style/registrationform";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PasswordStrengthBar from "./password-strength-bar/PasswordStrengthBar";
import { signUpUser } from "../../store/auth/actions/actions";
import Logo from "../common/logo/Logo";

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
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const onSubmit = ({ username, email, password }) => {
        dispatch(signUpUser({ username, email, password }));
    };

    return (
        <FormContainer>
            <FormWrapper>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        username: "",
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, handleChange, handleBlur, isSubmitting }) => (
                        <Form>
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                            <InputWrapper>
                                <InputLabel>
                                    <MailIcon />
                                    <Field
                                        name="email"
                                        type="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="E-mail"
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="email"
                                    component="span"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <InputLabel>
                                    <LockIcon />
                                    <Field
                                        name="password"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Password"
                                        maxLength="12"
                                        onInput={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="password"
                                    component="span"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>

                            <InputWrapper>
                                <InputLabel>
                                    <LockIcon />
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.confirmPassword}
                                        placeholder="Confirm password"
                                        maxLength="12"
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="span"
                                    style={{ color: "#FF6596" }}
                                />
                                <PasswordStrengthBar password={password} />
                            </InputWrapper>

                            <InputWrapper>
                                <InputLabel>
                                    <AccountBoxIcon />
                                    <Field
                                        name="username"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        placeholder="Name"
                                    />
                                </InputLabel>
                                <ErrorMessage
                                    name="username"
                                    component="span"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>

                            <FormButton type="submit">Registration</FormButton>

                            <NavLink to="/login">Log in</NavLink>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
        </FormContainer>
    );
};

export default RegistrationForm;
