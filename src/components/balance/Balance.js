import {
    StyledBalance,
    BalanceTitle,
    BalanceTotal,
    BalanceBody,
} from "./style/balance";

const Balance = () => {
    return (
        <StyledBalance>
            <BalanceBody>
                <BalanceTitle>Your Balance</BalanceTitle>
                <BalanceTotal>₴ 24 000.00</BalanceTotal>
            </BalanceBody>
        </StyledBalance>
    );
};

export default Balance;
