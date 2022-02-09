import { ButtonAdd } from "./style/buttonAddTransactions";
import PlusIcon from "./icon/PlusIcon";
import { transactionGetCategories } from "../../../store/transaction/actions/actions";
import { useDispatch } from "react-redux";

const ButtonAddTransactions = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const openModal = () => {
        setShowModal((prev) => !prev);

        dispatch(transactionGetCategories());
    };
    return (
        <ButtonAdd onClick={openModal}>
            <PlusIcon />
        </ButtonAdd>
    );
};

export default ButtonAddTransactions;
