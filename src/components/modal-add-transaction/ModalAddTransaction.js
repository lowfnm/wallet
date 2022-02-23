import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TextField from "@material-ui/core/TextField";
import DatePicker from "@material-ui/lab/DatePicker";
import { useFormik } from "formik";
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
    CategoryDropWrap,
    ArrowWrap,
    SwitcherLabelWrap,
} from "./style/modalAddTransaction";
import { ModalCloseIcon } from "./icon/ModalCloseIcon";
import { CalendarIcon } from "./icon/CalendarIcon";
import { useDispatch, useSelector } from "react-redux";
import {
    transactionGet,
    transactionPost,
} from "../../store/transaction/actions/actions";
import { ArrayDown } from "./icon/ArrayDown";
import { v4 as uuid4 } from "uuid";
import moment from "moment";
import { transactionSelector } from "../../store/transaction/reducers/reducers";
import { makeStyles } from "@mui/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { currentUser } from "../../store/auth/actions/actions";

const ModalAddTransaction = ({ showModal, setShowModal }) => {
    const [category, setCategory] = useState("");
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const { categoriesArray } = useSelector(transactionSelector);

    const categoriesExpense = categoriesArray.filter((item) => {
        return item.type === "EXPENSE";
    });

    const usePlaceholderStyles = makeStyles((theme) => ({
        placeholder: {
            color: "#BDBDBD",
            fontSize: "18px",
        },
    }));

    const Placeholder = ({ children }) => {
        const classes = usePlaceholderStyles();
        return <div className={classes.placeholder}>{children}</div>;
    };

    const handleChange = (event, categoryId) => {
        setCategory(event.target.value);
        formik.setFieldValue("categoryId", categoryId.props.categoryId);
    };

    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? "translateY(0%)" : "translateY(-100%)",
    });

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

    const modalSchema = Yup.object().shape({
        amount: Yup.number()
            .positive("Amount should be positive")
            .required("Amount can't be empty")
            .required("This field is required"),
        comment: Yup.string()
            .max(30, "The comment must be a maximum of 30 characters")
            .required("This field is required"),
        categoryId: Yup.string().required("Please choose a category"),
    });

    const formik = useFormik({
        initialValues: {
            amount: "",
            comment: "",
            transactionDate: moment(new Date()).format("YYYY-MM-DDTHH:mmZ"),
            type: "INCOME",
            categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
        },
        validationSchema: modalSchema,
        onSubmit: async (values) => {
            if (checked) {
                values.amount = -Math.abs(values.amount);
            }

            try {
                await dispatch(transactionPost({ values }));
                await dispatch(transactionGet());
                await dispatch(currentUser());
            } catch (e) {
                console.log(e);
            }

            setChecked(checked);

            if (checked) {
                setChecked(!checked);
            }
            setCategory("");
            setShowModal(false);
            formik.resetForm();
        },
    });

    const switchHandler = () => {
        setChecked(!checked);
        if (!checked) {
            formik.setFieldValue("categoryId", "");
        }
    };

    const onChangeDate = (value) => {
        value = moment(new Date(value)).format("YYYY-MM-DDTHH:mmZ");
        formik.setFieldValue("transactionDate", value.toString());
    };

    const onCloseModal = () => {
        setShowModal((prev) => !prev);
        formik.resetForm();
        if (checked) {
            setChecked(!checked);
        }
        setCategory("");
    };

    const onCloseHandler = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
            formik.resetForm();
            if (checked) {
                setChecked(!checked);
            }
        }
    };

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={onCloseHandler}>
                    <animated.div style={animation}>
                        <ModalWrap showModal={showModal}>
                            <form onSubmit={formik.handleSubmit}>
                                <ModalTitle>Add transaction</ModalTitle>
                                <SwitcherWrap>
                                    <SwitcherLabelWrap>
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
                                    </SwitcherLabelWrap>
                                    <FormControlLabel
                                        control={
                                            <Switcher
                                                name="categorySwitcher"
                                                checked={checked}
                                                value={
                                                    checked
                                                        ? (formik.values.type =
                                                              "EXPENSE")
                                                        : (formik.values.type =
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
                                        <CategoryDropWrap>
                                            <FormControl
                                                sx={{
                                                    width: "100%",
                                                    margin: "0 auto",
                                                }}
                                            >
                                                <Select
                                                    value={category}
                                                    name="categoryId"
                                                    displayEmpty
                                                    onChange={handleChange}
                                                    renderValue={
                                                        category !== ""
                                                            ? undefined
                                                            : () => (
                                                                  <Placeholder>
                                                                      Select
                                                                      category
                                                                  </Placeholder>
                                                              )
                                                    }
                                                    sx={{
                                                        borderBottom:
                                                            "1px solid #e0e0e0 ",
                                                        fontFamily: "Abel",
                                                        fontSize: 18,
                                                        textAlign: "left",
                                                        "& .MuiSelect-select": {
                                                            padding:
                                                                "1rem 2rem",
                                                        },
                                                        ".MuiSvgIcon-root": {
                                                            display: "none",
                                                        },
                                                        "& .MuiOutlinedInput-notchedOutline":
                                                            {
                                                                border: 0,
                                                            },
                                                    }}
                                                    MenuProps={{
                                                        sx: {
                                                            "& .MuiPaper-root":
                                                                {
                                                                    marginTop: 2,
                                                                    height: "auto",
                                                                    borderRadius: 2,
                                                                    background:
                                                                        "rgba( 255, 255, 255, 0.7 )",
                                                                    backdropFilter:
                                                                        "blur( 50px )",
                                                                    boxShadow:
                                                                        "0px 6px 15px rgba(0, 0, 0, 0.1)",
                                                                },
                                                            "& .MuiList-root": {
                                                                padding: 0,
                                                                height: 350,
                                                            },
                                                            "& .MuiMenuItem-root":
                                                                {
                                                                    color: "#000000",
                                                                    fontSize: 18,
                                                                    padding:
                                                                        "0.9rem 0.9rem 0.9rem 2rem",
                                                                    "&:first-of-type":
                                                                        {
                                                                            borderTopLeftRadius:
                                                                                "17px",
                                                                            borderTopRightRadius:
                                                                                "17px",
                                                                        },
                                                                    "&:last-of-type":
                                                                        {
                                                                            borderBottomLeftRadius:
                                                                                "17px",
                                                                            borderBottomRightRadius:
                                                                                "17px",
                                                                        },
                                                                    "&:hover": {
                                                                        background:
                                                                            "rgba( 255, 255, 255, 1 )",
                                                                        color: "#FF6596",
                                                                    },
                                                                },
                                                        },
                                                    }}
                                                >
                                                    {categoriesExpense.map(
                                                        ({ name, id }) => {
                                                            return (
                                                                <MenuItem
                                                                    name="menuItem"
                                                                    sx={{
                                                                        fontFamily:
                                                                            "Abel",
                                                                        fontSize: 10,
                                                                    }}
                                                                    categoryId={
                                                                        id
                                                                    }
                                                                    value={name}
                                                                    key={uuid4()}
                                                                >
                                                                    {name}
                                                                </MenuItem>
                                                            );
                                                        }
                                                    )}
                                                </Select>
                                                {formik.touched.categoryId ? (
                                                    <div
                                                        style={{
                                                            color: "#FF6596",
                                                            position:
                                                                "absolute",
                                                            top: "100%",
                                                        }}
                                                    >
                                                        {
                                                            formik.errors
                                                                .categoryId
                                                        }
                                                    </div>
                                                ) : null}
                                            </FormControl>
                                            <ArrowWrap>
                                                <ArrayDown />
                                            </ArrowWrap>
                                        </CategoryDropWrap>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <Flex>
                                    <InputWrap>
                                        <input
                                            style={{
                                                textAlign: "center",
                                            }}
                                            name="amount"
                                            type="number"
                                            min={0}
                                            step={1}
                                            value={formik.values.amount}
                                            onChange={formik.handleChange}
                                            placeholder="0.00"
                                        />
                                        {formik.touched.amount ? (
                                            <div
                                                style={{
                                                    color: "#FF6596",
                                                    position: "absolute",
                                                }}
                                            >
                                                {formik.errors.amount}
                                            </div>
                                        ) : null}
                                    </InputWrap>
                                    <InputWrap>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDateFns}
                                        >
                                            <DatePicker
                                                maxDate={new Date()}
                                                minDate={new Date("01.01.2010")}
                                                open={open}
                                                inputFormat="dd.MM.yyyy"
                                                mask={"__.__.____"}
                                                value={
                                                    formik.values
                                                        .transactionDate
                                                }
                                                readOnly={true}
                                                onOpen={() => setOpen(true)}
                                                onClose={() => setOpen(false)}
                                                onChange={onChangeDate}
                                                renderInput={(params) => {
                                                    return (
                                                        <>
                                                            <TextField
                                                                {...params}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                onClick={(e) =>
                                                                    setOpen(
                                                                        true
                                                                    )
                                                                }
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
                                    <input
                                        style={{
                                            maxWidth: 410,
                                        }}
                                        name="comment"
                                        type="text"
                                        value={formik.values.comment}
                                        onChange={formik.handleChange}
                                        placeholder="Comments"
                                    />
                                    {formik.touched.comment ? (
                                        <div
                                            style={{
                                                color: "#FF6596",
                                                position: "absolute",
                                            }}
                                        >
                                            {formik.errors.comment}
                                        </div>
                                    ) : null}
                                </InputWrap>
                                <ModalButton type="submit">ADD</ModalButton>
                                <ModalButton cancel onClick={onCloseModal}>
                                    CANCEL
                                </ModalButton>
                            </form>

                            <ModalClose
                                aria-label="Close modal"
                                onClick={onCloseModal}
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
