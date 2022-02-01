import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { chartData } from "./ChartData";
import { ExpensesMoney, Title, Wrapper } from "./style/chart";

ChartJS.register(ArcElement, Tooltip);

const Chart = () => {
    return (
        <div>
            <Title>Statistics</Title>
            <Wrapper>
                <Doughnut
                    type="doughnut"
                    options={{
                        cutout: 110,
                        borderColor: "transparent",
                    }}
                    data={chartData}
                />
                <ExpensesMoney>₴ 24 000.00</ExpensesMoney>
            </Wrapper>
        </div>
    );
};

export default Chart;