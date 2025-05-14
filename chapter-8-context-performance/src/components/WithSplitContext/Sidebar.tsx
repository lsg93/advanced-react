// import { useSidebarContext } from "./contexts/SidebarContextWithoutSplitting";
import {
	useSidebarContextAPI,
	useSidebarContextData,
} from "./contexts/SidebarContextWithSplitting";
import SidebarToggleButton from "./SidebarToggleButton";

function Sidebar() {
	const { handleSidebarActive } = useSidebarContextAPI();
	const { sidebarActive } = useSidebarContextData();

	return (
		<nav className={`sidebar using-context ${sidebarActive ? "" : "closed"}`}>
			<section className="sidebar-content"></section>
			{sidebarActive ? (
				<SidebarToggleButton handleSidebarActive={handleSidebarActive} />
			) : null}
		</nav>
	);
}

export default Sidebar;
