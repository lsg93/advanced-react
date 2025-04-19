import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";

function PageWithoutContext() {
	const [sidebarActive, setSidebarActive] = useState<boolean>(true);

	const handleSidebarActive = (): void => {
		setSidebarActive((prev) => !prev);
	};

	return (
		<>
			<Header
				handleSidebarActive={handleSidebarActive}
				sidebarActive={sidebarActive}
			/>
			<div>
				<div className={`container ${sidebarActive ? "" : "sidebar-closed"}`}>
					<Sidebar
						handleSidebarActive={handleSidebarActive}
						sidebarActive={sidebarActive}
					/>
					<section className="content">
						<div className="content-block">Block 1</div>
						<section className="content-block split">
							<div className="content-block-child">Block 2 - Section 1</div>
							{sidebarActive ? (
								<div className="content-block-child">
									Block 2 Block 3 - Only visible when nav is expanded
								</div>
							) : null}
							<div className="content-block-child">Block 2 - Section 2</div>
						</section>
					</section>
				</div>
			</div>
		</>
	);
}

export default PageWithoutContext;
