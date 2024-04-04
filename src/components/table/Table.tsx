import React, { useState } from "react";

import {
  flexRender,
  ColumnFiltersState,
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTableProps } from "@/interfaces";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function DataTable<TData, TValue>({
  columns,
  data,
  onPageChange,
  maxRowCount,
}: DataTableProps<TData, TValue> & {
  onPageChange: (pageIndex: number) => void;
  maxRowCount: number;
}) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    rowCount: maxRowCount,
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
    },
  });
  console.log(maxRowCount);
  console.log(table.getState().pagination.pageIndex);
  console.log(table.getState().pagination.pageSize);
  console.log(table.getPageCount());
  return (
    <>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search by name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="py-2 px-2">
        <h2 className="font-bold text-xl">Display</h2>
        <Button
          variant="outline"
          className="ml-auto my-2 mx-1"
          value={table.getState().pagination.pageSize}
          onClick={() => {
            table.setPageSize(40);
          }}
        >
          40
        </Button>
        <Button
          variant="outline"
          className="ml-auto my-2 mx-1"
          value={table.getState().pagination.pageSize}
          onClick={() => {
            table.setPageSize(20);
          }}
        >
          20
        </Button>
        <Button
          variant="outline"
          className="ml-auto my-2 mx-1"
          value={table.getState().pagination.pageSize}
          onClick={() => {
            table.setPageSize(10);
          }}
        >
          10
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4 px-4">
          <h1 className="text-md font-bold px-2">
            Page {table.getState().pagination.pageIndex}
          </h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.previousPage();
              onPageChange(table.getState().pagination.pageIndex);
            }}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.nextPage();
              onPageChange(table.getState().pagination.pageIndex);
              console.log(table.getState().pagination.pageIndex);
            }}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default Table;
