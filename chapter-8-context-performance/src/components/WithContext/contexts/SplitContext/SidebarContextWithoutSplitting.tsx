import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

type SidebarContextType = {
	handleCloseSidebar: () => void;
	handleOpenSidebar: () => void;
	sidebarActive: boolean;
};

type SidebarContextProviderProps = {
	children: React.ReactNode;
};

const SidebarContext = createContext<SidebarContextType>({
	handleCloseSidebar: () => {},
	handleOpenSidebar: () => {},
	sidebarActive: true,
});

export const useSidebarContext = (): SidebarContextType => {
	const ctx = useContext(SidebarContext);
	if (!ctx) {
		throw new Error("Sidebar Context cannot be used here.");
	}
	return ctx;
};

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
	const [sidebarActive, setSidebarActive] = useState<boolean>(true);

	// This example works best if you have a separate function for opening and closing.
	// Otherwise, the child components would rely on both functions anyway, so the rerenders wouldn't be an issue?

	const handleCloseSidebar = useCallback(() => {
		setSidebarActive(true);
	}, []);

	const handleOpenSidebar = useCallback(() => {
		setSidebarActive(false);
	}, []);

	const value = useMemo(() => {
		return { handleCloseSidebar, handleOpenSidebar, sidebarActive };
	}, [handleCloseSidebar, handleOpenSidebar, sidebarActive]);

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
};

export default SidebarContextProvider;
