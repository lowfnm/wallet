import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { headers, transactions } from "../HomeTabData";
import {
    OperationItem,
    OperationList,
    OperationTypeLine,
} from "./style/mobiletab";
import { v4 as uuid4 } from "uuid";
import WithoutTransactions from "../../common/without-transactions/WithoutTransactions";

const MobileTab = () => {
    return (
        <>
            {transactions.length > 0 ? (
                transactions.map((operation) => {
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
                                    {headers.map((header) => {
                                        return (
                                            <OperationItem key={uuid4()}>
                                                <span
                                                    style={{
                                                        paddingLeft: 16,
                                                        textTransform:
                                                            "capitalize",
                                                    }}
                                                >
                                                    {header}
                                                </span>
                                                <span
                                                    style={{
                                                        paddingRight: 20,
                                                    }}
                                                >
                                                    {operation[header]}
                                                </span>
                                            </OperationItem>
                                        );
                                    })}
                                </OperationList>
                            </CardContent>
                            <OperationTypeLine />
                        </Card>
                    );
                })
            ) : (
                <WithoutTransactions />
            )}
        </>
    );
};

export default MobileTab;
