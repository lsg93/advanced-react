// This button just subscribes to the context
import useRerenderCount from "../hooks/useRerenderCount";
import { useSidebarContextAPI } from "./contexts/SidebarContextWithSplitting";

function SubscribedButtonBlock() {
	const rerenderCount = useRerenderCount();

	const { handleSidebarActive } = useSidebarContextAPI();

	return (
		<div>
			<p>
				This block contains a button which uses a function that is memoised and
				retrieved from the context to open the sidebar.
			</p>
			<p>
				Previously, this rerendered when the sidebar's closed/open value
				changed, as even though the function was memoised, the value of sir
				changes?
			</p>
			<p>But as seen below, it does!</p>
			<button onClick={handleSidebarActive}>Toggle Sidebar</button>
			<p>Rerendered {rerenderCount} time(s)</p>
		</div>
	);
}

export default SubscribedButtonBlock;
