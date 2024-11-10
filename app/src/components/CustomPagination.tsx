import { useMemo } from "react";
import { Pagination } from "rsuite";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

interface CustomPaginationProps {
  total: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination = ({
  total,
  activePage,
  onPageChange,
}: CustomPaginationProps) => {
  const isSinglePage: boolean = useMemo(() => {
    return total <= pageLimit;
  }, [total]);

  if (isSinglePage) {
    return <></>;
  }

  return (
    <Pagination
      className="justify-center"
      prev
      next
      ellipsis
      boundaryLinks
      maxButtons={10}
      total={total}
      limit={pageLimit}
      activePage={activePage}
      onChangePage={onPageChange}
    />
  );
};

export default CustomPagination;
