// This button just subscribes to the context
import useRerenderCount from "../hooks/useRerenderCount";
import { useSidebarContext } from "./contexts/SidebarContextWithoutSplitting";

function SubscribedButtonBlock() {
	const rerenderCount = useRerenderCount();

	const { handleSidebarActive } = useSidebarContext();

	return (
		<div>
			<p>
				This block contains a button which uses a function that is memoised and
				retrieved from the context to open the sidebar.
			</p>
			<p>
				You would think that this component should not rerender when the
				sidebar's closed/open value changes, as the function is memoised...
			</p>
			<p>But as seen below, it does!</p>
			<button onClick={handleSidebarActive}>Toggle Sidebar</button>
			<p>Rerendered {rerenderCount} time(s)</p>
		</div>
	);
}

export default SubscribedButtonBlock;
