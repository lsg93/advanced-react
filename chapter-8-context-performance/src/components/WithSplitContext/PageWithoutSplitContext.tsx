import SidebarContextProvider from "./contexts/SidebarContextWithoutSplitting";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SplitContent from "./SplitContent/SplitContent";
import SubscribedButtonBlockWithoutSplitContext from "./SubscribedButtonWithoutSplitContext";

function PageWithoutSplitContext() {
	return (
		<SidebarContextProvider>
			<Header />
			<div>
				<div className="container using-context">
					<Sidebar />
					<section className="content">
						<div className="content-block">
							<SubscribedButtonBlockWithoutSplitContext />
						</div>
						<SplitContent />
					</section>
				</div>
			</div>
		</SidebarContextProvider>
	);
}

export default PageWithoutSplitContext;
