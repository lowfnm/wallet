import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { v4 as uuid4 } from "uuid";

const columns = [
    {
        id: "data",
        label: "Data",
        minWidth: 170,
        format: (value) => value.toFixed(2),
    },
    {
        id: "type",
        label: "Type",
        minWidth: 100,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "category",
        label: "Category",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "comments",
        label: "Comments",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "amount",
        label: "Amount",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
    {
        id: "balance",
        label: "Balance",
        minWidth: 170,
        align: "right",
        format: (value) => value.toFixed(2),
    },
];

const createData = (data, type, category, comments, amount, balance) => {
    return { data, type, category, comments, amount, balance };
};

const rows = [
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
    createData(
        "04.01.19",
        "-",
        "Other",
        "A gift for a wife",
        300.0,
        "6 900.00"
    ),
];

const HomeTab = () => {
    return (
        <Paper
            sx={{
                overflow: "hidden",
                boxShadow: 0,
            }}
        >
            <TableContainer
                sx={{
                    maxHeight: 440,
                    height: 330,
                    overflowY: "scroll",
                    width: 700,
                }}
            >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow
                            sx={{
                                "& th:first-of-type": {
                                    borderBottomLeftRadius: "3rem",
                                    borderTopLeftRadius: "3rem",
                                },
                                "& th:last-of-type": {
                                    borderBottomRightRadius: "3rem",
                                    borderTopRightRadius: "3rem",
                                },
                            }}
                        >
                            {columns.map((column) => (
                                <TableCell
                                    key={uuid4()}
                                    align={column.align}
                                    style={{
                                        minWidth: "70px",
                                        fontFamily: "Abel",
                                        fontSize: "1.8rem",
                                        fontWeight: 400,
                                        position: "static",
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={uuid4()}
                                >
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={uuid4()}
                                                align={column.align}
                                                sx={{
                                                    fontFamily: "Abel",
                                                    fontSize: "1.6rem",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {column.format &&
                                                typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default HomeTab;
