import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
    OperationItem,
    OperationList,
    OperationTypeLine,
    BalanceWrap,
} from "./style/mobiletab";
import Balance from "../../balance/Balance";
import { v4 as uuid4 } from "uuid";
import WithoutOperations from "../../common/without-operations/WithoutOperations";
import { useSelector } from "react-redux";
import { transactionSelector } from "../../../store/transaction/reducers/reducers";

const MobileTab = () => {
    const { transactions, categoriesArray } = useSelector(transactionSelector);

    const monthSortData = transactions
        .slice()
        .sort(
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

    return (
        <>
            <BalanceWrap>
                <Balance />
            </BalanceWrap>
            {tableData.length > 0 ? (
                tableData.map(
                    ({
                        transactionDate,
                        type,
                        category,
                        amount,
                        comment,
                        balanceAfter,
                    }) => {
                        return (
                            <Card
                                key={uuid4()}
                                sx={{
                                    position: "relative",
                                    margin: "0 auto 1rem",
                                    minWidth: 275,
                                    borderRadius: "10px",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        padding: 0,
                                    }}
                                >
                                    <OperationList>
                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Date
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {transactionDate}
                                            </span>
                                        </OperationItem>

                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Type
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {type === "EXPENSE" ? "-" : "+"}
                                            </span>
                                        </OperationItem>

                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Category
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {category}
                                            </span>
                                        </OperationItem>
                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Amount
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {type === "EXPENSE" ? (
                                                    <span
                                                        style={{
                                                            color: "#FF6596",
                                                        }}
                                                    >
                                                        {Math.abs(amount)}
                                                    </span>
                                                ) : (
                                                    <span
                                                        style={{
                                                            color: "#24CCA7",
                                                        }}
                                                    >
                                                        {amount}
                                                    </span>
                                                )}
                                            </span>
                                        </OperationItem>
                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Comment
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {comment}
                                            </span>
                                        </OperationItem>

                                        <OperationItem>
                                            <span
                                                style={{
                                                    paddingLeft: 16,
                                                }}
                                            >
                                                Balance
                                            </span>
                                            <span
                                                style={{
                                                    paddingRight: 20,
                                                }}
                                            >
                                                {balanceAfter}
                                            </span>
                                        </OperationItem>
                                    </OperationList>
                                </CardContent>
                                {type === "EXPENSE" ? (
                                    <OperationTypeLine
                                        style={{ backgroundColor: "#FF6596" }}
                                    />
                                ) : (
                                    <OperationTypeLine
                                        style={{ backgroundColor: "#24CCA7" }}
                                    />
                                )}
                            </Card>
                        );
                    }
                )
            ) : (
                <WithoutOperations />
            )}
        </>
    );
};

export default MobileTab;
