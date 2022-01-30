import React from "react";
import { ButtonAdd } from "./style/buttonAddTransactions";
import PlusIcon from "./icon/PlusIcon";

const ButtonAddTransactions = ({ setShowModal }) => {
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <ButtonAdd onClick={openModal}>
            <PlusIcon />
        </ButtonAdd>
    );
};

export default ButtonAddTransactions;
