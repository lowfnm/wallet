import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import { v4 as uuid4 } from "uuid";

const createData = (category, amount) => {
    return { category, amount };
};

const rows = [
    createData("Main expenses", 8700.0),
    createData("Products", 3800.74),
    createData("Car", 1500.0),
    createData("Self-care", 800.0),
    createData("Care of children", 2208.5),
    createData("Housewares", 300.0),
    createData("Education", 3400.0),
    createData("Leisure", 1230.0),
    createData("Other expenses", 610.0),
];

const DiagramTable = () => {
    const colors = [
        "#FED057",
        "#FFD8D0",
        "#FD9498",
        "#C5BAFF",
        "#6E78E8",
        "#4A56E2",
        "#81E1FF",
        "#24CCA7",
        "#00AD84",
    ];

    return (
        <TableContainer
            component={Paper}
            sx={{
                marginTop: "25px",
                boxShadow: 0,
                backgroundColor: "transparent",
            }}
        >
            <Table sx={{ maxWidth: 350 }} aria-label="simple table">
                <TableHead
                    sx={{
                        backgroundColor: "white",
                    }}
                >
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
                            "& .MuiTableCell-root": {
                                paddingBottom: "19px",
                                fontFamily: "Abel, sans-serif",
                                fontSize: 18,
                                fontWeight: 400,
                                lineHeight: 1.27,
                                borderBottom: 0,
                            },
                        }}
                    >
                        <TableCell>Category</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={uuid4()}
                            sx={{
                                borderBottom: "1px solid #dcdcdf",
                                boxShadow: "0px 1px 0px rgba(255,255,255, 0.6)",
                            }}
                        >
                            <TableCell
                                sx={{
                                    display: "flex",
                                    alignItems: "center",

                                    "&.MuiTableCell-root": {
                                        paddingTop: 1.2,
                                        paddingBottom: 1.2,
                                        fontFamily: "Abel, sans-serif",
                                        fontSize: 16,
                                        fontWeight: 400,
                                        lineHeight: 1.25,
                                        borderBottom: 0,
                                    },
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: "16px",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "2px",
                                        backgroundColor: colors[index],
                                    }}
                                >
                                    &nbsp;
                                </span>
                                {row.category}
                            </TableCell>
                            <TableCell
                                sx={{
                                    "&.MuiTableCell-root": {
                                        paddingTop: 1.6,
                                        paddingBottom: 1.6,
                                        fontFamily: "Abel, sans-serif",
                                        fontSize: 16,
                                        fontWeight: 400,
                                        lineHeight: 1.25,
                                        borderBottom: 0,
                                    },
                                }}
                                align="right"
                            >
                                {row.amount}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    fontFamily: "Abel, sans-serif",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    color: "#000",
                                    paddingBottom: 1.4,
                                    borderBottom: 0,
                                },
                            }}
                        >
                            Expenses:
                        </TableCell>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    fontFamily: "Abel, sans-serif",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    color: "#FF6596",
                                    paddingBottom: 1.4,
                                    borderBottom: 0,
                                },
                            }}
                            align="right"
                        >
                            22 549.24
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    fontFamily: "Abel, sans-serif",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    color: "#000",
                                    borderBottom: 0,
                                    paddingTop: 0,
                                },
                            }}
                        >
                            Incomes:
                        </TableCell>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    fontFamily: "Abel, sans-serif",
                                    fontSize: 16,
                                    fontWeight: 400,
                                    lineHeight: 1.25,
                                    color: "#24CCA7",
                                    borderBottom: 0,
                                    paddingTop: 0,
                                },
                            }}
                            align="right"
                        >
                            27 350.00
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default DiagramTable;
