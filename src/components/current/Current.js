import { useEffect, useState } from "react";
import SvgWave from "./icons/SvgWave";
import {
    Rates,
    RatesHead,
    HeadItem,
    RatesBody,
    BodyItem,
} from "./style/current";
import { v4 as uuid4 } from "uuid";

const Current = () => {
    const [rates, setRates] = useState([]);

    const apiURL =
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    const fetchRates = async () => {
        const response = await fetch(apiURL);
        const data = await response.json();
        const slicedData = data.slice(0, -1);

        setRates(slicedData);
    };

    useEffect(() => {
        fetchRates();
    }, []);

    const listOfCurrency = rates.map((rate) => {
        return (
            <RatesBody key={uuid4()}>
                <BodyItem>{rate.ccy}</BodyItem>
                <BodyItem>{rate.buy}</BodyItem>
                <BodyItem>{rate.sale}</BodyItem>
            </RatesBody>
        );
    });

    return (
        <Rates>
            <RatesHead>
                <HeadItem>Currency</HeadItem>
                <HeadItem>Purchase</HeadItem>
                <HeadItem>Sale</HeadItem>
            </RatesHead>
            {listOfCurrency}
            <SvgWave />
        </Rates>
    );
};

export default Current;
