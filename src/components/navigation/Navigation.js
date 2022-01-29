import {
    NavigationWrapper,
    NavText,
    IconWrapper,
    LinkElem,
} from "./style/navigation";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";

const Navigation = () => {
    return (
        <NavigationWrapper>
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
        </NavigationWrapper>
    );
};

export default Navigation;
