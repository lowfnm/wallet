import Chart from "../chart/Chart";
import { TableSelect } from "./select/TableSelect";
import DiagramTable from "./table/Table";
import { Title, DiagramSection, TableSection } from "./style/diagramtab";

const DiagramTab = () => {
    return (
        <>
            <Title>Statistics</Title>
            <DiagramSection>
                <Chart />
                <TableSection>
                    <TableSelect />
                    <DiagramTable />
                </TableSection>
            </DiagramSection>
        </>
    );
};

export default DiagramTab;
