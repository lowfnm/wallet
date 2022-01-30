import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dropdown from "./dropdown/Dropdown";
import {
    ModalWrap,
    ModalTitle,
    Background,
    ModalClose,
    Flex,
    InputWrap,
    ModalButton,
    Switcher,
    SwitcherWrap,
    SwitcherLabel,
    IconCalendarWrap,
} from "./style/modalAddTransaction";
import { ModalCloseIcon } from "./icon/ModalCloseIcon";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "./icon/CalendarIcon";

const ModalAddTransaction = ({ showModal, setShowModal }) => {
    const [checked, setChecked] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    const switchHandler = () => {
        setChecked(!checked);
    };

    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? "translateY(0%)" : "translateY(-100%)",
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const modalSchema = Yup.object({
        price: Yup.string()
            .typeError()
            .min(1, "Name must be at least 1 character")
            .max(12, "The price must be a maximum of 12 characters")
            .required("This field is required"),
        comments: Yup.string()
            .min(2, "Comment must be at least 2 characters long")
            .max(30, "The comment must be a maximum of 30 characters")
            .required("This field is required"),
    });
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrap showModal={showModal}>
                            <Formik
                                initialValues={{
                                    price: "",
                                    comments: "",
                                }}
                                validationSchema={modalSchema}
                                onSubmit={modalSchema}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleBlur,
                                    isSubmitting,
                                }) => (
                                    <Form>
                                        <ModalTitle>Add transaction</ModalTitle>
                                        <SwitcherWrap>
                                            <SwitcherLabel
                                                style={{
                                                    color: checked
                                                        ? "#FF6596"
                                                        : "#e0e0e0",
                                                }}
                                            >
                                                Expenses
                                            </SwitcherLabel>

                                            <SwitcherLabel
                                                style={{
                                                    color: checked
                                                        ? "#e0e0e0"
                                                        : "#24cca7",
                                                }}
                                            >
                                                Income
                                            </SwitcherLabel>

                                            <FormControlLabel
                                                control={
                                                    <Switcher
                                                        checked={checked}
                                                        onChange={switchHandler}
                                                    />
                                                }
                                                label={" "}
                                            />
                                        </SwitcherWrap>
                                        <div>{checked ? <Dropdown /> : ""}</div>
                                        <Flex>
                                            <InputWrap>
                                                <Field
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                    name="price"
                                                    type="number"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.price}
                                                    placeholder="O.00"
                                                />
                                                <ErrorMessage
                                                    name="price"
                                                    component="span"
                                                    style={{ color: "#FF6596" }}
                                                />
                                            </InputWrap>
                                            <InputWrap>
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={(date) =>
                                                        setStartDate(date)
                                                    }
                                                    dateFormat="dd.MM.yyyy"
                                                />
                                                <IconCalendarWrap>
                                                    <CalendarIcon />
                                                </IconCalendarWrap>
                                            </InputWrap>
                                        </Flex>

                                        <InputWrap>
                                            <Field
                                                style={{
                                                    maxWidth: 410,
                                                }}
                                                name="comments"
                                                type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.comments}
                                                placeholder="Comments"
                                            />
                                            <ErrorMessage
                                                name="comments"
                                                component="span"
                                                style={{ color: "#FF6596" }}
                                            />
                                        </InputWrap>
                                        <ModalButton>ADD</ModalButton>
                                        <ModalButton
                                            cancel
                                            onClick={() =>
                                                setShowModal((prev) => !prev)
                                            }
                                        >
                                            CANCEL
                                        </ModalButton>
                                    </Form>
                                )}
                            </Formik>
                            <ModalClose
                                aria-label="Close modal"
                                onClick={() => setShowModal((prev) => !prev)}
                            >
                                <ModalCloseIcon />
                            </ModalClose>
                        </ModalWrap>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};

export default ModalAddTransaction;
