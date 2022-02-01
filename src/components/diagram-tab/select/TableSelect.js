import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuid4 } from "uuid";
import { InputLabel } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

let years = ["1921", "1922"];

const TableSelect = () => {
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <>
            <FormControl sx={{ minWidth: 166, height: 50 }}>
                <InputLabel
                    variant={"filled"}
                    sx={{
                        fontFamily: "Abel",
                        fontSize: 16,
                        paddingLeft: 2,
                        "&.Mui-focused": {
                            borderRadius: 0,
                        },
                        "&.MuiInputLabel-root": {
                            fontSize: 16,
                        },
                    }}
                >
                    Month
                </InputLabel>
                <Select
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
                    }}
                    MenuProps={{
                        sx: {
                            "& .MuiPaper-root": {
                                marginTop: 0.3,
                                maxHeight: 200,
                                borderRadius: 5,
                                border: 2,
                                borderColor: "#1976d2",
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
                                value={id}
                            >
                                {month}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>

            <FormControl sx={{ marginLeft: 1.9, minWidth: 166, height: 50 }}>
                <InputLabel
                    variant={"filled"}
                    sx={{
                        fontFamily: "Abel",
                        fontSize: 16,
                        paddingLeft: 2,
                        "&.Mui-focused": {
                            borderRadius: 0,
                        },
                        "&.MuiInputLabel-root": {
                            fontSize: 16,
                        },
                    }}
                >
                    Year
                </InputLabel>
                <Select
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
                    }}
                    MenuProps={{
                        sx: {
                            "& .MuiPaper-root": {
                                marginTop: 0.3,
                                maxHeight: 200,
                                borderRadius: 5,
                                border: 2,
                                borderColor: "#1976d2",
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
                                value={id}
                            >
                                {year}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
        </>
    );
};
export { TableSelect };
