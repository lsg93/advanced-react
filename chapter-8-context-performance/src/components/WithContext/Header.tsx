import HamburgerMenu from "../../assets/hamburger-menu.svg";
import { SidebarProps } from "./Sidebar";

function Header({ handleSidebarActive, sidebarActive }: SidebarProps) {
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
