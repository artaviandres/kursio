import React from 'react';
import { Table } from 'semantic-ui-react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import '../../styles/table.scss';

export default function TableComp({ color, headerCells, bodyCells, editable, deletable, hasFooter, footerContent, onDeleteQuestion }) {
  return (
    <Table color={color} className="table-container">
      <Table.Header>
        <Table.Row>
          {headerCells.map((headerCell) => <Table.HeaderCell key={headerCell} className="table-header">{headerCell}</Table.HeaderCell>)}
        </Table.Row>
      </Table.Header>

      <Table.Body className="table-body">
        {bodyCells.map((bodyRow) => (
          <Table.Row>
            {bodyRow.map((bodyCell) => {
              return (
                <Table.Cell>
                  {typeof bodyCell !== 'string' ? bodyCell.map((item) => <p>{item}</p>) : bodyCell}
                </Table.Cell>
              )
            })}
            {(editable || deletable) && <Table.Cell>{editable && <a><FiEdit2 size={18} /></a>}{deletable && <a onClick={() => onDeleteQuestion(bodyRow[0])}><FiTrash2 size={18} /></a>}</Table.Cell>}
          </Table.Row>
        ))}
      </Table.Body>
      {hasFooter && <Table.Footer className="table-footer">
          <Table.Row>
            <Table.HeaderCell>{footerContent}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      }
    </Table>
  );
};
