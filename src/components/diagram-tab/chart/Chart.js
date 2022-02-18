import { useSelector } from "react-redux";
import { transactionSelector } from "../../../store/transaction/reducers/reducers";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ExpensesMoney, Wrapper } from "./style/chart";
import colorsArr from "../colorsArr";
import WithoutOperations from "../../common/without-operations/WithoutOperations";

ChartJS.register(ArcElement, Tooltip);

const Chart = () => {
    const { categoriesSummary, expenseSummary } =
        useSelector(transactionSelector);

    const categoriesLabel = categoriesSummary
        .filter((item) => {
            return item.type === "EXPENSE";
        })
        .map((category) => category.name);

    const categoriesData = categoriesSummary
        .filter((item) => {
            return item.type === "EXPENSE";
        })
        .map((category) => Math.abs(category.total));

    const expenseMoney = Math.abs(expenseSummary);

    return (
        <Wrapper>
            <>
                {categoriesData < 1 ? (
                    <WithoutOperations />
                ) : (
                    <>
                        <Doughnut
                            type="doughnut"
                            options={{
                                cutout: 110,
                                borderColor: "transparent",
                            }}
                            data={{
                                labels: categoriesLabel,
                                datasets: [
                                    {
                                        data: categoriesData,
                                        backgroundColor: colorsArr,
                                    },
                                ],
                            }}
                        />
                        <ExpensesMoney>₴ {expenseMoney}</ExpensesMoney>
                    </>
                )}
            </>
        </Wrapper>
    );
};

export default Chart;
