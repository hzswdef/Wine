import Pagination from "@components/molecules/Pagination/Pagination";

interface TagPageFooterProps {
	paginationTotal: number;
	paginationActivePage: number;
	paginationOnPageChange: (page: number) => void;
}

const TagPageFooter = ({
	paginationTotal,
	paginationActivePage,
	paginationOnPageChange
}: TagPageFooterProps) => (
	<div className="page-tag-footer">
		<Pagination
			total={paginationTotal}
			activePage={paginationActivePage}
			onPageChange={paginationOnPageChange}
		/>
	</div>
);

export default TagPageFooter;
