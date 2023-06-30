export const getNavLinkPath = (title: string, username: string): string => {
  return `/${username}/${
    title.toLocaleLowerCase() !== "posts" ? title.toLowerCase() : ""
  }`;
};
