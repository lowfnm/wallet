import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TextField from "@material-ui/core/TextField";
import DatePicker from "@material-ui/lab/DatePicker";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import FormControlLabel from "@mui/material/FormControlLabel";

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

import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "./icon/CalendarIcon";
import { useDispatch } from "react-redux";
import { transactionPost } from "../../store/transaction/actions/actions";
import {
    ArrowWrap,
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
} from "./dropdown/style/dropdown";
import { ArrayDown } from "./dropdown/icon/ArrayDown";
import { v4 as uuid4 } from "uuid";

const ModalAddTransaction = ({ showModal, setShowModal }) => {
    const options = [
        "Main",
        "Food",
        "Car",
        "Development",
        "Kids",
        "House",
        "Education",
        "Others",
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(value);
    };

    // const ISOdate = new Date().toISOString();

    const [checked, setChecked] = useState(false);
    const [value, setValue] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
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
    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );
    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    const dispatch = useDispatch();
    const onSubmit = ({
        transactionDate,
        type,
        amount,
        categoryId,
        comment,
    }) => {
        dispatch(
            transactionPost({
                transactionDate,
                type,
                categoryId,
                amount,
                comment,
            })
        );
        console.log(transactionDate);
        console.log(type);
        console.log(categoryId);
        console.log(amount);
        console.log(comment);
    };

    // const modalSchema = Yup.object({
    //     amount: Yup.string("0.00")
    //         .typeError()
    //         .min(1, "Name must be at least 1 character")
    //         .max(12, "The price must be a maximum of 12 characters")
    //         .required("This field is required"),
    //     comment: Yup.string()
    //         .max(30, "The comment must be a maximum of 30 characters")
    //         .required("This field is required"),
    //     date: Yup.string().required("This field is required"),
    // });
    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrap showModal={showModal}>
                            <Formik
                                initialValues={{
                                    transactionDate: "",
                                    type: "",
                                    categoryId: "",
                                    comment: "",
                                    amount: "",
                                }}
                                // validationSchema={modalSchema}
                                onSubmit={onSubmit}
                            >
                                {({ values, handleChange, handleBlur }) => (
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
                                                        value={
                                                            checked
                                                                ? (values.type =
                                                                      "EXPENSES")
                                                                : (values.type =
                                                                      "INCOME")
                                                        }
                                                        onChange={switchHandler}
                                                    />
                                                }
                                                label={" "}
                                            />
                                        </SwitcherWrap>
                                        <div>
                                            {checked ? (
                                                <>
                                                    <DropDownContainer>
                                                        <DropDownHeader
                                                            onClick={toggling}
                                                            // value={
                                                            //     (value.categoryId =
                                                            //         selectedOption)
                                                            // }
                                                        >
                                                            {selectedOption ||
                                                                `Select a category`}
                                                            <ArrowWrap>
                                                                <ArrayDown />
                                                            </ArrowWrap>
                                                        </DropDownHeader>
                                                        {isOpen && (
                                                            <DropDownListContainer>
                                                                <DropDownList>
                                                                    {options.map(
                                                                        (
                                                                            option
                                                                        ) => (
                                                                            <ListItem
                                                                                onClick={onOptionClicked(
                                                                                    option
                                                                                )}
                                                                                value={
                                                                                    value.categoryId
                                                                                }
                                                                                key={uuid4()}
                                                                            >
                                                                                {
                                                                                    option
                                                                                }
                                                                            </ListItem>
                                                                        )
                                                                    )}
                                                                </DropDownList>
                                                            </DropDownListContainer>
                                                        )}
                                                    </DropDownContainer>
                                                    {/*<Dropdown*/}
                                                    {/*    value={value.categoryId}*/}
                                                    {/*/>*/}
                                                </>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <Flex>
                                            <InputWrap>
                                                <Field
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                    name="amount"
                                                    type="number"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.amount}
                                                    placeholder="O.00"
                                                />
                                                <ErrorMessage
                                                    name="amount"
                                                    component="span"
                                                    style={{ color: "#FF6596" }}
                                                />
                                            </InputWrap>
                                            <InputWrap>
                                                <LocalizationProvider
                                                    dateAdapter={AdapterDateFns}
                                                >
                                                    <DatePicker
                                                        maxDate={new Date()}
                                                        open={open}
                                                        onOpen={() =>
                                                            setOpen(true)
                                                        }
                                                        onClose={() =>
                                                            setOpen(false)
                                                        }
                                                        label=" "
                                                        value={value}
                                                        onChange={(
                                                            newValue
                                                        ) => {
                                                            setValue(newValue);
                                                        }}
                                                        renderInput={(
                                                            params
                                                        ) => {
                                                            return (
                                                                <>
                                                                    <TextField
                                                                        name="date"
                                                                        onChange={
                                                                            handleChange
                                                                        }
                                                                        onBlur={
                                                                            handleBlur
                                                                        }
                                                                        value={
                                                                            values.date
                                                                        }
                                                                        {...params}
                                                                        InputLabelProps={{
                                                                            shrink: true,
                                                                        }}
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            setOpen(
                                                                                true
                                                                            )
                                                                        }
                                                                    />
                                                                    <ErrorMessage
                                                                        name="date"
                                                                        component="span"
                                                                        style={{
                                                                            color: "#FF6596",
                                                                        }}
                                                                    />
                                                                </>
                                                            );
                                                        }}
                                                    />
                                                </LocalizationProvider>
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
                                                name="comment"
                                                type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.comment}
                                                placeholder="Comments"
                                            />
                                            <ErrorMessage
                                                name="comment"
                                                component="span"
                                                style={{ color: "#FF6596" }}
                                            />
                                        </InputWrap>
                                        <ModalButton type="submit">
                                            ADD
                                        </ModalButton>
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
