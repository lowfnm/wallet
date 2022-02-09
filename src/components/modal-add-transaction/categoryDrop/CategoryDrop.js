import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuid4 } from "uuid";
import { makeStyles } from "@mui/styles";
import { ArrowWrap } from "../dropdown/style/dropdown";
import { ArrayDown } from "../dropdown/icon/ArrayDown";
import { CategoryDropWrap } from "./style/categoryDrop";
import { useSelector } from "react-redux";
import { transactionSelector } from "../../../store/transaction/reducers/reducers";

// let categories = [
//     "Main",
//     "Food",
//     "Car",
//     "Development",
//     "Kids",
//     "House",
//     "Education",
//     "Others",
// ];

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

const CategoryDrop = () => {
    const [category, setCategory] = useState("");

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const { categoriesArray } = useSelector(transactionSelector);

    return (
        <CategoryDropWrap>
            <FormControl sx={{ width: "100%", margin: "0 auto" }}>
                <Select
                    value={category}
                    displayEmpty
                    onChange={handleChange}
                    renderValue={
                        category !== ""
                            ? undefined
                            : () => <Placeholder>Select category</Placeholder>
                    }
                    sx={{
                        borderBottom: "1px solid #e0e0e0 ",
                        fontFamily: "Abel",
                        fontSize: 18,
                        textAlign: "left",
                        "& .MuiSelect-select": {
                            padding: "1rem 2rem",
                        },
                        ".MuiSvgIcon-root": {
                            display: "none",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                        },
                    }}
                    MenuProps={{
                        sx: {
                            "& .MuiPaper-root": {
                                marginTop: 2,
                                height: "auto",
                                borderRadius: 2,
                                background: "rgba( 255, 255, 255, 0.7 )",
                                backdropFilter: "blur( 50px )",
                                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                            },
                            "& .MuiList-root": {
                                padding: 0,
                            },
                            "& .MuiMenuItem-root": {
                                color: "#000000",
                                fontSize: 18,
                                padding: "0.9rem 0.9rem 0.9rem 2rem",
                                // "&:first-child": {
                                //     borderTopLeftRadius: "17px",
                                //     borderTopRightRadius: "17px",
                                // },
                                // " &:last-child": {
                                //     borderBottomLeftRadius: "17px",
                                //     borderBottomRightRadius: "17px",
                                // },
                                "&:hover": {
                                    background: "rgba( 255, 255, 255, 1 )",
                                    color: "#FF6596",
                                },
                            },
                        },
                    }}
                >
                    {categoriesArray.map((name, id) => {
                        return (
                            <MenuItem
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: 10,
                                }}
                                key={uuid4()}
                                value={id}
                                id={id}
                            >
                                {name}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            <ArrowWrap>
                <ArrayDown />
            </ArrowWrap>
        </CategoryDropWrap>
    );
};
export { CategoryDrop };
