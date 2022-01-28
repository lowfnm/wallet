import React from "react";
import { ButtonAdd } from "./style/buttonAddTransactions";

const ButtonAddTransactions = ({ setShowModal }) => {
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <ButtonAdd onClick={openModal}>
        </ButtonAdd>
    );
};
export default ButtonAddTransactions;
