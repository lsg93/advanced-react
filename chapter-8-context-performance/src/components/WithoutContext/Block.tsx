import useRerenderCount from "./hooks/useRerenderCount";

type BlockProps = {
	children: React.ReactNode;
	classes?: string;
};

function Block({ children, classes = "" }: BlockProps) {
	const rerenderCount = useRerenderCount();

	return (
		<div className={`content-block ${classes}`}>
			{children}
			<p>Rerendered {rerenderCount} time(s)</p>
		</div>
	);
}

export default Block;
