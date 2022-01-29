import { useState } from "react";
import Header from "../../components/header/Header";
import Currency from "../../components/currency/Currency";
import Balance from "../../components/balance/Balance";
import ButtonAddTransactions from "../../components/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../../components/modal-add-transaction/ModalAddTransaction";

import styled from "styled-components";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

const Aside = styled.aside``;
const Main = styled.main``;

const DashBoardPageContainer = styled.div`
    display: flex;
`;

export const Home = () => {
    return <h1>Таблица</h1>;
};

export const Diagram = () => {
    return <h1>Статистика</h1>;
};

const DashBoardPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <Header />
            <DashBoardPageContainer>
                <Aside>
                    <Navigation />
                    <Balance />
                    <Currency />
                </Aside>
                <Main>
                    <Outlet />
                    {/*<Home />*/}
                    {/*<Diagram />*/}
                </Main>
            </DashBoardPageContainer>
            <ButtonAddTransactions
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ModalAddTransaction
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </Container>
    );
};

export default DashBoardPage;
