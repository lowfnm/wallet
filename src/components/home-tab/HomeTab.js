import { useState } from "react";
import { useSelector } from "react-redux";
import DesktopTab from "./dekstop-tab/DesktopTab";
import MobileTab from "./mobile-tab/MobileTab";
import ButtonAddTransactions from "../common/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../modal-add-transaction/ModalAddTransaction";
import { useMediaQuery } from "react-responsive";
import Spinner from "../spinner/Spinner";
import { transactionSelector } from "../../store/transaction/reducers/reducers";

const HomeTab = () => {
    const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });
    const { isSuccess } = useSelector(transactionSelector);

    return (
        <>
            {isMobile ? (
                <MobileTab />
            ) : isSuccess ? (
                <DesktopTab />
            ) : (
                <Spinner />
            )}
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

export default HomeTab;
