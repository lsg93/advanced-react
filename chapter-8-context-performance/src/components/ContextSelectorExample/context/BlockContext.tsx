import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";

const initialBlockState: Record<number, number> = { 1: 0, 2: 0, 3: 0 };

const BlockContext = createContext({
	blockState: initialBlockState,
	incrementBlock: (blockNumber: number) => {},
});

export const useBlockContext = () => {
	const ctx = useContext(BlockContext);
	return ctx;
};

function BlockContextProvider({ children }: { children: React.ReactNode }) {
	const [blockState, setBlockState] =
		useState<Record<number, number>>(initialBlockState);

	const incrementBlock = useCallback(
		(blockNumber: number) =>
			setBlockState((prev) => {
				return { ...prev, [blockNumber]: prev[blockNumber] + 1 };
			}),
		[]
	);

	const value = useMemo(() => {
		return { blockState, incrementBlock };
	}, [blockState, incrementBlock]);

	return (
		<BlockContext.Provider value={value}>{children}</BlockContext.Provider>
	);
}

export default BlockContextProvider;
