import { useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import { LinkWrapper, ExitLink } from "./style/logOut";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { signOutUser } from "../../../store/auth/actions/actions";
import SvgExitIcon from "../icon/SvgExitIcon";
import {clearTransactions} from "../../../store/transaction/reducers/reducers";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LogOut = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(signOutUser());
        dispatch(clearTransactions());
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <LinkWrapper onClick={handleClickOpen}>
                <SvgExitIcon />
                <ExitLink>Exit</ExitLink>
            </LinkWrapper>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    "& .MuiPaper-root": {
                        padding: "3.5rem",
                        borderRadius: "2rem",
                        textAlign: "center",
                        "@media (max-width: 425px)": {
                            justifyContent: "center",
                            margin: 0,
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            maxHeight: "100%",
                        },
                    },
                }}
            >
                <DialogTitle
                    sx={{
                        fontFamily: "Abel",
                        fontWeight: "bold",
                        fontSize: "3rem",
                    }}
                >
                    Are you sure to quit?
                </DialogTitle>

                <DialogActions
                    sx={{
                        marginTop: "2.5rem",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        onClick={handleClose}
                        sx={{
                            width: "9rem",
                            marginRight: "1.5rem",
                            marginBottom: "1.5rem",
                            fontSize: "1.5rem",
                            backgroundColor: "#FF6596",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#FF6596",
                                color: "#fff",
                                boxShadow: "0px 5px 10px #FF6596",
                            },
                        }}
                    >
                        No
                    </Button>
                    <Button
                        onClick={logOut}
                        sx={{
                            width: "9rem",
                            marginBottom: "1.5rem",
                            fontSize: "1.5rem",
                            backgroundColor: "#24CCA7",
                            color: "#fff",
                            "&:hover": {
                                backgroundColor: "#24CCA7",
                                color: "#fff",
                                boxShadow: "0px 5px 10px #24CCA7",
                            },
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default LogOut;
