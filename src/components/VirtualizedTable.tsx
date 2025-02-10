"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";

export interface ColumnData<T> {
  dataKey: keyof T;
  label: string;
  numeric?: boolean;
  width: number;
}

interface ReusableTableProps<T> {
  columns: ColumnData<T>[];
  data: T[];
}

export function VirtualizedTable<T>({
  columns,
  data,
}: ReusableTableProps<T>) {
  const ScrollerComponent = React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  ));
  ScrollerComponent.displayName = "ScrollerComponent";

  const TableHeadComponent = React.forwardRef<HTMLTableSectionElement>(
    (props, ref) => <TableHead {...props} ref={ref} />
  );
  TableHeadComponent.displayName = "TableHeadComponent";

  const TableBodyComponent = React.forwardRef<HTMLTableSectionElement>(
    (props, ref) => <TableBody {...props} ref={ref} />
  );
  TableBodyComponent.displayName = "TableBodyComponent";

  const VirtuosoTableComponents: TableComponents<T> = {
    Scroller: ScrollerComponent,
    Table: (props) => (
      <Table
        {...props}
        sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
      />
    ),
    TableHead: TableHeadComponent,
    TableRow: TableRow,
    TableBody: TableBodyComponent,
  };

  const fixedHeaderContent = () => (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey.toString()}
          variant="head"
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
          className="bg-teal-600"
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );

  const rowContent = (_index: number, row: T) => (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey.toString()}
          align={column.numeric ? "right" : "left"}
        >
          {row[column.dataKey] as React.ReactNode}
        </TableCell>
      ))}
    </React.Fragment>
  );

  return (
    <Paper className="h-full w-full">
      <TableVirtuoso
        data={data}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
