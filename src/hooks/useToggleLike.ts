import { useCallback, useState } from "react";

export const useToggleLike = (initialState: boolean) => {
	const [isLiked, setIsLiked] = useState(initialState);

	const toggleIsLiked = useCallback(
		() => setIsLiked((prevState) => !prevState),
		[]
	);

	return [isLiked, toggleIsLiked];
};
