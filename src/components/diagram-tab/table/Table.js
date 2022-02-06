import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import { v4 as uuid4 } from "uuid";
import { rows, spanColors } from "./TableData";

const DiagramTable = () => {
    return (
        <TableContainer
            sx={{
                marginTop: "25px",
            }}
        >
            <Table sx={{ width: 350 }} aria-label="simple table">
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
                            "& .MuiTableCell-root": {
                                paddingBottom: "19px",
                                fontSize: 18,
                                lineHeight: 1.27,
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
                                    },
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: "16px",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "2px",
                                        backgroundColor: spanColors[index],
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
                                    paddingBottom: 1.4,
                                    color: "#000",
                                },
                            }}
                        >
                            Expenses:
                        </TableCell>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    paddingBottom: 1.4,
                                    color: "#FF6596",
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
                                    color: "#000",
                                    paddingTop: 0,
                                },
                            }}
                        >
                            Incomes:
                        </TableCell>
                        <TableCell
                            sx={{
                                "&.MuiTableCell-root": {
                                    color: "#24CCA7",
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
