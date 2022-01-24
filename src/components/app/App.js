import {useState} from "react";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { ButtonAddTransactions } from "../button-add-transactions/ButtonAddTransactions";
import { ModalAddTransaction } from "../modal-add-transaction/ModalAddTransaction";

const App = () => {
    const [showModal,setShowModal] =useState(false)
    return (
        <ThemeProvider theme={theme}>
            <>
                <ButtonAddTransactions showModal={showModal} setShowModal={setShowModal}/>
                <ModalAddTransaction showModal={showModal} setShowModal={setShowModal}/>
                <GlobalStyles />
            </>
        </ThemeProvider>
    );
};

export default App;
