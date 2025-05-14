import React from "react";
import { useBlockContext } from "../BlockContext";

function withBlock3Functionality(Component: React.Component) {
	return (props) => {
		const { blockState, incrementBlock } = useBlockContext();
		const block3State = blockState[3];

		const MemoizedComponent = React.memo(Component);

		return (
			<MemoizedComponent
				block3State={block3State}
				incrementBlock={incrementBlock}
				{...props}
			/>
		);
	};
}

export default withBlock3Functionality;
