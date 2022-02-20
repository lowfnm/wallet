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
import WithoutOperations from "../../common/without-operations/WithoutOperations";
import { transactionSelector } from "../../../store/transaction/reducers/reducers";
import { useSelector } from "react-redux";

const DesktopTab = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const { transactions, categoriesArray } = useSelector(transactionSelector);

    const monthSortData = [...transactions].sort(
        (a, b) => new Date(a.transactionDate) - new Date(b.transactionDate)
    );

    const tableData = monthSortData.map((item) => {
        const category = categoriesArray.find(
            ({ id }) => id === item.categoryId
        );
        if (!category) {
            return item;
        }
        return { ...item, category: category.name };
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

    return (
        <>
            {tableData.length > 0 ? (
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
                                ? tableData.slice(
                                      page * rowsPerPage,
                                      page * rowsPerPage + rowsPerPage
                                  )
                                : tableData
                            ).map(
                                ({
                                    transactionDate,
                                    type,
                                    category,
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
                                                maxWidth: "160px",
                                                minWidth: "110px",
                                            }}
                                        >
                                            {transactionDate}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "160px",
                                                minWidth: "60px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {type === "EXPENSE" ? "-" : "+"}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "160px",
                                                minWidth: "170px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {category}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "160px",
                                                minWidth: "130px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {comment}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "160px",
                                                minWidth: "100px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {type === "EXPENSE" ? (
                                                <span
                                                    style={{ color: "#FF6596" }}
                                                >
                                                    {Math.abs(amount)}
                                                </span>
                                            ) : (
                                                <span
                                                    style={{ color: "#24CCA7" }}
                                                >
                                                    {amount}
                                                </span>
                                            )}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{
                                                maxWidth: "160px",
                                                minWidth: "100px",
                                                overflowWrap: "break-word",
                                            }}
                                        >
                                            {balanceAfter}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}

                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53.5 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>

                        {tableData.length <= 5 ? null : (
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
                                        count={tableData.length}
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
                <WithoutOperations title="No transactions" />
            )}
        </>
    );
};

export default DesktopTab;
