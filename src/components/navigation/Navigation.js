import { Nav, NavText, IconWrapper, LinkElem } from "./style/navigation";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Navigation = () => {
    return (
        <Nav>
            <LinkElem to="/home">
                <IconWrapper>
                    <HomeIcon
                        sx={{
                            width: 18,
                            height: 18,
                        }}
                    />
                </IconWrapper>
                <NavText>Main</NavText>
            </LinkElem>

            <LinkElem to="/diagram">
                <IconWrapper>
                    <TimelineIcon
                        sx={{
                            width: 18,
                            height: 18,
                        }}
                    />
                </IconWrapper>
                <NavText>Statistics</NavText>
            </LinkElem>
            <LinkElem to="/currency">
                <IconWrapper>
                    <AttachMoneyIcon
                        sx={{
                            width: 18,
                            height: 18,
                        }}
                    />
                </IconWrapper>
            </LinkElem>
        </Nav>
    );
};

export default Navigation;
