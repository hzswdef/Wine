import { clsx } from "clsx";
import { PropsWithChildren, useMemo, useState } from "react";
import { Heading } from "rsuite";

interface PageProps extends PropsWithChildren {
  page: string;
  title?: string;
  className?: string;
}

const Page = ({ children, page, ...rest }: PageProps) => {
  const [classNames, setClassNames] = useState<string>("page");

  useMemo(() => {
    if (rest?.className) {
      setClassNames(clsx(`page-${page}`, rest.className));
    } else {
      setClassNames(`page-${page}`);
    }
  }, [page, rest.className]);

  return (
    <div className={classNames}>
      {rest?.title && (
        <Heading level={1} className="mb-8 font-bold xl:text-5xl">
          {rest.title}
        </Heading>
      )}

      {children}
    </div>
  );
};

export default Page;
