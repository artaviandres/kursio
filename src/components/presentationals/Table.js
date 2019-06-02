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
      </Table.Body>
    </Table>
  );
};
