import HamburgerMenu from "../../assets/hamburger-menu.svg";
import { useSidebarContext } from "./contexts/SidebarContext";

function Header() {
	const { handleSidebarActive, sidebarActive } = useSidebarContext();

	return (
		<header className="header">
			{sidebarActive ? null : (
				<button
					className="header-sidebar-toggle-button"
					onClick={handleSidebarActive}
				>
					<img src={HamburgerMenu} />
				</button>
			)}
		</header>
	);
}

export default Header;
