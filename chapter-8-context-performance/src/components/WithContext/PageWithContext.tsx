import SidebarContextProvider from "./contexts/SidebarContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SplitContent from "./SplitContent/SplitContent";

function PageWithContext() {
	return (
		<SidebarContextProvider>
			<Header />
			<div>
				<div className="container using-context">
					<Sidebar />
					<section className="content">
						<div className="content-block">Block 1</div>
						<SplitContent />
					</section>
				</div>
			</div>
		</SidebarContextProvider>
	);
}

export default PageWithContext;
