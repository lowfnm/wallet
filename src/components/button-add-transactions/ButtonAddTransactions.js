import React from "react";
import { ButtonAdd, Plus } from "./style/buttonAddTransactions";

const ButtonAddTransactions = ({ setShowModal }) => {
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <ButtonAdd onClick={openModal}>
            <Plus />
        </ButtonAdd>
    );
};

export default ButtonAddTransactions;
