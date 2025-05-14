import useRerenderCount from "../hooks/useRerenderCount";
import { useBlockContext } from "./context/BlockContext";

function Block({ blockNumber }: { blockNumber: number }) {
	const { blockState, incrementBlock } = useBlockContext();
	const rerenders = useRerenderCount();

	return (
		<div>
			<p>
				Block {blockNumber} : State is {blockState[blockNumber]}
			</p>
			<p>This component has rerendered {rerenders} time(s)</p>
			<button onClick={() => incrementBlock(blockNumber)}>
				Update context
			</button>
		</div>
	);
}

export default Block;
