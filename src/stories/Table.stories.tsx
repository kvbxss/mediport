import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { DataTable } from "../components/table/Table";
import { columns } from "../components/table/Columns";
import { Tag } from "@/interfaces";

export default {
  title: "Table",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
} as Meta;

const data: Tag[] = [
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
  { name: "Tag1", count: 10 },
  { name: "Tag2", count: 20 },
];

const Template: StoryFn<DataTableProps<Tag>> = () => (
  <DataTable
    columns={columns}
    data={data}
    onPageChange={(pageNumber) => setPageNumber(pageNumber)}
    maxRowCount={data.length}
  />
);

export const Default = Template.bind({});
