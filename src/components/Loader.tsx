import React from "react";

import { Progress } from "@/components/ui/progress";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Progress value={100} />
    </div>
  );
};

export { Loader };
