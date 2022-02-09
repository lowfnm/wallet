import { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { headers } from "../HomeTabData";
import TableCell from "@mui/material/TableCell";
import { v4 as uuid4 } from "uuid";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TablePaginationActions from "./DestopTabPaginationActions";
import WithoutTransactions from "../../common/without-transactions/WithoutTransactions";
import { transactionSelector } from "../../../store/transaction/reducers/reducers";
import { useSelector } from "react-redux";

const DesktopTab = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { transactions } = useSelector(transactionSelector);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - transactions.length)
            : 0;

    return (
        <>
            {transactions.length > 0 ? (
                <TableContainer>
                    <Table
                        sx={{
                            width: 700,
                            "@media (max-width: 1279px)": {
                                width: "100%",
                            },
                        }}
                        aria-label="pagination table"
                    >
                        <TableHead>
                            <TableRow
                                sx={{
                                    textTransform: "capitalize",
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
                                        borderBottom: 0,
                                    },
                                }}
                            >
                                {headers.map((head) => {
                                    return (
                                        <TableCell
                                            key={uuid4()}
                                            align="center"
                                            sx={{
                                                maxWidth: "116px",
                                            }}
                                        >
                                            {head}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? transactions.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : transactions
                            ).map(
                                ({
                                    transactionDate,
                                    type,
                                    categoryId,
                                    amount,
                                    comment,
                                    balanceAfter,
                                }) => (
                                    <TableRow
                                        key={uuid4()}
                                        sx={{
                                            borderBottom: "1px solid #dcdcdf",
                                            boxShadow:
                                                "0px 1px 0px rgba(255,255,255, 0.6)",
                                            "&:last-of-type": {
                                                boxShadow: 0,
                                            },
                                        }}
                                    >
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "110px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {transactionDate}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "110px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {type}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "166px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {categoryId}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "166px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {comment}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                width: "110px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {amount}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                width: "110px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {balanceAfter}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                        {transactions.length <= 5 ? null : (
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        sx={{
                                            ".MuiTablePagination-displayedRows":
                                                {
                                                    fontFamily:
                                                        "Abel, sans-serif",
                                                    fontSize: 16,
                                                    fontWeight: 400,
                                                    lineHeight: 1.27,
                                                    borderBottom: 0,
                                                },
                                            ".MuiSvgIcon-root": {
                                                fontSize: "3rem",
                                            },
                                        }}
                                        colSpan={4}
                                        rowsPerPageOptions={[5]}
                                        count={transactions.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                "aria-label": "rows per page",
                                            },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={
                                            handleChangeRowsPerPage
                                        }
                                        ActionsComponent={
                                            TablePaginationActions
                                        }
                                    />
                                </TableRow>
                            </TableFooter>
                        )}
                    </Table>
                </TableContainer>
            ) : (
                <WithoutTransactions />
            )}
        </>
    );
};

export default DesktopTab;
