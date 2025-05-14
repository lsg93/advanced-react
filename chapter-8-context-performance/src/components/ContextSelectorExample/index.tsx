import Block from "./Block";
import SelectorBlock from "./SelectorBlock";
import BlockContextProvider from "./context/BlockContext";

function ContextSelectorExample() {
	return (
		<BlockContextProvider>
			<div>
				<Block blockNumber={1} />
				<Block blockNumber={2} />
				<SelectorBlock blockNumber={3} />
			</div>
		</BlockContextProvider>
	);
}

export default ContextSelectorExample;
