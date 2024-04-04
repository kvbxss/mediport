import React, { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;
        return nextProgress <= 100 ? nextProgress : 100;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <Progress value={progress} />
    </div>
  );
};

export default Loader;
