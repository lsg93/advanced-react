import { useEffect, useState } from "react";

const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState<Record<string, number>>(
		{}
	);

	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		});
	}, []);

	return mousePosition;
};

export default useMousePosition;
