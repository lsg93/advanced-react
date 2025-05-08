import { useSidebarContext } from "./contexts/SidebarContextWithoutSplitting";
import SidebarToggleButton from "./SidebarToggleButton";

function Sidebar() {
	const { handleSidebarActive, sidebarActive } = useSidebarContext();

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
