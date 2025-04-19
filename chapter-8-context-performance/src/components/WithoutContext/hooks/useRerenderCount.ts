import { useEffect, useRef } from "react";

const useRerenderCount = () => {
	const initialRenderRef = useRef<boolean>(true);
	const rerenderCountRef = useRef<number>(0);

	useEffect(() => {
		if (initialRenderRef.current === true) {
			initialRenderRef.current = false;
			return;
		}
		rerenderCountRef.current = rerenderCountRef.current + 1;
	});

	return rerenderCountRef.current;
};

export default useRerenderCount;
