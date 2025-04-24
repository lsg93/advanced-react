import MemoisedSidebarContextProvider from "./contexts/MemoisedSidebarContext";
import SidebarContextProvider from "./contexts/SidebarContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import SplitContent from "./SplitContent/SplitContent";
import { ReactNode } from "react";
import useMousePosition from "../hooks/useMousePosition";

// This is just a stripped down example of a component with state that should force rerenders in the context.
// Every time the mouse moves and state is updated, the context (and its subscribers) will also update
// Which is terrible for performance.

function RerenderingComponentWithoutMemoisedContext({
	children,
}: {
	children: ReactNode;
}) {
	const mousePosition = useMousePosition();
	console.log({ mousePosition });

	return <SidebarContextProvider>{children}</SidebarContextProvider>;
}

function RerenderingComponentWithMemoisedContext({
	children,
}: {
	children: ReactNode;
}) {
	const mousePosition = useMousePosition();
	console.log({ mousePosition });

	return (
		<MemoisedSidebarContextProvider>{children}</MemoisedSidebarContextProvider>
	);
}

function Page() {
	return (
		<>
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
		</>
	);
}

function PageWithContextThatRerenders() {
	return (
		<RerenderingComponentWithMemoisedContext>
			<Page />
		</RerenderingComponentWithMemoisedContext>
	);
}

export default PageWithContextThatRerenders;
