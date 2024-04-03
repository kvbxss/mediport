import { useGetTagsQuery } from "@/service/tagsApi";
import { Loader } from "./Loader";
import { columns } from "./table/Columns";
import { DataTable } from "./table/Table";
import { z } from "zod";
import { Tag } from "@/interfaces";
import ErrorDisplay from "./ErrorDisplayer";

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

  const simplifiedData: Tag[] = data?.items.map(({ name, count }) => ({
    name,
    count,
  }));

  if (error || !tagArraySchema.safeParse(simplifiedData)) {
    return <ErrorDisplay />;
  }

  return (
    <div className="container py-10 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Tags</h1>
      <DataTable columns={columns} data={simplifiedData} />
    </div>
  );
};

export default Page;
