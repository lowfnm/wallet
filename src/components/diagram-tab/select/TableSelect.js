import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuid4 } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SelectWrapper } from "./style/tableSelect";
import { transactionSummaryPeriod } from "../../../store/transaction/actions/actions";
import { useDispatch } from "react-redux";

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let years = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

const TableSelect = () => {
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const dispatch = useDispatch();

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    useEffect(() => {
        dispatch(transactionSummaryPeriod({ month, year }));
    }, [month, year, dispatch]);

    return (
        <SelectWrapper>
            <FormControl sx={{ minWidth: 166, height: 50 }}>
                <Select
                    labelId="month"
                    sx={{
                        border: 1,
                        borderColor: "#000",
                        borderRadius: 30,
                        fontFamily: "Abel",
                        fontSize: 16,
                        textAlign: "center",
                        ".MuiSvgIcon-root": {
                            fontSize: "3rem",
                            marginRight: 1,
                        },

                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                        },

                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#6f77ec",
                            },
                        },
                    }}
                    MenuProps={{
                        sx: {
                            "& .MuiPaper-root": {
                                marginTop: 0.3,
                                maxHeight: 200,
                                borderRadius: 5,
                                border: 3,
                                borderColor: "#6f77ec",
                                background: "rgba( 255, 255, 255, 0.5 )",
                                backdropFilter: "blur( 4px )",
                                boxShadow:
                                    "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            },
                            "& .MuiMenuItem-root": {
                                fontSize: 15,
                            },
                        },
                    }}
                    IconComponent={ExpandMoreIcon}
                    value={month}
                    onChange={handleChange}
                >
                    {months.map((month, id) => {
                        return (
                            <MenuItem
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: 10,
                                }}
                                key={uuid4()}
                                value={id + 1}
                            >
                                {month}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>

            <FormControl
                sx={{
                    marginLeft: 1.9,
                    minWidth: 166,
                    height: 50,
                    "@media (max-width: 767px)": {
                        marginLeft: 0,
                        marginTop: "2rem",
                    },
                }}
            >
                <Select
                    labelId="year"
                    sx={{
                        border: 1,
                        borderColor: "#000",
                        borderRadius: 30,
                        fontFamily: "Abel",
                        fontSize: 16,
                        textAlign: "center",
                        ".MuiSvgIcon-root": {
                            fontSize: "3rem",
                            marginRight: 1,
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: 0,
                        },

                        "&.Mui-focused": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#6f77ec",
                            },
                        },
                    }}
                    MenuProps={{
                        sx: {
                            "& .MuiPaper-root": {
                                marginTop: 0.3,
                                maxHeight: 200,
                                borderRadius: 5,
                                border: 3,
                                borderColor: "#6f77ec",
                                background: "rgba( 255, 255, 255, 0.5 )",
                                backdropFilter: "blur( 4px )",
                                boxShadow:
                                    "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            },
                            "& .MuiMenuItem-root": {
                                fontSize: 15,
                            },
                        },
                    }}
                    IconComponent={ExpandMoreIcon}
                    value={year}
                    onChange={handleChangeYear}
                >
                    {years.map((year, id) => {
                        return (
                            <MenuItem
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: 10,
                                }}
                                key={uuid4()}
                                value={year}
                            >
                                {year}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </SelectWrapper>
    );
};
export { TableSelect };
