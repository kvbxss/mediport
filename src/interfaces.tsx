import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export interface Response {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Tag {
  name: string;
  count: number;
}
