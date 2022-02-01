import Chart from "../chart/Chart";
import { TableSelect } from "./select/TableSelect";
import DiagramTable from "./table/Table";

const DiagramTab = () => {
    return (
        <>
            <Chart />
            <TableSelect />
            <DiagramTable />
        </>
    );
};

export default DiagramTab;
