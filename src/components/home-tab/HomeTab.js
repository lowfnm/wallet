import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import { headers, rows } from "./HomeTabData";
import TablePaginationActions from "./HomeTabPaginationActions";
import { v4 as uuid4 } from "uuid";
import ButtonAddTransactions from "../common/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../modal-add-transaction/ModalAddTransaction";

const HomeTab = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(7);
    const [showModal, setShowModal] = useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 7));
        setPage(0);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <>
            <TableContainer>
                <Table
                    sx={{ width: 700, tableLayout: "auto" }}
                    aria-label="pagination table"
                >
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
                                    borderBottom: 0,
                                },
                            }}
                        >
                            {headers.map((head) => {
                                return (
                                    <TableCell
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
                            ? rows.slice(
                                  page * rowsPerPage,
                                  page * rowsPerPage + rowsPerPage
                              )
                            : rows
                        ).map(
                            ({
                                date,
                                type,
                                category,
                                comments,
                                amount,
                                balance,
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
                                        "& .MuiTableCell-root": {},
                                    }}
                                >
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "110px",
                                        }}
                                    >
                                        {date}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "110px",
                                        }}
                                    >
                                        {type}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "166px",

                                            "&:hover": {
                                                textOverflow: "clip",
                                                whiteSpace: "normal",
                                                wordBreak: "break-all",
                                            },
                                        }}
                                    >
                                        {category}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            maxWidth: "166px",

                                            "&:hover": {
                                                textOverflow: "clip",
                                                whiteSpace: "normal",
                                                wordBreak: "break-all",
                                            },
                                        }}
                                    >
                                        {comments}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            width: "110px",
                                        }}
                                    >
                                        {amount}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            width: "110px",
                                        }}
                                    >
                                        {balance}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>

                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}

                    {rows.length <= 7 ? (
                        ""
                    ) : (
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    sx={{
                                        ".MuiTablePagination-displayedRows": {
                                            fontFamily: "Abel, sans-serif",
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
                                    rowsPerPageOptions={[7]}
                                    count={rows.length}
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
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    )}
                </Table>
            </TableContainer>
            <ButtonAddTransactions
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ModalAddTransaction
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    );
};

export default HomeTab;
