import Header from "../../components/header/Header";
import Currency from "../../components/currency/Currency";
import Balance from "../../components/balance/Balance";

import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const DashBoardPage = () => {
    return (
        <Container>
            <ToastContainer autoClose={5000} />
            <Header />
            <Balance />
            <Currency />
        </Container>
    );
};

export default DashBoardPage;
