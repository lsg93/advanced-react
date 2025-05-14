import useRerenderCount from "../hooks/useRerenderCount";
import withBlock3Functionality from "./context/selectors/withBlock3Functionality";

function Block({
	block3State,
	incrementBlock,
	blockNumber,
}: {
	blockNumber: number;
}) {
	const rerenders = useRerenderCount();

	return (
		<div>
			<p>
				This block uses a selector - so it doesn't re-render unecessarily even
				though it is still subscribed to the context!
			</p>
			<p>
				Block {blockNumber} : State is {block3State}
			</p>
			<p>This component has rerendered {rerenders} time(s)</p>
			<button onClick={() => incrementBlock(blockNumber)}>
				Update context
			</button>
		</div>
	);
}

const SelectorBlock = withBlock3Functionality(Block);

export default SelectorBlock;
