import SidebarContextProvider from "./contexts/SidebarContextWithSplitting";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SplitContent from "./SplitContent/SplitContent";
import SubscribedButtonBlockWithSplitContext from "./SubscribedButtonWithSplitContext";

function PageWithSplitContext() {
	return (
		<SidebarContextProvider>
			<Header />
			<div>
				<div className="container using-context">
					<Sidebar />
					<section className="content">
						<div className="content-block">
							<SubscribedButtonBlockWithSplitContext />
						</div>
						<SplitContent />
					</section>
				</div>
			</div>
		</SidebarContextProvider>
	);
}

export default PageWithSplitContext;
