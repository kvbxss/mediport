import { useGetTagsQuery } from "@/service/tagsApi";
import Loader from "./Loader";
import { columns } from "./table/Columns";
import { DataTable } from "./table/Table";
import { z } from "zod";
import ErrorDisplay from "./ErrorDisplayer";
import { Tag } from "@/interfaces";

const tagArraySchema = z.array(
  z.object({
    name: z.string(),
    count: z.number(),
  })
);

const Page = () => {
  const { data, error, isLoading } = useGetTagsQuery();

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }
  const simplifiedData: Tag[] = data?.items;

  if (error || !tagArraySchema.safeParse(simplifiedData)) {
    return (
      <ErrorDisplay
        error={error as Error}
        titleMessage="with fetching the data"
      />
    );
  }

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-4xl font-bold">Tags</h1>
      <DataTable columns={columns} data={simplifiedData} />
    </div>
  );
};

export default Page;
