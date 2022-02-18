import { useState, useEffect } from "react";
import {
    Rates,
    RatesHead,
    HeadItem,
    RatesBody,
    BodyItem,
    RatesContent,
} from "./style/currency";
import { v4 as uuid4 } from "uuid";
import Spinner from "../common/spinner/Spinner";
import SvgWave from "./icon/SvgWave";

const Currency = () => {
    const [rates, setRates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const apiURL =
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(apiURL);
                const data = await response.json();
                const desiredExchangeRates = data.slice(0, 3);

                setRates(desiredExchangeRates);
                setIsLoading(true);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRates();
    }, []);

    const listOfCurrency = rates.map(({ ccy, buy, sale }) => {
        const fixedBuy = Number(buy).toFixed(2);
        const fixedSale = Number(sale).toFixed(2);

        return (
            <RatesBody key={uuid4()}>
                <BodyItem>{ccy}</BodyItem>
                <BodyItem>{fixedBuy}</BodyItem>
                <BodyItem>{fixedSale}</BodyItem>
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
            <RatesContent>
                {!isLoading ? <Spinner /> : listOfCurrency}
                {!isLoading ? "" : <SvgWave />}
            </RatesContent>
        </Rates>
    );
};

export default Currency;
