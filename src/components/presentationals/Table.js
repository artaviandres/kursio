import React from 'react';
import { Table } from 'semantic-ui-react';

import '../../styles/table.scss';

export default function TableComp({ color, headerCells, bodyCells, headerClass }) {
  return (
    <Table color={color} className="table-container">
      <Table.Header>
        <Table.Row>
          {headerCells.map((headerCell) => <Table.HeaderCell key={headerCell} className="table-header">{headerCell}</Table.HeaderCell>)}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {bodyCells.map((bodyRow) => (
          <Table.Row>
            {bodyRow.map((bodyCell) => (
              <Table.Cell>
                {bodyCell}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
        {/* <Table.Row>
          <Table.Cell collapsing>
            <Checkbox defaultChecked />
          </Table.Cell>
          <Table.Cell>d44fe472-da7e-467c-ba9b-bf756eba788e</Table.Cell>
          <Table.Cell>Andrés Artavia</Table.Cell>
          <Table.Cell>artaviandres@gmail.com</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell collapsing>
            <Checkbox defaultChecked />
          </Table.Cell>
          <Table.Cell>3ad74dfe-f619-4654-bcd9-39bb290ce728</Table.Cell>
          <Table.Cell>Jon Snow</Table.Cell>
          <Table.Cell>jon@snow.com</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  );
};
