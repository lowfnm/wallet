import { SpinnerWrap } from "./style/spinner";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
    return (
        <SpinnerWrap>
            <CircularProgress sx={{ color: "#24CCA7", opacity: 0.8 }} />
        </SpinnerWrap>
    );
};

export default Spinner;
