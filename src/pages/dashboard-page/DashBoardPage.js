import { useState } from "react";
import Header from "../../components/header/Header";
import Currency from "../../components/currency/Currency";
import Balance from "../../components/balance/Balance";
import ButtonAddTransactions from "../../components/common/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../../components/modal-add-transaction/ModalAddTransaction";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import {
    Aside,
    ContentWrapper,
    DashBoardPageContainer,
    Main,
    HeaderWrapper,
} from "./style/dashboardpage";
import Container from "../../components/common/container/container";
const DashBoardPage = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <HeaderWrapper>
                <Container>
                    <Header />
                </Container>
            </HeaderWrapper>
            <DashBoardPageContainer>
                <Container>
                    <ContentWrapper>
                        <Aside>
                            <Navigation />
                            <Balance />
                            <Currency />
                        </Aside>
                        <Main>
                            <Outlet />
                        </Main>
                    </ContentWrapper>
                </Container>
            </DashBoardPageContainer>
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

export default DashBoardPage;
