import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
	const elementRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				elementRef.current &&
				!elementRef.current.contains(event.target as Node)
			) {
				callback();
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [callback]);

	return elementRef;
};
