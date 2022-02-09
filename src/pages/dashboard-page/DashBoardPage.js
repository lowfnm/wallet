import Header from "../../components/header/Header";
import Currency from "../../components/currency/Currency";
import Balance from "../../components/balance/Balance";
import Navigation from "../../components/navigation/Navigation";
import { Outlet } from "react-router-dom";
import {
    Aside,
    ContentWrapper,
    DashBoardPageContainer,
    Main,
    HeaderWrapper,
    NavigationWrapper,
} from "./style/dashboardpage";
import Container from "../../components/common/container/container";
import { useEffect } from "react";
import {
    transactionGet,
    transactionGetCategories,
} from "../../store/transaction/actions/actions";
import { useDispatch } from "react-redux";

const DashBoardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(transactionGet());
    }, [dispatch]);

    useEffect(() => {
        dispatch(transactionGetCategories());
    }, [dispatch]);

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
                            <NavigationWrapper>
                                <Navigation />
                                <Balance />
                            </NavigationWrapper>
                            <Currency />
                        </Aside>
                        <Main>
                            <Outlet />
                        </Main>
                    </ContentWrapper>
                </Container>
            </DashBoardPageContainer>
        </>
    );
};

export default DashBoardPage;
