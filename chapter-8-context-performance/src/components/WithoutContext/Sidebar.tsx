import SidebarToggleButton from "./SidebarToggleButton";

export type SidebarProps = {
	handleSidebarActive: () => void;
	sidebarActive: boolean;
};

function Sidebar({ handleSidebarActive, sidebarActive }: SidebarProps) {
	return (
		<nav className={`sidebar ${sidebarActive ? "" : "closed"}`}>
			<section className="sidebar-content"></section>
			{sidebarActive ? (
				<SidebarToggleButton handleSidebarActive={handleSidebarActive} />
			) : null}
		</nav>
	);
}

export default Sidebar;
