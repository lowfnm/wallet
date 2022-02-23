import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DesktopTab from "./dekstop-tab/DesktopTab";
import MobileTab from "./mobile-tab/MobileTab";
import ButtonAddTransactions from "../common/button-add-transactions/ButtonAddTransactions";
import ModalAddTransaction from "../modal-add-transaction/ModalAddTransaction";
import { useMediaQuery } from "react-responsive";
import Spinner from "../common/spinner/Spinner";
import { transactionSelector } from "../../store/transaction/reducers/reducers";

import { useDispatch } from "react-redux";
import {
    transactionGet,
    transactionGetCategories,
    transactionSummary,
} from "../../store/transaction/actions/actions";
import {userSelector} from "../../store/auth/reducers/reducers";

const HomeTab = () => {
    const [showModal, setShowModal] = useState(false);
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)",
    });
    const { isSuccess } = useSelector(transactionSelector);
    const { isAuth } = useSelector(userSelector)

    const dispatch = useDispatch();
    useEffect(() => {

         if(isAuth) {
            dispatch(transactionGet());
            dispatch(transactionGetCategories());
            dispatch(transactionSummary());
         }
    }, [dispatch, isAuth]);

    const Tabs = () => {
        return <>{isMobile ? <MobileTab /> : <DesktopTab />}</>;
    };

    return (
        <>
            {isSuccess ? <Tabs /> : <Spinner />}
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
