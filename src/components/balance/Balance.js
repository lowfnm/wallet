import {
    StyledBalance,
    BalanceTitle,
    BalanceTotal,
    BalanceBody,
} from "./style/balance";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/auth/reducers/reducers";

const Balance = () => {
    const { balance } = useSelector(userSelector);

    return (
        <StyledBalance>
            <BalanceBody>
                <BalanceTitle>Your Balance</BalanceTitle>
                <BalanceTotal>₴ {balance}</BalanceTotal>
            </BalanceBody>
        </StyledBalance>
    );
};

export default Balance;
