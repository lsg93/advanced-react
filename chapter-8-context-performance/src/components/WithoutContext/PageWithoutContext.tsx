import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Block from "./Block";

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
						<Block>Block 1</Block>
						<div className="content-block split">
							<Block classes="content-block-child">Block 2 - section 1</Block>
							{sidebarActive ? null : (
								<Block classes="content-block-child">
									Block 2 Block 3 - Only visible when nav is not expanded
								</Block>
							)}
							<Block classes="content-block-child">Block 2 - Section 2</Block>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}

export default PageWithoutContext;
