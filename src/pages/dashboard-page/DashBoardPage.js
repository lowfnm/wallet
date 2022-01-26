import Header from "../../components/header/Header";
import Currency from "../../components/currency/Currency";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;

const DashBoardPage = () => {
    return (
        <Container>
            <Header />
            <Currency />
        </Container>
    );
};

export default DashBoardPage;
