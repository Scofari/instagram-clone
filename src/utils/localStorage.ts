export const addUserToLocalStorage = (user: any) => {
	localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
	localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
	const result = localStorage.getItem("user");
	const user = result ? JSON.parse(result) : null;
	return user;
};

export const addCommentToLocalStorage = (comments: string[]) => {
	localStorage.setItem("comments", JSON.stringify(comments));
};

export const removeCommentFromLocalStorage = () => {
	localStorage.removeItem("comments");
};

export const getCommentFromLocalStorage = (): string[] | [] => {
	let comments = localStorage.getItem("comments");

	if (comments) {
		return JSON.parse(comments);
	}

	return [];
};
