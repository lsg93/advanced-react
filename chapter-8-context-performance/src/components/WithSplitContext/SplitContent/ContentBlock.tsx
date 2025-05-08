import React from "react";
import { useSidebarContext } from "../contexts/SidebarContextWithoutSplitting";
import useRerenderCount from "../../hooks/useRerenderCount";

function ContentBlock({ children }: { children: React.ReactNode }) {
	const rerenderCount = useRerenderCount();

	return (
		<div className="content-block-child">
			{children}
			<p>Rerendered {rerenderCount} time(s)</p>
		</div>
	);
}

export function OptionalContentBlock({
	children,
}: {
	children: React.ReactNode;
}) {
	const rerenderCount = useRerenderCount();
	const { sidebarActive } = useSidebarContext();

	if (!sidebarActive) return null;
	return (
		<div className="content-block-child">
			{children}
			<p>Rerendered {rerenderCount} time(s)</p>
		</div>
	);
}

export default ContentBlock;
