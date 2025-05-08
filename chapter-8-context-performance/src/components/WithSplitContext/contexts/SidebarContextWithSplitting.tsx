import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

type SidebarContextDataType = {
	sidebarActive: boolean;
};

type SidebarContextAPIType = {
	handleSidebarActive: () => void;
};

type SidebarContextProviderProps = {
	children: React.ReactNode;
};

const SidebarContextData = createContext<SidebarContextDataType>({
	sidebarActive: true,
});

const SidebarContextAPI = createContext<SidebarContextAPIType>({
	handleSidebarActive: () => {},
});

export const useSidebarContextData = (): SidebarContextDataType => {
	const ctx = useContext(SidebarContextData);
	if (!ctx) {
		throw new Error("Sidebar Context cannot be used here.");
	}
	return ctx;
};

export const useSidebarContextAPI = (): SidebarContextAPIType => {
	const ctx = useContext(SidebarContextAPI);
	if (!ctx) {
		throw new Error("Sidebar Context cannot be used here.");
	}
	return ctx;
};

const SidebarContextProvider = ({ children }: SidebarContextProviderProps) => {
	const [sidebarActive, setSidebarActive] = useState<boolean>(true);

	const handleSidebarActive = useCallback(() => {
		setSidebarActive((prev) => !prev);
	}, []);

	const data = useMemo(() => {
		return { sidebarActive };
	}, [sidebarActive]);

	const API = useMemo(() => {
		return { handleSidebarActive };
	}, [handleSidebarActive]);

	return (
		<SidebarContextData.Provider value={data}>
			<SidebarContextAPI.Provider value={API}>
				{children}
			</SidebarContextAPI.Provider>
		</SidebarContextData.Provider>
	);
};

export default SidebarContextProvider;
