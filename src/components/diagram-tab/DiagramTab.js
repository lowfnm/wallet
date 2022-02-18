import Chart from "./chart/Chart";
import { TableSelect } from "./select/TableSelect";
import Table from "./table/Table";
import { Title, DiagramSection, TableSection } from "./style/diagramtab";

const DiagramTab = () => {
    return (
        <>
            <Title>Statistics</Title>
            <DiagramSection>
                <Chart />
                <TableSection>
                    <TableSelect />
                    <Table />
                </TableSection>
            </DiagramSection>
        </>
    );
};

export default DiagramTab;
