import LeftArrow from "../../assets/left-arrow.svg";

type SidebarToggleButtonProps = {
	handleSidebarActive: () => void;
};

function SidebarToggleButton({
	handleSidebarActive,
}: SidebarToggleButtonProps) {
	return (
		<button onClick={handleSidebarActive} className="sidebar-toggle">
			<img src={LeftArrow} />
		</button>
	);
}

export default SidebarToggleButton;
