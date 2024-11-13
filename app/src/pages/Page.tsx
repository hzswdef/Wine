import { clsx } from "clsx";
import { PropsWithChildren, useMemo } from "react";
import { Heading } from "rsuite";

interface PageProps extends PropsWithChildren {
  page: string;
  title?: string;
  className?: string;
}

const Page = ({ children, page, ...rest }: PageProps) => {
  const className = useMemo(() => {
    if (rest?.className) {
      return clsx(`page-${page}`, rest.className);
    } else {
      return `page-${page}`;
    }
  }, [page, rest.className]);

  return (
    <div className={className}>
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
