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
    return (
        <TableContainer
            component={Paper}
            sx={{ marginTop: 2, boxShadow: 0, backgroundColor: "transparent" }}
        >
            <Table sx={{ maxWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{
                            "& .MuiTableCell-root": {
                                fontFamily: "Abel, sans-serif",
                                fontSize: 18,
                                fontWeight: 400,
                                lineHeight: 1.27,
                            },
                        }}
                    >
                        <TableCell>Category</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={uuid4()}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                sx={{
                                    "&.MuiTableCell-root": {
                                        fontFamily: "Abel, sans-serif",
                                        fontSize: 16,
                                        fontWeight: 400,
                                        lineHeight: 1.25,
                                        borderBottom: '1px solid "red"',
                                    },
                                }}
                            >
                                {row.category}
                            </TableCell>
                            <TableCell
                                sx={{
                                    "&.MuiTableCell-root": {
                                        fontFamily: "Abel, sans-serif",
                                        fontSize: 16,
                                        fontWeight: 400,
                                        lineHeight: 1.25,
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
