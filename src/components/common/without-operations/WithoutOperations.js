import styled from "styled-components";
import image from "./img/without-operations.png";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 60px;
    font-weight: 400;
`;

const NoOperationsImg = styled.img``;

const WithoutOperations = ({ title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <NoOperationsImg width="50%" src={image} alt={title} />
        </Wrapper>
    );
};

export default WithoutOperations;
