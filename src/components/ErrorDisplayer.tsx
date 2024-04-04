const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-content-center rounded-md border border-red-700 px-5  py-10 text-red-700">
      {children}
    </div>
  );
};

type Props = {
  titleMessage: string;
  error: string | Error;
};

const ErrorDisplay = ({ error, titleMessage }: Props) => {
  if (error instanceof Error) {
    return (
      <Wrapper>
        <h1 className="text-xl font-semibold">There was an error</h1>
        <p className="text-xs">{error.message}</p>
      </Wrapper>
    );
  }

  if (typeof error === "string") {
    return (
      <Wrapper>
        <h1 className="text-xl font-semibold">There was an error</h1>
        <p className="text-xs">{error}</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h1 className="text-xl font-semibold">There was an error</h1>
      <p className="text-xs">{titleMessage}</p>
    </Wrapper>
  );
};

export default ErrorDisplay;
