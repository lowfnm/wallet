import { NavigationWrapper, NavButton, ItemWrapper } from "./style/navigation";
import SvgHome from "./icon/SvgHome";
import SvgStatistic from "./icon/SvgStatistic";

const Navigation = () => {
    return (
        <NavigationWrapper>
            <ItemWrapper>
                <SvgHome />
                <NavButton>Main</NavButton>
            </ItemWrapper>
            <ItemWrapper>
                <SvgStatistic />
                <NavButton>Statistics</NavButton>
            </ItemWrapper>
        </NavigationWrapper>
    );
};

export default Navigation;
