import styled from "styled-components";
import image from "./img/notransactions.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 60px;
    font-weight: 400;
`;

const NoTransactionsImg = styled.img``;

const WithoutTransactions = () => {
    return (
        <Wrapper>
            <Title>Transactions not found!</Title>
            <NoTransactionsImg
                width="50%"
                src={image}
                alt="Without Transaction"
            />
        </Wrapper>
    );
};

export default WithoutTransactions;
