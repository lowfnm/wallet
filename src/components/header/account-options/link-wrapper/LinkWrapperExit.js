import React from "react";
import SvgExitIcon from "../../../icon/SvgExitIcon";
import { LinkWrapper, ExitLink } from "./style/linkWrapperExit";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LinkWrapperExit = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
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
                    {"Are you sure to quit?"}
                </DialogTitle>
                {/*<DialogContent>*/}
                {/*    <DialogContentText*/}
                {/*        id="alert-dialog-slide-description"*/}
                {/*        sx={{ fontFamily: "Abel", fontSize: "2rem" }}*/}
                {/*    >*/}
                {/*        We really want you to stay &#128531;*/}
                {/*    </DialogContentText>*/}
                {/*</DialogContent>*/}
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
                        onClick={handleClose}
                        sx={{
                            width: "9rem",
                            marginRight: "1.5rem",
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
        </div>
    );
};

export default LinkWrapperExit;
