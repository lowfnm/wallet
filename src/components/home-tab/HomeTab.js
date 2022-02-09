import { useState } from "react";
import DesktopTab from "./dekstop-tab/DesktopTab";
import MobileTab from "./mobile-tab/MobileTab";
import ButtonAddTransactions from "../common/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../modal-add-transaction/ModalAddTransaction";
import { useMediaQuery } from "react-responsive";

const HomeTab = () => {
    const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });

    return (
        <>
            {isMobile ? <MobileTab /> : <DesktopTab />}
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
