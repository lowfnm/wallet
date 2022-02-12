import { Oval } from "react-loader-spinner";
import { SpinnerWrap } from "./style/spinner";

const Spinner = () => {
    return (
        <SpinnerWrap>
            <Oval
                heigth={200}
                width={200}
                color="#24CCA7"
                ariaLabel="loading"
            />
        </SpinnerWrap>
    );
};

export default Spinner;
