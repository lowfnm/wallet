import HeroPicture from "./icon/hero-img.png";
import { Hero, HeroImage, HeroText, HeroWrapper } from "./style/loginhero";

const LoginHero = () => {
    return (
        <Hero>
            <HeroWrapper>
                <HeroImage src={HeroPicture} />
                <HeroText>Finance App</HeroText>
            </HeroWrapper>
        </Hero>
    );
};

export default LoginHero;
