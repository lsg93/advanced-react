import { createContext, useContext, useState } from "react";

type SidebarContextType = {
	sidebarActive: boolean;
	handleSidebarActive: () => void;
};

type SidebarContextProviderProps = {
	children: React.ReactNode;
};

const SidebarContext = createContext<SidebarContextType>({
	handleSidebarActive: () => {},
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

	const handleSidebarActive = (): void => {
		setSidebarActive((prev) => !prev);
	};

	const value = { sidebarActive, handleSidebarActive };

	return (
		<SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
	);
};

export default SidebarContextProvider;
