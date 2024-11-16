import { memo, useMemo } from "react";
import { Pagination as RSuitePagination } from "rsuite";

const pageLimit: number = +import.meta.env.VITE_DRUPAL_PAGE_LIMIT;

export interface PaginationProps {
  total: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const Pagination = memo(
  ({ total, activePage, onPageChange }: PaginationProps) => {
    const isSinglePage: boolean = useMemo(() => {
      return total <= pageLimit;
    }, [total]);

    if (isSinglePage) {
      return <></>;
    }

    return (
      <RSuitePagination
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
  },
);

export default Pagination;
