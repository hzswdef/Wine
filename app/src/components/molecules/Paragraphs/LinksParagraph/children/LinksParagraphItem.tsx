import { Link } from "react-router-dom";

interface LinksParagraphItemProps {
	title: string;
	uri: string;
}

const LinksParagraphItem = ({ title, uri }: LinksParagraphItemProps) => (
	<li>
		<Link key={title} to={uri} target="_blank" rel="noopener noreferrer">
			{title}
		</Link>
	</li>
);

export default LinksParagraphItem;
