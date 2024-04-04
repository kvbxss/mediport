import { useGetTagsQuery } from "@/service/tagsApi";
import Loader from "./Loader";
import { columns } from "./table/Columns";
import { DataTable } from "./table/Table";
import { z } from "zod";
import ErrorDisplay from "./ErrorDisplayer";
import { Tag } from "@/interfaces";
import { useState } from "react";

const tagArraySchema = z.array(
  z.object({
    name: z.string(),
    count: z.number(),
  })
);

const Page = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, isLoading } = useGetTagsQuery(pageNumber);

  console.log(pageNumber);
  console.log(data);

  if (isLoading) {
    return <Loader />;
  }
  const simplifiedData: Tag[] = data?.items;

  if (error || !tagArraySchema.safeParse(simplifiedData)) {
    return (
      <ErrorDisplay error={error as Error} titleMessage="With the data type" />
    );
  }

  if (pageNumber < 0) {
    return (
      <ErrorDisplay
        error={error as unknown as Error}
        titleMessage="Page Number can't be below zero."
      />
    );
  }

  if (simplifiedData.length == 0) {
    return (
      <ErrorDisplay
        error={error as unknown as Error}
        titleMessage="With fetching the data."
      />
    );
  }

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">Tags</h1>
      <DataTable
        columns={columns}
        data={simplifiedData}
        maxRowCount={data.total}
        onPageChange={(pageNumber) => setPageNumber(pageNumber)}
      />
    </div>
  );
};

export default Page;
